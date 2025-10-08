import React, { useState, useRef, useEffect } from 'react';
import Icon from './Icon';
import { mockNotifications } from '../data/mockData';
import { Notification } from '../types';

interface HeaderProps {
    title: string;
    onMenuClick: () => void;
}

const NotificationItem: React.FC<{ item: Notification }> = ({ item }) => (
    <a href="#" className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg">
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-100 dark:bg-blue-900/40 text-blue-500 dark:text-blue-400">
            <Icon name={item.icon} size={16} />
        </div>
        <div className="flex-1">
            <p className="text-sm text-gray-700 dark:text-gray-200">{item.text}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">{item.time}</p>
        </div>
    </a>
);


const Header: React.FC<HeaderProps> = ({ title, onMenuClick }) => {
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const notificationsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
                setNotificationsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="h-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 sm:px-8 fixed top-0 right-0 left-0 lg:left-64 z-20">
            <div className="flex items-center">
                 <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mr-2"
                    aria-label="Open menu"
                 >
                    <Icon name="Menu" size={24} className="text-gray-600 dark:text-gray-300" />
                </button>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="relative" ref={notificationsRef}>
                    <button 
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
                        onClick={() => setNotificationsOpen(prev => !prev)}
                        aria-label="View notifications"
                        aria-haspopup="true"
                        aria-expanded={notificationsOpen}
                    >
                        <Icon name="Bell" size={20} className="text-gray-600 dark:text-gray-300" />
                        <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
                    </button>
                    {notificationsOpen && (
                        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-2 animate-fade-in-down">
                            <div className="flex justify-between items-center p-2">
                                <h3 className="font-semibold text-gray-900 dark:text-white">Notificações</h3>
                                <button className="text-sm font-medium text-blue-500 hover:underline">Marcar como lidas</button>
                            </div>
                            <div className="max-h-80 overflow-y-auto space-y-1">
                                {mockNotifications.map(item => <NotificationItem key={item.id} item={item} />)}
                            </div>
                             <div className="p-2 text-center border-t border-gray-200 dark:border-gray-700 mt-1">
                                <a href="#" className="text-sm font-semibold text-blue-500 hover:underline">Ver todas</a>
                            </div>
                        </div>
                    )}
                </div>
                 <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Settings">
                    <Icon name="Settings" size={20} className="text-gray-600 dark:text-gray-300" />
                </button>
            </div>
        </header>
    );
}

export default Header;