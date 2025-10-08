import { User, QuickAccessItem, Recommendation, ActivityLog, VitalSign, DailySummaryItem, Notification, Appointment, FamilyMember, ExamResult } from '../types';

export const mockUser: User = {
  name: 'Antonio',
  email: 'antonio@email.com',
  healthScore: 85,
  plan: 'SulAmérica - Plano Premium Plus',
};

export const mockVitalSigns: VitalSign[] = [
    { label: 'Frequência Cardíaca', value: '72', unit: 'bpm' },
    { label: 'Glicose', value: '98', unit: 'mg/dL' },
    { label: 'Pressão Arterial', value: '130/85', unit: 'mmHg' },
    { label: 'Condições', value: '2', unit: 'ativas' },
];

export const quickAccessItems: QuickAccessItem[] = [
  { icon: 'Stethoscope', title: 'Triagem IA', lastUsed: 'Hoje', bgColor: 'bg-blue-100 dark:bg-blue-900/40', iconColor: 'text-blue-500 dark:text-blue-400' },
  { icon: 'BrainCircuit', title: 'Saúde Mental', lastUsed: 'Novo', bgColor: 'bg-purple-100 dark:bg-purple-900/40', iconColor: 'text-purple-500 dark:text-purple-400' },
  { icon: 'Users', title: 'Minha Família', lastUsed: '2 dias', bgColor: 'bg-green-100 dark:bg-green-900/40', iconColor: 'text-green-500 dark:text-green-400' },
  { icon: 'Building', title: 'Rede Credenciada', lastUsed: '1 semana', bgColor: 'bg-yellow-100 dark:bg-yellow-900/40', iconColor: 'text-yellow-500 dark:text-yellow-400' },
  { icon: 'ShoppingCart', title: 'Marketplace', lastUsed: 'Ontem', bgColor: 'bg-pink-100 dark:bg-pink-900/40', iconColor: 'text-pink-500 dark:text-pink-400' },
  { icon: 'CalendarDays', title: 'Agendamentos', lastUsed: 'Hoje', bgColor: 'bg-indigo-100 dark:bg-indigo-900/40', iconColor: 'text-indigo-500 dark:text-indigo-400' },
  { icon: 'Video', title: 'Telemedicina', lastUsed: '5 dias', bgColor: 'bg-red-100 dark:bg-red-900/40', iconColor: 'text-red-500 dark:text-red-400' },
  { icon: 'TrendingUp', title: 'Acompanhamento', lastUsed: 'Hoje', bgColor: 'bg-cyan-100 dark:bg-cyan-900/40', iconColor: 'text-cyan-500 dark:text-cyan-400' },
];

export const dailySummary: DailySummaryItem[] = [
    { label: 'Passos', current: 7842, goal: 10000, unit: '' },
    { label: 'Hidratação', current: 6, goal: 8, unit: 'copos' },
    { label: 'Exercícios', current: 45, goal: 60, unit: 'min' },
]

export const weeklyProgress = [
    { label: 'Meta de Passos', percentage: 80 },
    { label: 'Exercícios', percentage: 60 },
    { label: 'Sono', percentage: 90 },
]

export const aiRecommendations: Recommendation[] = [
  { id: 1, text: 'Excelente controle da pressão arterial hoje', icon: 'CheckCircle2', color: 'green' },
  { id: 2, text: 'Beba mais 2 copos de água para atingir a meta', icon: 'GlassWater', color: 'blue' },
  { id: 3, text: 'Lembrete: Tomar Losartana às 20h', icon: 'Clock', color: 'blue' },
  { id: 4, text: 'Considere 10min de meditação antes de dormir', icon: 'Wind', color: 'purple' },
];

export const activityLogs: ActivityLog[] = [
  { id: 1, icon: 'Stethoscope', title: 'Consulta de Triagem IA realizada', timestamp: '14:30 - Hoje', description: '', status: 'Concluído', iconBgColor: 'bg-blue-100 dark:bg-blue-900/40', iconColor: 'text-blue-500 dark:text-blue-400' },
  { id: 2, icon: 'Pill', title: 'Medicamento registrado - Losartana 50mg', timestamp: '13:45 - Hoje', description: '', status: 'Registrado', iconBgColor: 'bg-purple-100 dark:bg-purple-900/40', iconColor: 'text-purple-500 dark:text-purple-400' },
  { id: 4, icon: 'Calendar', title: 'Consulta com Dr. Ricardo (Cardio)', timestamp: '10:00 - Amanhã', description: '', status: 'Agendado', iconBgColor: 'bg-indigo-100 dark:bg-indigo-900/40', iconColor: 'text-indigo-500 dark:text-indigo-400' },
  { id: 3, icon: 'Footprints', title: 'Exercício registrado - Caminhada 30min', timestamp: '12:20 - Hoje', description: '', status: 'Concluído', iconBgColor: 'bg-green-100 dark:bg-green-900/40', iconColor: 'text-green-500 dark:text-green-400' },
];

export const mockNotifications: Notification[] = [
    { id: 1, icon: 'Clock', text: 'Lembrete: Tomar Losartana às 20h.', time: '5 min atrás' },
    { id: 2, icon: 'CalendarCheck', text: 'Sua consulta com Dr. Ricardo foi confirmada.', time: '1 hora atrás' },
    { id: 3, icon: 'FileText', text: 'Seu resultado de exame de sangue está disponível.', time: '3 horas atrás' },
    { id: 4, icon: 'Gift', text: 'Você ganhou um novo benefício no Marketplace!', time: '1 dia atrás' },
];

export const mockAppointments: Appointment[] = [
    { id: 1, doctor: 'Dr. Ricardo Gomes', specialty: 'Cardiologista', date: '25 de Julho, 2024', time: '10:00', type: 'Presencial', status: 'Confirmado' },
    { id: 2, doctor: 'Dra. Ana Costa', specialty: 'Psicóloga', date: '28 de Julho, 2024', time: '15:30', type: 'Telemedicina', status: 'Confirmado' },
    { id: 3, doctor: 'Dr. Lucas Martins', specialty: 'Clínico Geral', date: '05 de Agosto, 2024', time: '11:00', type: 'Telemedicina', status: 'Confirmado' },
];

export const mockFamilyMembers: FamilyMember[] = [
    { id: 1, name: 'Beatriz', relationship: 'Esposa', healthScore: 92, avatar: 'B' },
    { id: 2, name: 'Carlos', relationship: 'Filho', healthScore: 88, avatar: 'C' },
    { id: 3, name: 'Maria', relationship: 'Mãe', healthScore: 78, avatar: 'M' },
];

export const mockExamResults: ExamResult[] = [
    { id: 1, name: 'Hemograma Completo', date: '20 de Julho, 2024', status: 'Disponível' },
    { id: 2, name: 'Perfil Lipídico', date: '20 de Julho, 2024', status: 'Disponível' },
    { id: 3, name: 'Raio-X do Tórax', date: '15 de Junho, 2024', status: 'Disponível' },
    { id: 4, name: 'Eletrocardiograma', date: '22 de Julho, 2024', status: 'Processando' },
];