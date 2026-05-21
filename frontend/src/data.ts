import { Trainer, DaySchedule, MembershipPlan, Transformation, Program } from './types';

export const CORE_STATS = [
  { value: '15,000+', label: 'Sq. Ft. Steel & Iron' },
  { value: '24/7', label: 'Uncompromised Ingress' },
  { value: '18+', label: 'Elite Level Coaches' },
  { value: '100%', label: 'Commitment Required' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'prog-bodybuilding',
    title: 'Hypertrophy Mastery',
    duration: '12 Weeks',
    difficulty: 'Advanced',
    description: 'Designed for maximal mechanical tension and muscle recruitment. Focuses on high volume, tempo control, and mind-muscle isolation till absolute failure.',
    iconName: 'Dumbbell',
    bullets: [
      'Intense volume target blocks',
      'Drop-sets, rest-pause & intra-stretch methods',
      'Custom hormonal optimization advice',
      'Advanced load selection tracking'
    ]
  },
  {
    id: 'prog-powerlifting',
    title: 'Kinetic Strength Engine',
    duration: '16 Weeks',
    difficulty: 'Elite Only',
    description: 'A pure power development block built around squat, bench press, deadlift, and overhead mechanics. Guided by percentages of your 1RM.',
    iconName: 'Activity',
    bullets: [
      'Westside Conjugate / Sheiko based protocols',
      'Detailed velocity-based tracking protocols',
      'CNS recovery management plans',
      'Form breakdown biomechanical reviews'
    ]
  },
  {
    id: 'prog-conditioning',
    title: 'Metcon Decimation',
    duration: '8 Weeks',
    difficulty: 'Intermediate',
    description: 'Violent cardiac conditioning and respiratory threshold progression. Combines strongman carries, rowing, assault bikes, and barbell clusters.',
    iconName: 'Flame',
    bullets: [
      'Anearobic lactic-acid threshold testing',
      'High-intensity interval fatigue tolerance',
      'Body composition transformation',
      'Grit/resilience psychological drill logs'
    ]
  }
];

export const PHILOSOPHY_MILESTONES = [
  {
    year: '2018',
    title: 'THE COLA STEEL YARD',
    description: 'Founded in a rusted 800 sq ft garage. No air conditioning, just iron plates, chalk, and stereo speakers playing metal. Built by three brothers who refused to train in polite commercial fitness clubs.',
  },
  {
    year: '2020',
    title: 'ACCELERATING THROUGH APEX',
    description: 'Upgraded to a 6,000 sq ft industrial hangar. Added a competition powerlifting room and custom heavy-duty cable stacks, forging a haven for athletes seeking raw physical limits.',
  },
  {
    year: '2023',
    title: 'GLOBALLY ACCLAIMED REFUGE',
    description: 'Unlocked our 15,000 sq ft state-of-the-art facility. Merged brutal raw iron foundations with sleek, premium dark steel aesthetics, full-spectrum recovery suites, and biometric analysis labs.',
  },
  {
    year: '2026',
    title: 'TILL FAILURE EMPIRE',
    description: 'Operating with relentless excellence, we remain devoted strictly to those who understand that growth only happens when you hit the barrier and push through.',
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus "The Beast" Vance',
    role: 'Head of Power & Biomechanics',
    specialty: 'Powerlifting',
    certifications: ['IPF Elite Coach', 'CSCS *D', 'M.S. Exercise Physiology'],
    experience: '14 Years in Competitive Strength',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop',
    bio: 'Marcus has coached 12 national powerlifting champions. He believes that technique is the ultimate form of injury prevention and raw capacity extension.',
    socials: {
      instagram: 'https://instagram.com/marcusthebeast',
      twitter: 'https://twitter.com/vance_iron',
      youtube: 'https://youtube.com/marcusvancepower'
    }
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Hypertrophy & Physique Design',
    specialty: 'Bodybuilding',
    certifications: ['IFBB Figure Pro', 'Coaching Level 3', 'ISSA Sports Nutritionist'],
    experience: '9 Years Elite Competitor',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
    bio: 'Elena strictly designs physiques from a structural, aesthetic, and architectural perspective. If you are not sweating blood, you are not warming up.',
    socials: {
      instagram: 'https://instagram.com/elenarostova',
      youtube: 'https://youtube.com/rostovaphysique'
    }
  },
  {
    id: 'jaxson-reed',
    name: 'Jaxson Reed',
    role: 'Tactical conditioning Lead',
    specialty: 'HIIT / Conditioning',
    certifications: ['Ex-Navy SEAL Special Warfare Instructor', 'SFG I Kettlebell', 'TRX Master'],
    experience: '11 Years Tactical Coaching',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop',
    bio: 'Jaxson translates Special Operations combat conditions to civilian physical resilience. No shortcuts, no fancy screens, just relentless grit and anaerobic mastery.',
    socials: {
      instagram: 'https://instagram.com/jaxson_reed',
      twitter: 'https://twitter.com/reed_tactical'
    }
  },
  {
    id: 'victor-cole',
    name: 'Victor Cole',
    role: 'Speed & Athletic Performance Spec',
    specialty: 'Athletic Performance',
    certifications: ['NSCA-CSCS', 'USATF Level 2 Performance', 'Functional Range Conditioning (FRC)'],
    experience: '8 Years NFL Strength Coach',
    image: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=600&auto=format&fit=crop',
    bio: 'Victor prepares elite athletes for explosiveness, functional velocity, and multi-directional speed. He focuses heavily on joint longevity and power transfer.',
    socials: {
      instagram: 'https://instagram.com/victorcole_speed',
      twitter: 'https://twitter.com/v_cole_coaching'
    }
  }
];

