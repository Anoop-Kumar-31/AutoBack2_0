# AutoBack - AI-Powered Automation Website

Professional AI/ML services company website built with React + Vite.

## 🚀 Live Demo

[View Live Site](https://your-render-url.onrender.com)

## ✨ Features

- 🎨 **Professional Design System** - Clean, modern aesthetics with Inter + Poppins typography
- 📊 **8 Comprehensive Sections** - Services, Solutions, Case Studies, Tech Stack, and more
- 💼 **Business-Focused Content** - Professional copy that appeals to clients and recruiters
- 📱 **Fully Responsive** - Mobile-first design with hamburger menu
- ⚡ **Smooth Animations** - Professional hover effects and transitions
- 🎯 **Strategic CTAs** - Multiple call-to-action buttons throughout

## 🛠️ Tech Stack

- **Frontend**: React 18.2
- **Build Tool**: Vite 7.2
- **Styling**: Vanilla CSS with CSS Variables
- **Fonts**: Google Fonts (Inter, Poppins)
- **Icons**: Emoji + CDN logos (Devicon)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Anoop-Kumar-31/AutoBack2_0.git
cd AutoBack2_0

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Preview production build
npm run serve
```

## 🌐 Deployment

### Render (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Render
3. Use these build settings:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: 20.19.0 or higher

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

## 📁 Project Structure

```
AutoBack2_0/
├── src/
│   ├── components/
│   │   ├── NavBAR.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Services.jsx / .css
│   │   ├── Solutions.jsx / .css
│   │   ├── WhyChooseUs.jsx / .css
│   │   ├── CaseStudies.jsx / .css
│   │   ├── TechStack.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── ContactCTA.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css (Design System)
│   └── index.jsx
├── index.html
├── package.json
├── vite.config.js
└── .nvmrc
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Colors**: Professional blues, clean whites, subtle grays
- **Typography**: 2-font system (Inter for body, Poppins for headings)
- **Spacing**: Consistent spacing scale (8px base)
- **Shadows**: Modern, layered shadows
- **Gradients**: Subtle, professional gradients

## 🔧 Environment Variables

No environment variables required for basic deployment. Update contact email in:
- `src/components/ContactCTA.jsx` - Line 16
- `src/components/Footer.jsx` - Line 35

## 📝 Customization

### Update Content
- **Services**: Edit `src/components/Services.jsx`
- **Case Studies**: Edit `src/components/CaseStudies.jsx`
- **About Stats**: Edit `src/components/About.jsx`
- **Contact Info**: Edit `src/components/ContactCTA.jsx` and `Footer.jsx`

### Update Styling
- **Colors**: Edit CSS variables in `src/index.css` (lines 12-50)
- **Typography**: Edit font imports in `src/index.css` (line 7)
- **Spacing**: Edit spacing scale in `src/index.css` (lines 52-58)

## 🐛 Known Issues

- Ensure Node.js version is **20.19.0 or higher** for Vite 7.x compatibility
- Dev server may require port 5173 to be available

## 📄 License

MIT

## 👤 Author

**Anoop Kumar**
- Full Stack Developer
- Email: amt312002@gmail.com
- GitHub: [@Anoop-Kumar-31](https://github.com/Anoop-Kumar-31)

---

Built with ❤️ using React + Vite
