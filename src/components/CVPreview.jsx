import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const CVPreview = ({ data }) => {
    const { personal, theme, experiences, education, skills, languages } = data;
    const mainColor = theme.color;

    // Note : On applique les couleurs dynamiques ici
    const sidebarStyle = { backgroundColor: theme.sidebar, color: 'white' };
    const contentStyle = { backgroundColor: theme.background };

    return (
        <div className="a4-screen flex print-exact mx-auto shadow-2xl overflow-hidden text-gray-800">

            {/* === COLONNE GAUCHE (SIDEBAR) === */}
            {/* On applique le style dynamique de couleur de fond */}
            <div className="w-[35%] flex flex-col relative print-exact min-h-full" style={sidebarStyle}>

                {/* Élément de design léger */}
                <div className="absolute top-0 w-full h-2 opacity-30 bg-white"></div>

                <div className="p-8 flex flex-col gap-8">

                    {/* PHOTO */}
                    <div className="flex justify-center mt-4">
                        <div className="w-32 h-32 rounded-full border-4 border-white/20 shadow-xl overflow-hidden bg-white/10 flex items-center justify-center">
                            {personal.photo ? (
                                <img src={personal.photo} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-4xl font-bold opacity-50 text-white">{personal.fullName.charAt(0)}</span>
                            )}
                        </div>
                    </div>

                    {/* CONTACT INFO */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4 border-b border-white/20 pb-2">Contact</h3>
                        <div className="flex flex-col gap-3 text-sm font-light opacity-90">
                            {personal.email && <div className="flex items-center gap-3"><Mail size={14}/> <span className="break-all">{personal.email}</span></div>}
                            {personal.phone && <div className="flex items-center gap-3"><Phone size={14}/> <span>{personal.phone}</span></div>}
                            {personal.address && <div className="flex items-center gap-3"><MapPin size={14}/> <span>{personal.address}</span></div>}

                            <div className="mt-2 pt-2 border-t border-white/10 flex flex-col gap-2">
                                {personal.linkedin && <div className="flex items-center gap-3"><Linkedin size={14}/> <span className="text-xs truncate">{personal.linkedin}</span></div>}
                                {personal.github && <div className="flex items-center gap-3"><Github size={14}/> <span className="text-xs truncate">{personal.github}</span></div>}
                                {personal.website && <div className="flex items-center gap-3"><Globe size={14}/> <span className="text-xs truncate">{personal.website}</span></div>}
                            </div>
                        </div>
                    </div>

                    {/* COMPÉTENCES */}
                    {skills.length > 0 && (
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4 border-b border-white/20 pb-2">Compétences</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => (
                                    <span key={skill.id} className="bg-white/10 px-2 py-1 rounded text-xs border border-white/10 shadow-sm">
                                {skill.name}
                            </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* LANGUES */}
                    {languages.length > 0 && (
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4 border-b border-white/20 pb-2">Langues</h3>
                            <div className="flex flex-col gap-2">
                                {languages.map(lang => (
                                    <div key={lang.id} className="flex justify-between items-center text-sm">
                                        <span className="font-medium opacity-90">{lang.name}</span>
                                        <span className="italic text-xs opacity-70 bg-white/10 px-2 py-0.5 rounded">{lang.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* === COLONNE DROITE (CONTENU) === */}
            {/* On applique le style dynamique de couleur de fond */}
            <div className="w-[65%] p-10 flex flex-col" style={contentStyle}>

                {/* HEADER */}
                <header className="mt-6 mb-10">
                    <h1 className="text-4xl font-extrabold uppercase tracking-tight leading-none mb-2 text-gray-900">{personal.fullName}</h1>
                    <h2 className="text-xl font-medium tracking-wide" style={{ color: mainColor }}>{personal.title}</h2>
                </header>

                {/* RESUME */}
                <section className="mb-8">
                    <h3 className="font-bold text-gray-800 uppercase tracking-widest mb-4 flex items-center gap-2 text-sm">
                        <span className="w-6 h-1 rounded" style={{backgroundColor: mainColor}}></span> Profil
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed text-justify">
                        {personal.summary}
                    </p>
                </section>

                {/* EXPÉRIENCES */}
                <section className="mb-8">
                    <h3 className="font-bold text-gray-800 uppercase tracking-widest mb-6 flex items-center gap-2 text-sm">
                        <span className="w-6 h-1 rounded" style={{backgroundColor: mainColor}}></span> Expériences
                    </h3>

                    <div className="flex flex-col gap-6">
                        {experiences.map(exp => (
                            <div key={exp.id} className="relative pl-4 border-l-2 border-gray-200">
                                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full" style={{backgroundColor: mainColor}}></div>

                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-md text-gray-800">{exp.role}</h4>
                                    <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">{exp.date}</span>
                                </div>
                                <div className="text-sm font-semibold mb-2" style={{color: mainColor}}>{exp.company}</div>
                                <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                                    {exp.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FORMATION */}
                <section>
                    <h3 className="font-bold text-gray-800 uppercase tracking-widest mb-6 flex items-center gap-2 text-sm">
                        <span className="w-6 h-1 rounded" style={{backgroundColor: mainColor}}></span> Formation
                    </h3>
                    <div className="flex flex-col gap-4">
                        {education.map(edu => (
                            <div key={edu.id} className="flex justify-between items-start">
                                <div>
                                    <div className="font-bold text-sm text-gray-800">{edu.degree}</div>
                                    <div className="text-xs text-gray-500 italic">{edu.school}</div>
                                </div>
                                <span className="text-xs font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded border border-gray-200">{edu.date}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default CVPreview;