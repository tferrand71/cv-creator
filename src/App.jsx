import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Header from './components/Header';
import CVEditor from './components/CVEditor';
import CVPreview from './components/CVPreview';

function App() {
    const [cvData, setCvData] = useState({
        personal: {
            photo: null,
            fullName: 'Thomas Anderson',
            title: 'Architecte Logiciel',
            email: 'neo@matrix.com',
            phone: '06 12 34 56 78',
            address: 'Paris, France',
            summary: 'Passionné par le développement web, je conçois des applications robustes et scalables. Expert en React et Node.js.',
            website: 'www.monportfolio.com',
            linkedin: 'linkedin.com/in/neo',
            github: 'github.com/neo'
        },
        theme: {
            color: '#2563eb',      // Couleur d'accent (Titres, puces...)
            sidebar: '#1e293b',    // NOUVEAU : Couleur de fond Sidebar (Gris foncé par défaut)
            background: '#ffffff', // NOUVEAU : Couleur de fond du contenu (Blanc par défaut)
        },
        skills: [
            { id: 1, name: 'React.js / Redux' },
            { id: 2, name: 'Node.js / Express' },
        ],
        languages: [
            { id: 1, name: 'Français', level: 'Langue maternelle' },
            { id: 2, name: 'Anglais', level: 'C1 - Avancé' }
        ],
        experiences: [
            { id: 1, role: 'Lead Developer', company: 'Tech Corp', date: '2021 - Présent', desc: 'Gestion d\'équipe de 5 devs.' },
        ],
        education: [
            { id: 1, school: 'MIT', degree: 'Master Computer Science', date: '2019' }
        ]
    });

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: `CV - ${cvData.personal.fullName}`,
    });

    return (
        <div className="flex flex-col h-screen bg-gray-100 font-sans text-gray-900">
            <Header onPrint={handlePrint} />
            <div className="flex flex-1 overflow-hidden">
                <aside className="w-[400px] bg-white border-r border-gray-200 overflow-y-auto z-10 no-print scrollbar-thin">
                    <CVEditor data={cvData} setData={setCvData} />
                </aside>
                <main className="flex-1 bg-gray-100 overflow-y-auto p-8 flex justify-center items-start">
                    <div ref={componentRef} className="transform scale-[0.8] origin-top lg:scale-90 xl:scale-100 transition-transform shadow-2xl">
                        <CVPreview data={cvData} />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;