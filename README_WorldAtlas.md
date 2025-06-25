
# 🌍 WorldAtlas

Explore the world, one country at a time.  
WorldAtlas is a beautifully designed React-based web app that allows users to browse countries, view flags, filter by region, search by name, and explore detailed info.

![Screenshot](./public/WorldAtlas.png)

## 🚀 Features

- 🌐 Browse 250+ countries (fetched from [REST Countries API](https://restcountries.com))
- 🔍 Search by country name
- ⬆️⬇️ Sort countries alphabetically
- 🌎 Filter by continent (Africa, Asia, Europe, etc.)
- 🏳️ View flags and key country info
- 📄 Detailed country page with currency, area, borders, and more
- 💅 Animated modern glassmorphism UI

## 🔧 Tech Stack

- ⚛️ React + Vite
- 📦 CSS Modules
- 🌍 React Router
- 🗃️ REST Countries API
- 🎨 Custom glass UI + gradient effects
- 🖼️ Deployed on GitHub Pages

---

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/aayush45123/WorldAtlas.git
   cd WorldAtlas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm run dev
   ```

---

## 🔧 Vite Configuration (vite.config.js)

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/WorldAtlas/',
  plugins: [react()],
});
```

---

## 🚀 Deployment (GitHub Pages)

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json` scripts**
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

Your app will be live at:  
👉 `https://aayush45123.github.io/WorldAtlas/`

---

## 📁 Folder Structure

```
WorldAtlas/
├── public/
│   └── hero.jpg
├── src/
│   ├── components/
│   │   ├── CountryCards/
│   │   ├── CountryDetail/
│   │   ├── CountryFilterControls/
│   │   ├── Hero/
│   │   ├── Title/
│   ├── context/
│   │   └── countryData.js
│   ├── pages/
│   │   ├── Country.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── main.jsx
```

---

## 📸 Screenshots

_Add screenshots in the `/public` folder and reference them like below:_

```md
![Explore Page](./public/WorldAtlas.png)
```

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

## 🤝 Connect

Made with ❤️ by Aayush Bharda  
[GitHub Profile](https://github.com/aayush45123)
