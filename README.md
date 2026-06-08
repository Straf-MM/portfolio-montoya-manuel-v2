# Portfolio BTS SIO - Manuel Montoya

Portfolio professionnel complet pour un étudiant en **BTS SIO - Option SISR** (Services Informatiques aux Organisations).

## 📋 Vue d'ensemble

Ce portfolio présente :

- **Accueil** : Présentation générale et compétences principales
- **BTS SIO** : Informations détaillées sur la formation et ses options
- **Stages** : Expériences professionnelles chez Liebherr Mining (menus déroulants)
- **Veille Technologique** : Étude approfondie sur les Backdoors informatiques
- **Compétences E4** : Tableau synthétique des compétences acquises
- **Contact** : Formulaire de contact et téléchargement de documents

## 🛠️ Stack Technologique

- **React 19** : Framework frontend
- **Vite 6** : Bundler et dev server
- **Tailwind CSS 4** : Styling et design system
- **React Router** (Wouter) : Navigation côté client
- **Lucide React** : Icônes
- **Radix UI** : Composants d'interface
- **Framer Motion** : Animations (optionnel)

## 🎨 Design

- **Style** : Minimaliste et sobre
- **Palette** : Blanc, gris, noir avec accents subtils
- **Mode** : Clair/Sombre avec persistance (localStorage)
- **Responsive** : Mobile, tablette, desktop
- **Navigation** : Menu déroulant sur mobile, navigation horizontale sur desktop

## 📦 Installation

### Prérequis

- **Node.js** 18+ et **npm** 9+
- ou **pnpm** 10+

### Étapes

1. **Cloner ou télécharger le projet**

```bash
cd portfolio-manuel-montoya
```

2. **Installer les dépendances**

```bash
npm install --legacy-peer-deps
# ou
pnpm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
# ou
pnpm dev
```

Le serveur démarre sur `http://localhost:3000/`

## 🚀 Commandes Utiles

```bash
# Développement local
npm run dev

# Build pour production
npm run build

# Prévisualiser la build
npm run preview

# Vérifier les types TypeScript
npm run check

# Formater le code
npm run format
```

## 📂 Structure du Projet

```
portfolio-manuel-montoya/
├── client/
│   ├── public/              # Fichiers statiques (favicon, etc.)
│   ├── src/
│   │   ├── pages/           # Pages du portfolio
│   │   │   ├── Home.tsx
│   │   │   ├── BtsSio.tsx
│   │   │   ├── Stages.tsx
│   │   │   ├── TechWatch.tsx
│   │   │   ├── Competences.tsx
│   │   │   └── Contact.tsx
│   │   ├── components/      # Composants réutilisables
│   │   │   ├── Navigation.tsx
│   │   │   └── ui/          # Composants Radix UI
│   │   ├── data/
│   │   │   └── manuel-data.ts  # Données du portfolio
│   │   ├── App.tsx          # Composant racine
│   │   ├── main.tsx         # Point d'entrée
│   │   └── index.css        # Styles globaux
│   └── index.html           # HTML principal
├── dist/                    # Build production
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## 🎯 Déploiement

### Option 1 : GitHub Pages (Recommandé - Gratuit)

1. **Créer un repository GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Straf-MM/portfolio-bts-sio.git
git branch -M main
git push -u origin main
```

2. **Configurer GitHub Pages**

- Aller dans **Settings > Pages**
- Source : **Deploy from a branch**
- Branch : **main**, dossier : **/dist**
- Sauvegarder

3. **Accéder au site**

```
https://Straf-MM.github.io/portfolio-bts-sio/
```

### Option 2 : Vercel (Gratuit)

```bash
npm i -g vercel
vercel
```

### Option 3 : Netlify (Gratuit)

1. Aller sur [netlify.com](https://netlify.com)
2. Connecter votre repository GitHub
3. Déploiement automatique à chaque push

## 📝 Personnalisation

### Modifier les données

Toutes les données du portfolio sont centralisées dans `/client/src/data/manuel-data.ts`. Vous pouvez facilement modifier :

- Informations personnelles
- Contenu des pages
- Projets et stages
- Compétences

### Modifier les couleurs

Les couleurs sont définies dans `/client/src/index.css` via des variables CSS. Vous pouvez personnaliser :

- Thème clair (`:root`)
- Thème sombre (`.dark`)

### Ajouter des pages

1. Créer un fichier dans `/client/src/pages/`
2. Importer la page dans `/client/src/App.tsx`
3. Ajouter la route correspondante

## 🔧 Dépannage

### Erreur de build Tailwind CSS

Si vous rencontrez une erreur de build Tailwind, assurez-vous que :

- `@tailwindcss/vite` est installé
- `tailwind.config.ts` existe et est correctement configuré
- Exécutez `npm install --legacy-peer-deps`

### Le serveur ne démarre pas

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules pnpm-lock.yaml
npm install --legacy-peer-deps
npm run dev
```

### Problèmes de mode sombre

Le mode sombre est géré via localStorage. Vérifiez que :

- Le bouton de thème fonctionne dans la navigation
- Les variables CSS sont correctement appliquées
- Votre navigateur accepte localStorage

## 📄 Documents

Les documents suivants peuvent être téléchargés depuis la page Contact :

- **CV** : Curriculum vitae détaillé
- **Lettre de Motivation** : Lettre de candidature
- **Rapport de Stage** : Rapport du 2ème stage chez Liebherr Mining

## 🔐 Points Importants

✅ **Pas de dépendances externes** : Le code est indépendant et n'utilise pas Manus  
✅ **Responsive** : Fonctionne sur tous les appareils  
✅ **Mode sombre/clair** : Implémenté et fonctionnel  
✅ **Animations fluides** : Transitions entre pages  
✅ **Minimaliste** : Design épuré et professionnel  

## 📞 Contact

- **Email** : pro.manuel.montoya@gmail.com
- **Téléphone** : 07 71 01 03 87
- **GitHub** : https://github.com/Straf-MM
- **Localisation** : Horbourg-Wihr 68180

## 📅 Dates Importantes

- **Formation** : 2023-2025 (BTS SIO Option SISR)
- **Stage 1** : 13 mai - 21 juin 2024
- **Stage 2** : 02 mars - 10 avril 2026

## 📚 Ressources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Radix UI Documentation](https://www.radix-ui.com)

## 📝 Licence

Ce projet est personnel et à usage privé.

---

**Créé le** : 7 juin 2026  
**Statut** : Complet et prêt pour le déploiement  
**Version** : 1.0.0
