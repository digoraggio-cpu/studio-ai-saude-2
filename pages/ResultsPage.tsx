import React from 'react';
import Icon from '../components/Icon';
import { mockExamResults } from '../data/mockData';
import { ExamResult } from '../types';

const ExamResultItem: React.FC<{ item: ExamResult }> = ({ item }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-100 dark:bg-green-900/40">
            <Icon name="FileText" className="text-green-500 dark:text-green-400" size={24} />
        </div>
        <div className="flex-1">
            <p className="font-bold text-gray-900 dark:text-white">{item.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Data: {item.date}</p>
        </div>
        <div>
            {item.status === 'Disponível' ? (
                 <button className="flex items-center gap-2 text-sm bg-blue-500 text-white font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors">
                    <Icon name="Download" size={16} />
                    <span>Ver Resultado</span>
                </button>
            ) : (
                <span className="text-xs font-semibold px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 rounded-full">Processando</span>
            )}
        </div>
    </div>
);

const ResultsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Meus Resultados de Exames</h2>
        <button className="flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <Icon name="Upload" size={18} />
            <span>Enviar Exame</span>
        </button>
      </div>
      <div className="space-y-4">
        {mockExamResults.map(item => <ExamResultItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default ResultsPage;
