# DHGO - OTT Platform Roadmap Presentation

A sleek, interactive slide deck showcasing the strategic roadmap for DHGO (formerly Dishhome Go), a Nepali streaming platform.

## Features

- 🎨 Ultra-modern design with Tailwind CSS v4
- ⚡ Smooth animations with Framer Motion
- 🎯 Interactive elements and hover effects
- 📱 Fully responsive layout
- ⌨️ Keyboard navigation (Arrow keys, Space)
- 🖱️ Mouse navigation (click zones)
- 📍 Jump navigation sidebar
- 🔄 State persistence across page refreshes

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Font**: Geist (Google Fonts)
- **Deployment**: GitHub Pages

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Create production build
npm run build
```

The static files will be generated in the `out` directory.

## Deployment

### Manual Deployment to gh-pages Branch

```bash
# Deploy to GitHub Pages
npm run deploy
```

This command will:
1. Build the project with production settings
2. Create the `.nojekyll` file automatically
3. Deploy the `out` folder to the `gh-pages` branch

**Setup GitHub Pages:**
1. Go to repository settings
2. Navigate to **Pages** → **Build and deployment**
3. Set **Source** to "Deploy from a branch"
4. Set **Branch** to `gh-pages` and folder to `/ (root)`
5. Save and wait for deployment

**Live URL:** `https://wingsuiter101.github.io/OTT-roadmap/`

**Note:** The first deployment may take a few minutes to go live.

## Navigation

- **Arrow Right / Space**: Next slide
- **Arrow Left**: Previous slide
- **Mouse Click**: Click right side of screen to advance, left side to go back
- **Sidebar**: Click slide numbers to jump directly
- **Progress Dots**: Visual indicator at bottom center

## Project Structure

```
slide-deck/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles & color palette
│   │   ├── layout.tsx        # Root layout with fonts
│   │   └── page.tsx          # Main slide orchestration
│   └── components/
│       ├── Deck.tsx          # Slide deck navigation logic
│       ├── Slide.tsx         # Individual slide wrapper
│       └── [Various slide components]
├── public/
│   └── [Images and assets]
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
└── next.config.ts            # Next.js config for static export
```

## Color Palette

- **Primary**: `#FF2E2E` (Vibrant Modern Red)
- **Dark**: `#0A0A0A` (Sleek Black)
- **Light**: `#FAFAFA` (Soft White)
- **Grays**: Tailwind's standard gray scale

## Content Overview

The presentation covers:

1. **Executive Summary** - Core strategy and monetization
2. **Problem Statement** - Event-driven churn analysis
3. **DHGO Opportunity** - Strategic framework
4. **Brand Evolution** - Rebranding from Dishhome Go to DHGO
5. **5-Pillar Ecosystem** - Content strategy
6. **Sports** - IP portfolio, strategy, financials
7. **Entertainment** - Original content, regional programming
8. **Specials & Events** - Stand-up, music, viral content
9. **Cinema** - Prestige films & mainstream windowing
10. **Kids** - DHGO Junior offerings
11. **Advertising** - Inventory and sponsor packages
12. **Operations** - Team structure, timeline, financials

## License

Private project for DHGO/BLQ Ventures.

---

Built with ❤️ for the future of Nepali streaming
