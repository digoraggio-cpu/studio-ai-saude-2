import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Page } from '../App';

interface MainLayoutProps {
    children: React.ReactNode;
    currentPage: Page;
    navigate: (page: Page) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, currentPage, navigate }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Mobile sidebar overlay */}
            <div 
                className={`fixed inset-0 z-30 bg-black/50 transition-opacity lg:hidden ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setSidebarOpen(false)}
                aria-hidden="true"
            ></div>

            {/* Mobile sidebar */}
            <div className={`fixed top-0 left-0 h-full z-40 transition-transform duration-300 ease-in-out lg:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <Sidebar 
                    currentPage={currentPage}
                    navigate={(page) => {
                        navigate(page);
                        setSidebarOpen(false);
                    }}
                />
            </div>
            
            {/* Desktop sidebar */}
            <div className="hidden lg:block">
                 <Sidebar currentPage={currentPage} navigate={navigate} />
            </div>

            <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
                <Header
                    title={currentPage}
                    onMenuClick={() => setSidebarOpen(true)}
                />
                <main className="flex-1 relative overflow-y-auto focus:outline-none pt-20">
                    <div className="py-6 px-4 sm:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;