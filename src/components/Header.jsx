import React from 'react';
import { Download, FileText } from 'lucide-react';

const Header = ({ onPrint }) => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm z-20 relative no-print">
            <div className="flex items-center gap-3 text-blue-600">
                <div className="p-2 bg-blue-50 rounded-lg">
                    <FileText size={24} />
                </div>
                <div>
                    <h1 className="font-bold text-lg text-gray-800 leading-tight">CV Generator Pro</h1>
                    <p className="text-xs text-gray-400 font-medium">Mode Édition</p>
                </div>
            </div>

            <button
                onClick={onPrint}
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-slate-200"
            >
                <Download size={18} />
                <span>Télécharger PDF</span>
            </button>
        </header>
    );
};

export default Header;