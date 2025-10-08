import React from 'react';
import Icon from '../components/Icon';
import { mockAppointments } from '../data/mockData';
import { Appointment } from '../types';

const AppointmentCard: React.FC<{ item: Appointment }> = ({ item }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${item.type === 'Telemedicina' ? 'bg-purple-100 dark:bg-purple-900/40' : 'bg-blue-100 dark:bg-blue-900/40'}`}>
            <Icon name={item.type === 'Telemedicina' ? 'Video' : 'Stethoscope'} className={item.type === 'Telemedicina' ? 'text-purple-500 dark:text-purple-400' : 'text-blue-500 dark:text-blue-400'} size={24} />
        </div>
        <div className="flex-1">
            <p className="font-bold text-gray-900 dark:text-white">{item.doctor}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.specialty}</p>
        </div>
        <div className="text-right">
             <p className="font-semibold text-gray-700 dark:text-gray-300">{item.date}</p>
             <p className="text-sm text-gray-500 dark:text-gray-400">{item.time}</p>
        </div>
    </div>
);

const Calendar: React.FC = () => {
    // This is a static representation of a calendar for UI purposes.
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const dates = Array.from({ length: 31 }, (_, i) => i + 1);
    const today = new Date().getDate();

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <button aria-label="Previous month"><Icon name="ChevronLeft" /></button>
                <h3 className="font-bold text-lg">Julho 2024</h3>
                <button aria-label="Next month"><Icon name="ChevronRight" /></button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {days.map(day => <div key={day} className="font-medium text-gray-500 dark:text-gray-400">{day}</div>)}
                {/* Dummy empty divs for alignment */}
                <div /><div /><div /><div />
                {dates.map(date => (
                    <div key={date} className={`p-2 rounded-full cursor-pointer ${date === today ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'} ${date === 25 ? 'font-bold ring-2 ring-blue-400' : ''}`}>
                        {date}
                    </div>
                ))}
            </div>
        </div>
    );
}

const AppointmentsPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Próximas Consultas</h2>
                <button className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    <Icon name="Plus" size={18} />
                    <span>Agendar Consulta</span>
                </button>
            </div>
            <div className="space-y-4">
                {mockAppointments.map(item => <AppointmentCard key={item.id} item={item} />)}
            </div>
        </div>
        <div className="lg:col-span-1">
            <Calendar />
        </div>
    </div>
  );
};

export default AppointmentsPage;
