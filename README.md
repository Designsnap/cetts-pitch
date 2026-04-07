# CETTS — Cinematic Investor Pitch (Next.js)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Static Export (for Hostinger)

```bash
npm run build
```

This generates a static `out/` folder. Upload the contents of `out/` to your Hostinger hosting.

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with fonts & meta
│   └── page.js            # Main page composing all sections
├── components/
│   ├── Footer.js
│   ├── Navbar.js
│   ├── Preloader.js
│   ├── SectionDivider.js
│   └── sections/
│       ├── Hero.js            # Three.js particle hero
│       ├── Disasters.js       # Tailings disaster cards
│       ├── CostOfInaction.js  # Animated counter + comparison table
│       ├── Bottleneck.js      # Membrane cost problem
│       ├── Breakthrough.js    # Proprietary membrane reveal
│       ├── SystemViewer.js    # Full 3D pilot plant (Three.js)
│       ├── ValueRecovery.js   # Metal recovery cards
│       ├── Proof.js           # Performance data + Chart.js
│       ├── ScalePath.js       # Deployment timeline
│       └── CTA.js             # Contact form
└── styles/
    └── globals.css            # All styling
```

## Hosting on Hostinger

1. Run `npm run build`
2. Upload the `out/` folder contents to your Hostinger public_html
3. No Node.js server needed — it's fully static

## Tech Stack

- **Next.js 14** (Static Export)
- **Three.js** (3D scenes)
- **Chart.js** (via react-chartjs-2)
- **Font Awesome** (icons)
- **Inter** (Google Fonts)
