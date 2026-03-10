import React from 'react';
import { Plus, Trash2, Upload, Linkedin, Github, Globe } from 'lucide-react';

// Liste des niveaux de langue standardisés
const LANGUAGE_LEVELS = [
    "Notions",
    "A1 - Débutant",
    "A2 - Élémentaire",
    "B1 - Intermédiaire",
    "B2 - Intermédiaire avancé",
    "C1 - Avancé",
    "C2 - Maîtrise",
    "Langue maternelle",
    "Bilingue"
];

const Field = ({ label, value, onChange, placeholder, icon: Icon }) => (
    <div className="mb-3">
        <label className="text-xs font-bold text-gray-500 uppercase mb-1 flex items-center gap-2">
            {Icon && <Icon size={12} />} {label}
        </label>
        <input
            type="text"
            className="w-full p-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            value={value}
            onChange={onChange}
            placeholder={placeholder || "..."}
        />
    </div>
);

// Petit composant pour choisir une couleur
const ColorPicker = ({ label, value, onChange }) => (
    <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-bold">{label}</label>
        <div className="flex items-center gap-2">
            <input
                type="color"
                value={value}
                onChange={onChange}
                className="h-8 w-12 cursor-pointer rounded border border-gray-300 p-0"
            />
            <span className="text-xs text-gray-400 font-mono">{value}</span>
        </div>
    </div>
);