export const MEMBERSHIPS: MembershipPlan[] = [
  {
    id: 'plan-basic',
    name: 'BLACK STEEL',
    priceMonthly: 89,
    priceAnnualMonthly: 69,
    description: 'Uncompromising access to raw iron, high-performance racks, and open gym floor resources.',
    tag: 'THE APST RECRUIT',
    features: [
      { name: '24/7 Access to Main Iron Floor', included: true },
      { name: 'All Premium Racks, Weights & Platforms', included: true },
      { name: 'Sleek locker rooms & rain-showers', included: true },
      { name: 'Weekly Heavy-Metal DJ Sessions', included: true },
      { name: 'Personal Coaching Consultation', included: false },
      { name: 'Biometric Lab Screenings', included: false },
      { name: 'Private Infrared Recovery Sanna', included: false }
    ],
    isPopular: false
  },
  {
    id: 'plan-pro',
    name: 'REDLINE AGGRESSIVE',
    priceMonthly: 149,
    priceAnnualMonthly: 119,
    description: 'The definitive athlete choice. Unlimited specialty structured classes, recovery suite, and elite metrics tracker.',
    tag: ' Relentless CONTENDER',
    features: [
      { name: '24/7 Access to All Facilities', included: true },
      { name: 'All Premium Racks, Weights & Platforms', included: true },
      { name: 'Sleek locker rooms & rain-showers', included: true },
      { name: 'Weekly Heavy-Metal DJ Sessions', included: true },
      { name: 'Unlimited Elite Athletic & Metcon Classes', included: true },
      { name: '1 Private Coached CNS Review / Month', included: true },
      { name: 'Full InBody Monthly Metric Reports', included: true },
      { name: 'Infrared Recovery Sauna Pass (4x/Mo)', included: true }
    ],
    isPopular: true
  },
  {
    id: 'plan-elite',
    name: 'TILL FAILURE COVENANT',
    priceMonthly: 299,
    priceAnnualMonthly: 239,
    description: 'Fully immersive coaching ecosystem. Full-time tailored nutrition programming, absolute recovery priority, and unlimited coaching.',
    tag: 'CHAMPION CALIBER',
    features: [
      { name: '24/7 Access to All Facilities', included: true },
      { name: 'All Premium Racks, Weights & Platforms', included: true },
      { name: 'Sleek locker rooms & rain-showers', included: true },
      { name: 'Weekly Heavy-Metal DJ Sessions', included: true },
      { name: 'Unlimited Elite Athletic & Metcon Classes', included: true },
      { name: '1-on-1 Dedicated Coach (2x weekly sessions)', included: true },
      { name: 'Fully Personalized Weekly Nutrition Blocks', included: true },
      { name: 'Unlimited Infrared Recovery, Cold Plunge & Compression', included: true }
    ],
    isPopular: false
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 'trans-david',
    clientName: 'David Kojo',
    age: 32,
    duration: '6 MonthsRelentless Workout',
    weightLoss: '-26 lbs fat',
    muscleGained: '+14 lbs muscle',
    achievement: 'Elite Squat 1RM: 315 lbs to 465 lbs',
    beforeImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=600&auto=format&fit=crop',
    quote: '"I trained for years at typical commercial gyms. I gained more physical power and mental resilience in 6 months at Till Failure than the last 5 years. This place is an absolute crucible."'
  },
  {
    id: 'trans-sarah',
    clientName: 'Sarah M.',
    age: 27,
    duration: '4 Months Hypertrophy Mastery',
    weightLoss: '-12 lbs fat',
    muscleGained: '+8 lbs muscle',
    achievement: 'IFBB Figure Top 5 Placement',
    beforeImg: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
    quote: '"The environment here commands effort. You cannot slack when everyone around you is lifting weights that bend the steel bar. Elena rebuilt my physical mechanics from the ground up."'
  },
  {
    id: 'trans-jackson',
    clientName: 'Marcus T.',
    age: 41,
    duration: '8 Months Pure Strength',
    weightLoss: '-42 lbs fat',
    muscleGained: '+19 lbs muscle',
    achievement: 'CNS Recovery Target 100% Achieved',
    beforeImg: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
    quote: '"Till Failure saved my physical longevity. I was getting chronic joint pains and slow recoveries. Marcus changed my loading structure and core brace alignment. I feel immortal now."'
  }
];

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  {
    day: 'Monday',
    classes: [
      { id: 'mon-1', className: 'Metcon Conditioning', time: '06:00 AM', duration: '50m', trainer: 'Jaxson Reed', intensity: 'Extreme', spotsLeft: 4 },
      { id: 'mon-2', className: 'Sheiko Bench Protocol', time: '09:00 AM', duration: '75m', trainer: 'Marcus Vance', intensity: 'High', spotsLeft: 2 },
      { id: 'mon-3', className: 'Savage Hypertrophy: Posterior Chain', time: '05:30 PM', duration: '60m', trainer: 'Elena Rostova', intensity: 'High', spotsLeft: 8 },
      { id: 'mon-4', className: 'Kinetic Speed drills', time: '07:00 PM', duration: '60m', trainer: 'Victor Cole', intensity: 'Medium', spotsLeft: 12 }
    ]
  },
  {
    day: 'Tuesday',
    classes: [
      { id: 'tue-1', className: 'Assault Bike Hell Session', time: '06:00 AM', duration: '45m', trainer: 'Jaxson Reed', intensity: 'Extreme', spotsLeft: 3 },
      { id: 'tue-2', className: 'Dynamic Effort Squat', time: '11:00 AM', duration: '90m', trainer: 'Marcus Vance', intensity: 'Extreme', spotsLeft: 1 },
      { id: 'tue-3', className: 'Savage Hypertrophy: V-Taper, Shoulders', time: '05:30 PM', duration: '60m', trainer: 'Elena Rostova', intensity: 'High', spotsLeft: 5 },
      { id: 'tue-4', className: 'Uncompromised Core & Stability', time: '07:00 PM', duration: '50m', trainer: 'Victor Cole', intensity: 'Medium', spotsLeft: 15 }
    ]
  },
  {
    day: 'Wednesday',
    classes: [
      { id: 'wed-1', className: 'Olympic Lifting Mechanics', time: '08:00 AM', duration: '90m', trainer: 'Victor Cole', intensity: 'High', spotsLeft: 6 },
      { id: 'wed-2', className: 'Oxygen Debt Metcon', time: '12:00 PM', duration: '50m', trainer: 'Jaxson Reed', intensity: 'Extreme', spotsLeft: 4 },
      { id: 'wed-3', className: 'Savage Hypertrophy: Chest Focus & Arms', time: '06:00 PM', duration: '60m', trainer: 'Elena Rostova', intensity: 'High', spotsLeft: 10 }
    ]
  },
  {
    day: 'Thursday',
    classes: [
      { id: 'thu-1', className: 'Heavy Deadlift Velocity protocol', time: '09:00 AM', duration: '75m', trainer: 'Marcus Vance', intensity: 'Extreme', spotsLeft: 3 },
      { id: 'thu-2', className: 'Tactical Strongman Carries', time: '04:30 PM', duration: '60m', trainer: 'Jaxson Reed', intensity: 'High', spotsLeft: 5 },
      { id: 'thu-3', className: 'Glute & Hamstring Biomechanics', time: '06:00 PM', duration: '60m', trainer: 'Elena Rostova', intensity: 'High', spotsLeft: 7 }
    ]
  },
  {
    day: 'Friday',
    classes: [
      { id: 'fri-1', className: 'Triple Metcon Devastation', time: '06:00 AM', duration: '60m', trainer: 'Jaxson Reed', intensity: 'Extreme', spotsLeft: 2 },
      { id: 'fri-2', className: 'Powerbuilding Bench & Accessory', time: '10:00 AM', duration: '75m', trainer: 'Elena Rostova', intensity: 'High', spotsLeft: 9 },
      { id: 'fri-3', className: 'Athletic Launch Speed Testing', time: '05:30 PM', duration: '60m', trainer: 'Victor Cole', intensity: 'High', spotsLeft: 11 },
      { id: 'fri-4', className: 'Chalk & Auld Metal Open Platforms', time: '07:00 PM', duration: '120m', trainer: 'Marcus Vance', intensity: 'Extreme', spotsLeft: 14 }
    ]
  },
  {
    day: 'Saturday',
    classes: [
      { id: 'sat-1', className: '1RM Maximum Effort Testing', time: '09:00 AM', duration: '120m', trainer: 'Marcus Vance', intensity: 'Extreme', spotsLeft: 1 },
      { id: 'sat-2', className: 'Urban SEAL Endurance Carries', time: '11:00 AM', duration: '90m', trainer: 'Jaxson Reed', intensity: 'Extreme', spotsLeft: 5 },
      { id: 'sat-3', className: 'Weekend Growth Synergy Class', time: '04:00 PM', duration: '60m', trainer: 'Elena Rostova', intensity: 'Medium', spotsLeft: 18 }
    ]
  },
  {
    day: 'Sunday',
    classes: [
      { id: 'sun-1', className: 'Active Recovery, Joint Flossing & Breath', time: '10:00 AM', duration: '60m', trainer: 'Victor Cole', intensity: 'Medium', spotsLeft: 20 },
      { id: 'sun-2', className: 'Barbell Club open stage', time: '12:00 PM', duration: '120m', trainer: 'Till Failure Staff', intensity: 'High', spotsLeft: 25 }
    ]
  }
];

export const FAQS = [
  { question: 'What is the "Till Failure" philosophy?', answer: 'We are not a casual health lounge. Growth occurs at the absolute outer edge of your existing strength threshold. We provide the equipment, coaches, and environment to safely, aggressively push yourself to your actual physical limit: to fail safely, and transcend.' },
  { question: 'Can beginners train at Till Failure?', answer: 'Absolutely. Relentlessness is not defined by how much weight is on the bar, but by your absolute commitment relative to your own capacity. If you enter with a hunger to improve, you belong here.' },
  { question: 'Do you offer a trial pass?', answer: 'We offer single-day aggressive entry passes for $35, which is fully credited towards your setup cost if you sign up for a monthly membership on the same day.' },
  { question: 'What does 24/7 uncompromised ingress mean?', answer: 'Our doors are secured with absolute biometric scans. Once registered, your fingerprint or membership chip unlocks the double heavy steel entryways at any hour of the day or night.' },
];
