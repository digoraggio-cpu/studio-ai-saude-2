// Fix: Import 'icons' object to create a strict type for icon names.
import { LucideIcon, icons } from 'lucide-react';

// Fix: Add a specific type for icon names based on the keys of the lucide-react icons object.
export type IconName = keyof typeof icons;

export interface User {
  name: string;
  email: string;
  healthScore: number;
  plan: string;
}

export interface VitalSign {
    label: string;
    value: string;
    unit: string;
}

export interface QuickAccessItem {
  // Fix: Use the strict IconName type for better type safety instead of a generic string.
  icon: IconName;
  title: string;
  lastUsed: string;
  bgColor: string;
  iconColor: string;
}

export interface Recommendation {
  id: number;
  text: string;
  // Fix: Use the strict IconName type for better type safety instead of a generic string.
  icon: IconName;
  color: 'green' | 'blue' | 'purple';
}

export interface ActivityLog {
  id: number;
  // Fix: Use the strict IconName type for better type safety instead of a generic string.
  icon: IconName;
  title: string;
  timestamp: string;
  description: string;
  status: 'Concluído' | 'Registrado' | 'Agendado';
  iconBgColor: string;
  iconColor: string;
}

export interface DailySummaryItem {
    label: string;
    current: number;
    goal: number;
    unit: string;
}

export interface Notification {
    id: number;
    icon: IconName;
    text: string;
    time: string;
}

export interface Appointment {
    id: number;
    doctor: string;
    specialty: string;
    date: string;
    time: string;
    type: 'Telemedicina' | 'Presencial';
    status: 'Confirmado' | 'Pendente';
}

export interface FamilyMember {
    id: number;
    name: string;
    relationship: string;
    healthScore: number;
    avatar: string;
}

export interface ExamResult {
    id: number;
    name: string;
    date: string;
    status: 'Disponível' | 'Processando';
}