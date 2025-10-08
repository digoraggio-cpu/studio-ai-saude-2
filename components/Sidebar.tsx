import React from 'react';
import Icon from './Icon';
import { mockUser } from '../data/mockData';
import { Page } from '../App';
import { IconName } from '../types';

interface SidebarProps {
    currentPage: Page;
    navigate: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, navigate }) => {
    const navItems: { name: Page, icon: IconName }[] = [
        { name: 'Visão Geral', icon: 'LayoutDashboard' },
        { name: 'Minha Família', icon: 'Users' },
        { name: 'Agendamentos', icon: 'CalendarDays' },
        { name: 'Resultados', icon: 'FileText' },
        { name: 'Rede', icon: 'Building' },
        { name: 'Marketplace', icon: 'ShoppingCart' },
    ];

    return (
        <aside className="w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col h-screen fixed left-0 top-0 border-r border-gray-200 dark:border-gray-700">
            <div className="h-20 flex items-center px-6 shrink-0">
                 <Icon name="HeartPulse" className="h-8 w-8 text-blue-500" />
                 <h1 className="text-xl font-bold ml-2">Studio AI Saúde</h1>
            </div>
            <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => navigate(item.name)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left ${
                            currentPage === item.name
                                ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300'
                                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                        <Icon name={item.icon} size={20} />
                        <span>{item.name}</span>
                    </button>
                ))}
            </nav>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 shrink-0">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-semibold">
                        {mockUser.name.charAt(0)}
                    </div>
                    <div>
                        <p className="font-semibold text-sm">{mockUser.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{mockUser.email}</p>
                    </div>
                </div>
                <button
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                    <Icon name="LogOut" size={16} />
                    <span>Sair</span>
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;