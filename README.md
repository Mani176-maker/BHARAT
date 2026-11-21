# BHARAT ONE — One Nation, One Intelligent Solution

A unified AI-powered governance platform demo showcasing citizen services, real-time dashboard analytics, and multi-sector intelligence for the Government of India.

## 🚀 Live Demo

**GitHub Pages:** `https://<your-username>.github.io/<repo-name>/`

## ✨ Features

- **5 Main Views**: Home, Sectors, Dashboard, Services, About
- **Real-time Dashboard**: 6 modules with live metrics (auto-refresh every 30s)
- **Citizen Services Directory**: 25+ services with search & category filtering
- **Multilingual Support**: English, Hindi, Tamil, Telugu (UI localization)
- **Voice Assistant**: Modal with animated wave visualization
- **Online/Offline Toggle**: Simulated connectivity status
- **Keyboard Shortcuts**: `Alt+1-5` for view switching, `Space` for voice, `Esc` to close modals
- **Full Accessibility**: ARIA attributes, screen reader announcements, focus management
- **Responsive Design**: Mobile-first, works on all screen sizes
- **PWA Ready**: Manifest, icons, theme colors

## 📁 Project Structure

```
├── index.html                 # Main HTML entry point
├── assets/
│   ├── css/
│   │   └── style.css         # All styles (CSS custom properties, responsive)
│   ├── js/
│   │   └── app.js            # Application logic (ES6 modules pattern)
│   └── images/
│       ├── favicon.svg       # App icon
│       ├── apple-touch-icon.svg
│       └── manifest.json     # PWA manifest
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment workflow
└── README.md
```

## 🛠 Local Development

### Option 1: VS Code Live Server (Recommended)
1. Open folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

### Option 2: Python HTTP Server
```bash
cd live
python -m http.server 8000
# Open http://localhost:8000
```

### Option 3: Node.js http-server
```bash
npx http-server live -p 8000 -o
```

## 🌐 Deploy to GitHub Pages

### Prerequisites
- GitHub repository
- GitHub Pages enabled in repository settings

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: BHARAT ONE platform"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Source: **GitHub Actions**
   - The workflow will auto-deploy on push to `main`

3. **Access Your Site**
   - URL: `https://<your-username>.github.io/<repo-name>/`
   - First deployment takes 1-2 minutes

### Custom Domain (Optional)
1. Add `CNAME` file to root with your domain
2. Configure DNS: `CNAME` record pointing to `<username>.github.io`
3. Enable "Enforce HTTPS" in Pages settings

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Alt + 1` | Home |
| `Alt + 2` | Sectors |
| `Alt + 3` | Dashboard |
| `Alt + 4` | Services |
| `Alt + 5` | About |
| `Space` | Open Voice Assistant (when focused on body) |
| `Esc` | Close Voice Modal |

## 🎨 Customization

### Colors (CSS Custom Properties)
Edit `assets/css/style.css`:
```css
:root {
  --navy: #0b1d3a;
  --saffron: #ff7a00;
  --green: #138808;
  /* ... more variables */
}
```

### Data Sources
Edit `assets/js/app.js`:
- `sectors` array — sector cards & dashboard modules
- `allServices` array — services directory
- `generateMetrics()` — simulated real-time data
- `aiInsights` array — AI insight messages

### Languages
Add to `translations` object in `app.js`:
```javascript
const translations = {
  en: { ... },
  hi: { ... },
  // Add new language
  bn: { home: 'হোম', sectors: ' sektor', ... }
};
```

## 📱 PWA Features

- Installable on mobile/desktop
- Offline-capable (add service worker for full offline)
- Native app-like experience
- Theme color integration

## 🔧 Tech Stack

- **HTML5** — Semantic markup, accessibility
- **CSS3** — Custom properties, Grid/Flexbox, animations
- **Vanilla JS (ES6+)** — No frameworks, zero dependencies
- **GitHub Actions** — CI/CD for Pages deployment

## 📄 License

Government of India — Ministry of Electronics & Information Technology. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Support

- **Issues**: GitHub Issues tab
- **Email**: support@bharatone.gov.in (demo)
- **Documentation**: `/docs` (planned)

---

**Built for Digital India** 🇮🇳