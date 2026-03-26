# CETTS Investor Memorandum

A modern, interactive single-page investor memorandum webapp for **CETTS (Continuous Electrochemical Tailings Treatment System)** - an innovative solution for sustainable mining waste treatment.

## 🎯 Overview

This Next.js application presents a comprehensive investor pitch for CETTS, featuring an email-gated access system and detailed sections covering the business opportunity, technology, market analysis, and investment ask.

## 📋 Project Structure

```
cetts-pitch/
├── app/
│   ├── components/       # React components for the investor memorandum
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and helpers
│   ├── pages/           # Individual section pages (1-13)
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main landing page
├── components/          # Shared UI components
│   ├── theme-provider.tsx
│   └── keyboard-navigation.tsx
├── hooks/               # Additional custom hooks
├── lib/                 # Shared utilities
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## ✨ Features

### Investor Memorandum Sections

1. **Executive Summary** - High-level overview of CETTS technology and opportunity
2. **Problem Statement** - Mining industry challenges and environmental impact
3. **Solution** - CETTS technology and value proposition
4. **How It Works** - Technical deep-dive into the electrochemical process
5. **Unit Economics** - Financial model and profitability analysis
6. **Target Metals** - Addressable market and metal recovery opportunities
7. **Business Model** - Revenue streams and go-to-market strategy
8. **Competitive Landscape** - Market positioning and competitive advantages
9. **Roadmap** - Development milestones and timeline
10. **The Ask** - $20M Series A funding requirements and use of funds
11. **Team** - Leadership and advisory board
12. **Financials** - Projections and key metrics
13. **Contact** - Get in touch information

### Technical Features

- 🔐 **Email Gate** - Secure access control for investor materials
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Next.js 15 for optimal speed
- 🎨 **Modern UI** - Tailwind CSS with custom design system
- ⌨️ **Keyboard Navigation** - Accessible navigation controls
- 🌓 **Theme Support** - Light/dark mode capability
- 📊 **Interactive Elements** - Engaging data visualizations

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- Yarn package manager (or npm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Designsnap/cetts-pitch.git
cd cetts-pitch
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Run the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
yarn build
yarn start
# or
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy with one click

[![Deploy with Vercel](https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/35p17dw9AHs9z0DHsEVKKs/c4919e682996e8639d8a16bfd99e7752/twitter-card.png)

### Other Platforms

This app can also be deployed to:
- **Netlify** - Connect your GitHub repo and deploy
- **AWS Amplify** - Full-stack deployment with AWS
- **Railway** - Simple deployment with automatic HTTPS
- **DigitalOcean App Platform** - Managed platform deployment

### Environment Variables

If you need to configure environment-specific settings, create a `.env.local` file:

```env
# Add any required environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: Custom component library
- **Package Manager**: Yarn
- **Linting**: ESLint with TypeScript support

## 📝 Development

### Code Style

This project uses ESLint and Prettier for code formatting. Run linting with:

```bash
yarn lint
# or
npm run lint
```

### Project Configuration

- **TypeScript**: Strict mode enabled for type safety
- **Tailwind**: Custom configuration with animations
- **Next.js**: Optimized for production builds

## 🤝 Contributing

This is a private investor memorandum. For authorized contributions:

1. Create a feature branch
2. Make your changes
3. Submit a pull request for review

## 📄 License

See [LICENSE](LICENSE) file for details.

## 📧 Contact

For investor inquiries or questions about CETTS technology, please use the contact form within the application or reach out through the channels provided in the memorandum.

---

**CETTS** - Transforming Mining Waste into Sustainable Value

*This investor memorandum contains confidential information intended solely for potential investors.*
