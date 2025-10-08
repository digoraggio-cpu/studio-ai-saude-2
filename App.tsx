import React, { useState, useCallback } from 'react';
import MainLayout from './components/MainLayout';
import DashboardPage from './pages/DashboardPage';
import FamilyPage from './pages/FamilyPage';
import AppointmentsPage from './pages/AppointmentsPage';
import ResultsPage from './pages/ResultsPage';

const pages = {
  'Visão Geral': <DashboardPage />,
  'Minha Família': <FamilyPage />,
  'Agendamentos': <AppointmentsPage />,
  'Resultados': <ResultsPage />,
  'Rede': <div className="text-center p-8 text-gray-500 dark:text-gray-400">Página de Rede Credenciada em construção.</div>,
  'Marketplace': <div className="text-center p-8 text-gray-500 dark:text-gray-400">Página de Marketplace em construção.</div>,
};

export type Page = keyof typeof pages;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Visão Geral');

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  return (
    <MainLayout
      currentPage={currentPage}
      navigate={navigate}
    >
      {pages[currentPage]}
    </MainLayout>
  );
};

export default App;