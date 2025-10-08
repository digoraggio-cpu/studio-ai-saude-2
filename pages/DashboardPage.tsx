import React from 'react';
import Icon from '../components/Icon';
import { mockUser, quickAccessItems, aiRecommendations, activityLogs, mockVitalSigns, dailySummary, weeklyProgress } from '../data/mockData';
import { QuickAccessItem, Recommendation, ActivityLog, VitalSign, DailySummaryItem } from '../types';

const HealthScoreCircularProgress: React.FC<{ score: number, steps: number }> = ({ score, steps }) => {
    const radius = 56;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
        <div className="relative w-36 h-36">
            <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle
                    className="text-gray-200 dark:text-gray-700"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="60"
                    cy="60"
                />
                <circle
                    className="text-blue-500"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="60"
                    cy="60"
                    transform="rotate(-90 60 60)"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{steps.toLocaleString('pt-BR')}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">passos</span>
            </div>
        </div>
    );
};

const WelcomeBanner: React.FC = () => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Bom dia, {mockUser.name}! 👋</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-2">Sua pontuação de saúde é <span className="font-bold text-blue-500">{mockUser.healthScore}/100</span> - Você está ótimo hoje!</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">{mockUser.plan}</p>
            </div>
            <div className="flex items-center gap-6 w-full md:w-auto overflow-x-auto">
                <HealthScoreCircularProgress score={mockUser.healthScore} steps={7842} />
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {mockVitalSigns.map(sign => (
                        <div key={sign.label}>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{sign.label}</p>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">
                                {sign.value} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{sign.unit}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const QuickAccessCard: React.FC<{ item: QuickAccessItem }> = ({ item }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bgColor}`}>
                {/* Fix: Removed 'as any' cast as 'item.icon' is now correctly typed. */}
                <Icon name={item.icon} className={item.iconColor} size={20} />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mt-4">{item.title}</h3>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Último uso: {item.lastUsed}</p>
    </div>
);

const ProgressBar: React.FC<{ label: string, percentage: number, text?: string }> = ({ label, percentage, text }) => (
    <div>
        <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{label}</span>
            {text && <span className="text-sm text-gray-500 dark:text-gray-400">{text}</span>}
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
);

const AiRecommendationItem: React.FC<{ item: Recommendation }> = ({ item }) => {
    const colorClasses = {
        green: 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400',
        blue: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
        purple: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
    };
    return (
        <div className={`p-3 rounded-lg flex items-center gap-3 ${colorClasses[item.color]}`}>
            {/* Fix: Removed 'as any' cast as 'item.icon' is now correctly typed. */}
            <Icon name={item.icon} size={20} />
            <p className="text-sm font-medium flex-1">{item.text}</p>
        </div>
    )
};

const StatusBadge: React.FC<{ status: ActivityLog['status'] }> = ({ status }) => {
    const statusClasses = {
        'Concluído': 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
        'Registrado': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
        'Agendado': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300',
    };
    return <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusClasses[status]}`}>{status}</span>
};

const ActivityItem: React.FC<{ item: ActivityLog }> = ({ item }) => (
    <div className="flex items-center gap-4 p-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.iconBgColor}`}>
            {/* Fix: Removed 'as any' cast as 'item.icon' is now correctly typed. */}
            <Icon name={item.icon} className={item.iconColor} size={20} />
        </div>
        <div className="flex-1">
            <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.timestamp}</p>
        </div>
        <StatusBadge status={item.status} />
    </div>
);

const DashboardPage: React.FC = () => {
    return (
        <div className="space-y-6">
            <WelcomeBanner />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                {quickAccessItems.map(item => <QuickAccessCard key={item.title} item={item} />)}
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                 <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Insights de Saúde IA</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Resumo do Dia */}
                    <div>
                        <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Resumo do Dia</h3>
                        <div className="space-y-4">
                            {dailySummary.map(item => (
                                <ProgressBar 
                                    key={item.label}
                                    label={item.label}
                                    percentage={(item.current / item.goal) * 100}
                                    text={`${item.current.toLocaleString('pt-BR')} ${item.unit}`}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Recomendações IA */}
                     <div>
                        <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Recomendações IA</h3>
                        <div className="space-y-2">
                           {aiRecommendations.map(item => <AiRecommendationItem key={item.id} item={item} />)}
                        </div>
                    </div>
                    {/* Progresso Semanal */}
                     <div>
                        <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Progresso Semanal</h3>
                        <div className="space-y-4">
                             {weeklyProgress.map(item => (
                                <ProgressBar 
                                    key={item.label}
                                    label={item.label}
                                    percentage={item.percentage}
                                />
                            ))}
                        </div>
                    </div>
                 </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white p-6 border-b border-gray-200 dark:border-gray-700">Atividade Recente</h2>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {activityLogs.map(item => <ActivityItem key={item.id} item={item} />)}
                </div>
                 <div className="p-4 text-center">
                    <button className="text-sm font-semibold text-blue-500 hover:text-blue-600">Ver tudo</button>
                </div>
            </div>

        </div>
    );
};

export default DashboardPage;