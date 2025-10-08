import React from 'react';
import Icon from '../components/Icon';
import { mockFamilyMembers } from '../data/mockData';
import { FamilyMember } from '../types';

const FamilyMemberCard: React.FC<{ member: FamilyMember }> = ({ member }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm text-center">
        <div className="w-20 h-20 rounded-full mx-auto bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-gray-500 dark:text-gray-300">{member.avatar}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{member.relationship}</p>
        <div className="bg-blue-50 dark:bg-blue-900/40 rounded-lg p-2 inline-flex items-center gap-2">
            <Icon name="HeartPulse" className="text-blue-500 dark:text-blue-400" size={16} />
            <span className="text-sm font-bold text-blue-600 dark:text-blue-300">{member.healthScore} / 100</span>
        </div>
    </div>
);

const FamilyPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Gerencie sua Família</h2>
        <button className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <Icon name="Plus" size={18} />
            <span>Adicionar Membro</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockFamilyMembers.map(member => (
          <FamilyMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default FamilyPage;
