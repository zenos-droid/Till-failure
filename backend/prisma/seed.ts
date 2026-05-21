import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const password = 'Admin@123';

const memberships = [
  {
    publicId: 'plan-black-steel',
    name: 'BLACK STEEL',
    price: 89,
    duration: 30,
    description: 'Uncompromising access to raw iron, high-performance racks, and open gym floor resources.',
    features: [
      { name: '24/7 Access to Main Iron Floor', included: true },
      { name: 'All Premium Racks, Weights & Platforms', included: true },
      { name: 'Personal Coaching Consultation', included: false }
    ]
  },
  {
    publicId: 'plan-redline-aggressive',
    name: 'REDLINE AGGRESSIVE',
    price: 149,
    duration: 30,
    description: 'Unlimited specialty classes, recovery suite, and elite metrics tracking.',
    features: [
      { name: '24/7 Access to All Facilities', included: true },
      { name: 'Unlimited Elite Athletic & Metcon Classes', included: true },
      { name: 'Full InBody Monthly Metric Reports', included: true }
    ]
  },
  {
    publicId: 'plan-till-failure-covenant',
    name: 'TILL FAILURE COVENANT',
    price: 299,
    duration: 30,
    description: 'Fully immersive coaching ecosystem with dedicated coaching and recovery priority.',
    features: [
      { name: '1-on-1 Dedicated Coach', included: true },
      { name: 'Personalized Nutrition Blocks', included: true },
      { name: 'Unlimited Recovery Suite', included: true }
    ]
  }
];

const trainers = [
  {
    publicId: 'trn-marcus-vance',
    email: 'marcus@tillfailure.com',
    fullName: 'Marcus Vance',
    specialty: 'Powerlifting',
    experience: '14 Years in Competitive Strength',
    bio: 'Coaches elite strength athletes with a focus on biomechanics and injury-resistant power.',
    schedule: { Monday: ['09:00', '19:00'], Thursday: ['09:00'], Saturday: ['09:00'] }
  },
  {
    publicId: 'trn-elena-rostova',
    email: 'elena@tillfailure.com',
    fullName: 'Elena Rostova',
    specialty: 'Bodybuilding',
    experience: '9 Years Elite Competitor',
    bio: 'Designs physique programs from a structural, aesthetic, and performance perspective.',
    schedule: { Monday: ['17:30'], Tuesday: ['17:30'], Wednesday: ['18:00'], Thursday: ['18:00'] }
  },
  {
    publicId: 'trn-jaxson-reed',
    email: 'jaxson@tillfailure.com',
    fullName: 'Jaxson Reed',
    specialty: 'HIIT / Conditioning',
    experience: '11 Years Tactical Coaching',
    bio: 'Builds tactical conditioning, anaerobic capacity, and resilient movement systems.',
    schedule: { Monday: ['06:00'], Tuesday: ['06:00'], Wednesday: ['12:00'], Friday: ['06:00'] }
  },
  {
    publicId: 'trn-victor-cole',
    email: 'victor@tillfailure.com',
    fullName: 'Victor Cole',
    specialty: 'Athletic Performance',
    experience: '8 Years NFL Strength Coach',
    bio: 'Prepares athletes for speed, explosiveness, joint longevity, and power transfer.',
    schedule: { Monday: ['19:00'], Wednesday: ['08:00'], Friday: ['17:30'], Sunday: ['10:00'] }
  }
];

async function main() {
  const adminHash = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email: 'admin@tillfailure.com' },
    update: {
      passwordHash: adminHash,
      role: Role.ADMIN,
      isActive: true
    },
    create: {
      publicId: 'usr-admin',
      fullName: 'Till Failure Admin',
      email: 'admin@tillfailure.com',
      passwordHash: adminHash,
      role: Role.ADMIN
    }
  });

  for (const plan of memberships) {
    await prisma.membershipPlan.upsert({
      where: { publicId: plan.publicId },
      update: plan,
      create: plan
    });
  }

  for (const trainer of trainers) {
    const trainerHash = await bcrypt.hash('Trainer@123', 12);
    await prisma.user.upsert({
      where: { email: trainer.email },
      update: { fullName: trainer.fullName, isActive: true, role: Role.TRAINER },
      create: {
        publicId: trainer.email.replace('@tillfailure.com', '').replace(/^/, 'usr-'),
        fullName: trainer.fullName,
        email: trainer.email,
        passwordHash: trainerHash,
        role: Role.TRAINER,
        trainer: {
          create: {
            publicId: trainer.publicId,
            specialty: trainer.specialty,
            experience: trainer.experience,
            schedule: trainer.schedule,
            bio: trainer.bio
          }
        }
      }
    });

    const user = await prisma.user.findUniqueOrThrow({ where: { email: trainer.email } });
    await prisma.trainer.upsert({
      where: { publicId: trainer.publicId },
      update: {
        specialty: trainer.specialty,
        experience: trainer.experience,
        schedule: trainer.schedule,
        bio: trainer.bio
      },
      create: {
        publicId: trainer.publicId,
        userId: user.id,
        specialty: trainer.specialty,
        experience: trainer.experience,
        schedule: trainer.schedule,
        bio: trainer.bio
      }
    });
  }

  const receptionistHash = await bcrypt.hash('Reception@123', 12);
  await prisma.user.upsert({
    where: { email: 'frontdesk@tillfailure.com' },
    update: { isActive: true, role: Role.RECEPTIONIST },
    create: {
      publicId: 'usr-frontdesk',
      fullName: 'Front Desk',
      email: 'frontdesk@tillfailure.com',
      passwordHash: receptionistHash,
      role: Role.RECEPTIONIST,
      receptionist: { create: { publicId: 'rec-frontdesk' } }
    }
  });

  console.log('Seed complete: admin@tillfailure.com / Admin@123');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
