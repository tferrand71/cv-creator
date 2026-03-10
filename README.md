# 📄 CV Creator

**CV Generator Pro** est une application web moderne et intuitive conçue pour simplifier la création de CV professionnels. Grâce à une interface interactive divisée en deux colonnes, vous pouvez remplir vos informations et personnaliser l'apparence de votre document tout en visualisant le rendu final en temps réel.

🚀 **Accéder à l'application :** [tobias-ferrand.ovh/cv-creator/index.html](https://tobias-ferrand.ovh/cv-creator/index.html)

---

## ✨ Fonctionnalités

- 🎨 **Édition en temps réel** : Visualisation instantanée de chaque modification apportée aux champs.
- 🖼️ **Gestion de photo** : Téléchargement et intégration fluide de votre photo de profil.
- 🌈 **Personnalisation avancée** : 
    - Sélecteur de couleur d'accentuation pour les titres et éléments visuels.
    - Personnalisation complète des couleurs de fond (Barre latérale et zone principale).
- 🌍 **Sections Complètes** : 
    - Informations de contact et liens vers les réseaux sociaux.
    - Résumé professionnel / Profil.
    - Expériences professionnelles avec gestion de listes.
    - Formations et diplômes.
    - Compétences techniques et maîtrise des langues.
- 📥 **Export PDF optimisé** : Bouton d'impression dédié utilisant un moteur de rendu adapté au format A4.
- 📱 **Interface Responsive** : Conception ergonomique permettant une édition fluide sur ordinateur et une consultation sur mobile.

---

## 🛠️ Stack Technique

L'application utilise les technologies web les plus récentes pour garantir performance et maintenabilité :

- **Framework :** [React 19](https://react.dev/)
- **Outil de build :** [Vite](https://vitejs.dev/)
- **Design & Styles :** [Tailwind CSS](https://tailwindcss.com/)
- **Icônes :** [Lucide React](https://lucide.dev/)
- **Moteur d'impression :** [react-to-print](https://github.com/gregnb/react-to-print)

---

## 📁 Structure du Projet

- **`src/components/CVEditor.jsx`** : Le panneau de contrôle regroupant tous les formulaires d'édition.
- **`src/components/CVPreview.jsx`** : Le moteur de rendu dynamique qui génère l'aperçu du CV.
- **`src/App.jsx`** : Composant racine gérant l'état global des données utilisateur.
- **`src/index.css`** : Configuration Tailwind et styles CSS spécifiques pour les médias d'impression (PDF).

---

## 📝 Licence et Droits d'auteur

Copyright © 2026 **Tobias Ferrand**. Tous droits réservés.

Le code source de ce projet est mis à disposition pour consultation uniquement. **Toute modification, redistribution ou utilisation commerciale sans autorisation préalable est strictement interdite.**

---

*Note : L'utilisation de l'interface de création de CV sur le site web est libre, mais ne permet pas de modifier le code source original de l'application.*

---
*Optimisez votre carrière avec un CV élégant en quelques clics.*
