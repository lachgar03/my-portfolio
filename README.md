# Portfolio de Mohamed Lachgar

Portfolio moderne et responsive développé avec React, Vite et TailwindCSS.

## 🚀 Fonctionnalités

- ✨ Design moderne et épuré
- 🌓 Mode sombre/clair
- 🌍 Support multilingue (Français/Anglais)
- 📱 Entièrement responsive
- ⚡ Performance optimisée avec Vite
- 🎨 Animations fluides avec Framer Motion

## 📋 Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## 🛠️ Installation

1. Clonez ce dépôt ou naviguez vers le dossier du projet
2. Installez les dépendances :

```bash
npm install
```

## 🚀 Démarrage en développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse : `http://localhost:5173`

## 📦 Build pour la production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

Pour prévisualiser la version de production :

```bash
npm run preview
```

## 🌐 Déploiement

### Netlify

1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Connectez votre dépôt GitHub
3. Configurez les paramètres de build :
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Déployez !

### Vercel

1. Créez un compte sur [Vercel](https://vercel.com/)
2. Importez votre projet depuis GitHub
3. Vercel détectera automatiquement Vite
4. Déployez !

### GitHub Pages

1. Installez le package gh-pages :

```bash
npm install --save-dev gh-pages
```

2. Ajoutez ces scripts dans `package.json` :

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Ajoutez la propriété `base` dans `vite.config.js` :

```javascript
export default defineConfig({
  base: "/nom-du-repo/",
  plugins: [react()],
});
```

4. Déployez :

```bash
npm run deploy
```

## 📝 Configuration du formulaire de contact

Le formulaire de contact utilise Formspree. Pour l'activer :

1. Créez un compte gratuit sur [Formspree](https://formspree.io/)
2. Créez un nouveau formulaire
3. Copiez votre ID de formulaire
4. Remplacez `YOUR_FORMSPREE_ID` dans `src/components/Contact.jsx` par votre ID

## 📄 Ajout de votre CV

Placez votre CV (format PDF) dans le dossier `public/` , ou modifiez le lien dans `src/components/Hero.jsx`.

## 🎨 Personnalisation

### Couleurs

Modifiez les couleurs dans `tailwind.config.js` :

```javascript
colors: {
  'primary': {
    light: '#007BFF',
    dark: '#3498DB',
  },
  // ... autres couleurs
}
```

### Contenu

Tout le contenu est centralisé dans `src/data/translations.js`. Modifiez ce fichier pour mettre à jour vos informations.

## 🛠️ Technologies utilisées

- **React** - Bibliothèque UI
- **Vite** - Build tool
- **TailwindCSS** - Framework CSS
- **Framer Motion** - Animations
- **Lucide React** - Icônes

## 📧 Contact

Mohamed Lachgar - mohammedlachgar06@gmail.com

LinkedIn : [lachgar-mohamed-8ab492310](https://www.linkedin.com/in/lachgar-mohamed-8ab492310)

GitHub : [lachgar03](https://github.com/lachgar03)

## 📝 Licence

Ce projet est sous licence MIT.