const CVEditor = ({ data, setData }) => {

    const update = (section, key, value) => {
        setData(prev => ({ ...prev, [section]: { ...prev[section], [key]: value } }));
    };

    const updateArray = (section, id, key, value) => {
        setData(prev => ({
            ...prev,
            [section]: prev[section].map(item => item.id === id ? { ...item, [key]: value } : item)
        }));
    };

    const addItem = (section, template) => {
        setData(prev => ({ ...prev, [section]: [...prev[section], { ...template, id: Date.now() }] }));
    };

    const removeItem = (section, id) => {
        setData(prev => ({ ...prev, [section]: prev[section].filter(item => item.id !== id) }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            update('personal', 'photo', imageUrl);
        }
    };

    return (
        <div className="p-6 space-y-8 pb-20">

            {/* --- Design & Couleurs --- */}
            <section>
                <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">🎨 Apparence</h2>
                <div className="grid grid-cols-2 gap-4">
                    <ColorPicker
                        label="Couleur Principale"
                        value={data.theme.color}
                        onChange={(e) => update('theme', 'color', e.target.value)}
                    />
                    <ColorPicker
                        label="Fond Sidebar"
                        value={data.theme.sidebar}
                        onChange={(e) => update('theme', 'sidebar', e.target.value)}
                    />
                    <ColorPicker
                        label="Fond Contenu"
                        value={data.theme.background}
                        onChange={(e) => update('theme', 'background', e.target.value)}
                    />
                </div>
            </section>

            {/* --- Infos Personnelles --- */}
            <section className="space-y-3">
                <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">👤 Profil</h2>

                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden border border-gray-300 flex items-center justify-center">
                        {data.personal.photo ? <img src={data.personal.photo} className="w-full h-full object-cover" /> : <span className="text-xs text-gray-400">Photo</span>}
                    </div>
                    <label className="cursor-pointer bg-blue-50 text-blue-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 flex items-center gap-2">
                        <Upload size={16}/> Changer photo
                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                    </label>
                </div>

                <Field label="Nom Complet" value={data.personal.fullName} onChange={e => update('personal', 'fullName', e.target.value)} />
                <Field label="Titre" value={data.personal.title} onChange={e => update('personal', 'title', e.target.value)} />
                <Field label="Email" value={data.personal.email} onChange={e => update('personal', 'email', e.target.value)} />
                <Field label="Téléphone" value={data.personal.phone} onChange={e => update('personal', 'phone', e.target.value)} />
                <Field label="Adresse" value={data.personal.address} onChange={e => update('personal', 'address', e.target.value)} />

                <div className="pt-2 border-t border-dashed">
                    <Field label="LinkedIn" icon={Linkedin} value={data.personal.linkedin} onChange={e => update('personal', 'linkedin', e.target.value)} />
                    <Field label="GitHub" icon={Github} value={data.personal.github} onChange={e => update('personal', 'github', e.target.value)} />
                    <Field label="Site Web" icon={Globe} value={data.personal.website} onChange={e => update('personal', 'website', e.target.value)} />
                </div>

                <div className="mt-2">
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Résumé</label>
                    <textarea className="w-full p-2 bg-gray-50 border border-gray-200 rounded h-24 text-sm resize-none" value={data.personal.summary} onChange={e => update('personal', 'summary', e.target.value)} />
                </div>
            </section>

            {/* --- Compétences --- */}
            <section>
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h2 className="text-lg font-bold text-gray-800">⚡ Compétences</h2>
                    <button onClick={() => addItem('skills', {name: ''})} className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Plus size={18}/></button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {data.skills.map(skill => (
                        <div key={skill.id} className="flex items-center gap-1 bg-white border px-2 py-1 rounded shadow-sm">
                            <input className="w-24 text-sm outline-none" value={skill.name} onChange={e => updateArray('skills', skill.id, 'name', e.target.value)} placeholder="Compétence..." />
                            <button onClick={() => removeItem('skills', skill.id)} className="text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Langues (NOUVEAU SELECT) --- */}
            <section>
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h2 className="text-lg font-bold text-gray-800">🌍 Langues</h2>
                    <button onClick={() => addItem('languages', {name: '', level: 'B1 - Intermédiaire'})} className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Plus size={18}/></button>
                </div>
                <div className="space-y-2">
                    {data.languages.map(lang => (
                        <div key={lang.id} className="flex items-center gap-2 bg-white p-2 rounded border shadow-sm">
                            <input
                                className="w-1/2 text-sm outline-none font-semibold"
                                value={lang.name}
                                onChange={e => updateArray('languages', lang.id, 'name', e.target.value)}
                                placeholder="Langue"
                            />

                            {/* LE SELECTEUR DE NIVEAU */}
                            <select
                                className="w-1/2 text-xs outline-none bg-gray-50 p-1 rounded border-gray-200 text-gray-600"
                                value={lang.level}
                                onChange={e => updateArray('languages', lang.id, 'level', e.target.value)}
                            >
                                {LANGUAGE_LEVELS.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>

                            <button onClick={() => removeItem('languages', lang.id)} className="text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Expériences --- */}
            <section>
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h2 className="text-lg font-bold text-gray-800">💼 Expériences</h2>
                    <button onClick={() => addItem('experiences', {role: '', company: '', date: '', desc: ''})} className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Plus size={18}/></button>
                </div>
                <div className="space-y-4">
                    {data.experiences.map(exp => (
                        <div key={exp.id} className="p-3 bg-white border rounded shadow-sm relative group">
                            <button onClick={() => removeItem('experiences', exp.id)} className="absolute top-2 right-2 text-gray-300 hover:text-red-500"><Trash2 size={14}/></button>
                            <input className="font-bold w-full text-sm mb-1 outline-none" placeholder="Poste" value={exp.role} onChange={e => updateArray('experiences', exp.id, 'role', e.target.value)} />
                            <input className="text-xs text-gray-500 w-full mb-1 outline-none" placeholder="Entreprise" value={exp.company} onChange={e => updateArray('experiences', exp.id, 'company', e.target.value)} />
                            <textarea className="w-full text-xs text-gray-600 bg-gray-50 p-1 rounded resize-none" placeholder="Description" value={exp.desc} onChange={e => updateArray('experiences', exp.id, 'desc', e.target.value)} />
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Formation --- */}
            <section>
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h2 className="text-lg font-bold text-gray-800">🎓 Formation</h2>
                    <button onClick={() => addItem('education', {school: '', degree: '', date: ''})} className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Plus size={18}/></button>
                </div>
                <div className="space-y-4">
                    {data.education.map(edu => (
                        <div key={edu.id} className="p-3 bg-white border rounded shadow-sm relative group">
                            <button onClick={() => removeItem('education', edu.id)} className="absolute top-2 right-2 text-gray-300 hover:text-red-500"><Trash2 size={14}/></button>
                            <input className="font-bold w-full text-sm mb-1 outline-none" placeholder="Diplôme" value={edu.degree} onChange={e => updateArray('education', edu.id, 'degree', e.target.value)} />
                            <input className="text-xs text-gray-500 w-full outline-none" placeholder="École" value={edu.school} onChange={e => updateArray('education', edu.id, 'school', e.target.value)} />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default CVEditor;