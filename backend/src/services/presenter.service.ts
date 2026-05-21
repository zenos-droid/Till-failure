import type { Appointment, MembershipPlan, Member, Receptionist, Trainer, User } from '@prisma/client';

type UserSafe = Pick<User, 'id' | 'publicId' | 'fullName' | 'email' | 'role' | 'isActive' | 'createdAt'>;

export function presentUser(user: UserSafe) {
  return user;
}

export function presentTrainer(trainer: Trainer & { user?: UserSafe }) {
  return {
    id: trainer.id,
    publicId: trainer.publicId,
    specialty: trainer.specialty,
    experience: trainer.experience,
    schedule: trainer.schedule,
    bio: trainer.bio,
    user: trainer.user ? presentUser(trainer.user) : undefined
  };
}

export function presentReceptionist(receptionist: Receptionist & { user?: UserSafe }) {
  return {
    id: receptionist.id,
    publicId: receptionist.publicId,
    user: receptionist.user ? presentUser(receptionist.user) : undefined
  };
}

export function presentMember(member: Member & { user?: UserSafe; membershipPlan?: MembershipPlan | null }) {
  return {
    id: member.id,
    publicId: member.publicId,
    membershipPlanId: member.membershipPlanId,
    joinedAt: member.joinedAt,
    user: member.user ? presentUser(member.user) : undefined,
    membershipPlan: member.membershipPlan ? presentMembershipPlan(member.membershipPlan) : null
  };
}

export function presentMembershipPlan(plan: MembershipPlan) {
  return {
    id: plan.id,
    publicId: plan.publicId,
    name: plan.name,
    price: Number(plan.price),
    duration: plan.duration,
    description: plan.description,
    features: plan.features,
    isActive: plan.isActive
  };
}

export function presentAppointment(appointment: Appointment & { member?: Member & { user?: UserSafe }; trainer?: Trainer & { user?: UserSafe } }) {
  return {
    id: appointment.id,
    publicId: appointment.publicId,
    memberId: appointment.memberId,
    trainerId: appointment.trainerId,
    scheduledDate: appointment.scheduledDate,
    status: appointment.status,
    notes: appointment.notes,
    member: appointment.member ? presentMember(appointment.member) : undefined,
    trainer: appointment.trainer ? presentTrainer(appointment.trainer) : undefined
  };
}
