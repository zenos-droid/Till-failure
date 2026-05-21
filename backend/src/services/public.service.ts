import { prisma } from '../prisma/client.js';
import { presentMembershipPlan, presentTrainer } from './presenter.service.js';

const userSelect = { id: true, publicId: true, fullName: true, email: true, role: true, isActive: true, createdAt: true };

export async function publicTrainers() {
  const trainers = await prisma.trainer.findMany({
    where: { user: { isActive: true } },
    include: { user: { select: userSelect } },
    orderBy: { createdAt: 'asc' }
  });
  return trainers.map(presentTrainer);
}

export async function publicMemberships() {
  const plans = await prisma.membershipPlan.findMany({ where: { isActive: true }, orderBy: { price: 'asc' } });
  return plans.map(presentMembershipPlan);
}

export async function publicSchedule() {
  const trainers = await publicTrainers();
  return trainers.map((trainer) => ({
    trainerId: trainer.id,
    trainerPublicId: trainer.publicId,
    trainerName: trainer.user?.fullName,
    schedule: trainer.schedule
  }));
}
