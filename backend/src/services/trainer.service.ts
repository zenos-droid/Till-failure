import { AppointmentStatus, Prisma } from '@prisma/client';
import { prisma } from '../prisma/client.js';
import { presentAppointment, presentTrainer } from './presenter.service.js';

const userSelect = { id: true, publicId: true, fullName: true, email: true, role: true, isActive: true, createdAt: true };

export async function trainerForUser(userId: string) {
  return prisma.trainer.findUniqueOrThrow({ where: { userId } });
}

export async function ownAppointments(userId: string) {
  const trainer = await trainerForUser(userId);
  const appointments = await prisma.appointment.findMany({
    where: { trainerId: trainer.id },
    include: { member: { include: { user: { select: userSelect } } }, trainer: { include: { user: { select: userSelect } } } },
    orderBy: { scheduledDate: 'asc' }
  });
  return appointments.map(presentAppointment);
}

export async function completeOwnAppointment(userId: string, appointmentId: string, notes?: string) {
  const trainer = await trainerForUser(userId);
  const appointment = await prisma.appointment.update({
    where: { id: appointmentId, trainerId: trainer.id },
    data: { status: AppointmentStatus.COMPLETED, notes },
    include: { member: { include: { user: { select: userSelect } } }, trainer: { include: { user: { select: userSelect } } } }
  });
  return presentAppointment(appointment);
}

export async function updateOwnSchedule(userId: string, schedule: Prisma.InputJsonValue) {
  const trainer = await trainerForUser(userId);
  const updated = await prisma.trainer.update({
    where: { id: trainer.id },
    data: { schedule },
    include: { user: { select: userSelect } }
  });
  return presentTrainer(updated);
}
