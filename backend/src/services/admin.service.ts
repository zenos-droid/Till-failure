import { AppointmentStatus, Prisma, Role } from '@prisma/client';
import { prisma } from '../prisma/client.js';
import { hashPassword } from '../utils/password.js';
import { toPublicId } from '../utils/publicId.js';
import { presentAppointment, presentMembershipPlan, presentReceptionist, presentTrainer } from './presenter.service.js';

const userSelect = { id: true, publicId: true, fullName: true, email: true, role: true, isActive: true, createdAt: true };

export async function createTrainer(input: { fullName: string; email: string; password: string; specialty: string; experience: string; schedule: Prisma.InputJsonValue; bio: string }) {
  const trainer = await prisma.trainer.create({
    data: {
      publicId: toPublicId('trn', input.fullName),
      specialty: input.specialty,
      experience: input.experience,
      schedule: input.schedule ?? {},
      bio: input.bio,
      user: {
        create: {
          publicId: toPublicId('usr', input.email.split('@')[0]),
          fullName: input.fullName,
          email: input.email,
          passwordHash: await hashPassword(input.password),
          role: Role.TRAINER
        }
      }
    },
    include: { user: { select: userSelect } }
  });
  return presentTrainer(trainer);
}

export async function deactivateTrainer(id: string) {
  const trainer = await prisma.trainer.findUniqueOrThrow({ where: { id }, include: { user: { select: userSelect } } });
  await prisma.user.update({ where: { id: trainer.userId }, data: { isActive: false } });
  return { id: trainer.id, publicId: trainer.publicId, deactivated: true };
}

export async function createReceptionist(input: { fullName: string; email: string; password: string }) {
  const receptionist = await prisma.receptionist.create({
    data: {
      publicId: toPublicId('rec', input.fullName),
      user: {
        create: {
          publicId: toPublicId('usr', input.email.split('@')[0]),
          fullName: input.fullName,
          email: input.email,
          passwordHash: await hashPassword(input.password),
          role: Role.RECEPTIONIST
        }
      }
    },
    include: { user: { select: userSelect } }
  });
  return presentReceptionist(receptionist);
}

export async function deactivateEmployee(userId: string) {
  const user = await prisma.user.update({ where: { id: userId }, data: { isActive: false }, select: userSelect });
  return { id: user.id, publicId: user.publicId, deactivated: true };
}

export async function listTrainers() {
  const trainers = await prisma.trainer.findMany({ include: { user: { select: userSelect } }, orderBy: { createdAt: 'desc' } });
  return trainers.map(presentTrainer);
}

export async function upsertMembership(id: string | undefined, input: { name: string; price: number; duration: number; description?: string; features?: Prisma.InputJsonValue; isActive?: boolean }) {
  const data = {
    publicId: toPublicId('plan', input.name),
    name: input.name,
    price: input.price,
    duration: input.duration,
    description: input.description,
    features: input.features,
    isActive: input.isActive ?? true
  };

  const plan = id
    ? await prisma.membershipPlan.update({ where: { id }, data })
    : await prisma.membershipPlan.create({ data });
  return presentMembershipPlan(plan);
}

export async function listMemberships(includeInactive = false) {
  const plans = await prisma.membershipPlan.findMany({
    where: includeInactive ? undefined : { isActive: true },
    orderBy: { price: 'asc' }
  });
  return plans.map(presentMembershipPlan);
}

export async function scheduleAppointment(input: { memberId: string; trainerId: string; scheduledDate: Date; status?: AppointmentStatus; notes?: string }) {
  const appointment = await prisma.appointment.create({
    data: {
      publicId: toPublicId('apt', input.memberId.slice(0, 8) + '-' + Date.now()),
      memberId: input.memberId,
      trainerId: input.trainerId,
      scheduledDate: input.scheduledDate,
      status: input.status ?? AppointmentStatus.PENDING,
      notes: input.notes
    },
    include: { member: { include: { user: { select: userSelect } } }, trainer: { include: { user: { select: userSelect } } } }
  });
  return presentAppointment(appointment);
}

export async function updateAppointmentStatus(id: string, status: AppointmentStatus, notes?: string) {
  const appointment = await prisma.appointment.update({
    where: { id },
    data: { status, notes },
    include: { member: { include: { user: { select: userSelect } } }, trainer: { include: { user: { select: userSelect } } } }
  });
  return presentAppointment(appointment);
}

export async function analytics() {
  const [users, trainers, members, appointments, activePlans, byStatus] = await Promise.all([
    prisma.user.count(),
    prisma.trainer.count({ where: { user: { isActive: true } } }),
    prisma.member.count({ where: { user: { isActive: true } } }),
    prisma.appointment.count(),
    prisma.membershipPlan.count({ where: { isActive: true } }),
    prisma.appointment.groupBy({ by: ['status'], _count: { status: true } })
  ]);

  return { users, trainers, members, appointments, activePlans, appointmentStatusCounts: byStatus };
}
