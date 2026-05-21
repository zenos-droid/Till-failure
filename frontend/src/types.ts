export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: 'Bodybuilding' | 'Powerlifting' | 'HIIT / Conditioning' | 'Athletic Performance' | 'Calisthenics';
  certifications: string[];
  experience: string;
  image: string;
  bio: string;
  socials: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

export interface ClassSchedule {
  id: string;
  className: string;
  time: string;
  duration: string;
  trainer: string;
  intensity: 'Medium' | 'High' | 'Extreme';
  spotsLeft: number;
}

export interface DaySchedule {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  classes: ClassSchedule[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnualMonthly: number;
  description: string;
  features: { name: string; included: boolean }[];
  tag: string;
  isPopular?: boolean;
}

export interface Transformation {
  id: string;
  clientName: string;
  age: number;
  duration: string;
  weightLoss?: string;
  muscleGained?: string;
  achievement: string;
  beforeImg: string;
  afterImg: string;
  quote: string;
}

export interface Program {
  id: string;
  title: string;
  duration: string;
  difficulty: 'Intermediate' | 'Advanced' | 'Elite Only';
  description: string;
  iconName: string; // Lucide icon identifier
  bullets: string[];
}
