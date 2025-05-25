# Portfolio Website Documentation

## Overview
This is a modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. It features dynamic animations, SEO optimization, and a modular component structure.

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Git

### Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables:
```env
DATABASE_URL=postgresql://user:password@host:port/dbname
```
4. Start the development server:
```bash
npm run dev
```

## Tech Stack
- Frontend:
  - React 18+
  - TypeScript
  - TailwindCSS
  - Framer Motion
  - Shadcn/ui Components
- Backend:
  - Express.js
  - PostgreSQL
  - Drizzle ORM

## Project Structure
```
├── client/               # Frontend application
│   ├── public/          # Static assets
│   └── src/             # Source code
│       ├── components/  # React components
│       ├── pages/       # Page components
│       ├── lib/         # Utilities and helpers
│       └── hooks/       # Custom React hooks
├── server/              # Backend application
│   ├── routes.ts        # API routes
│   └── index.ts         # Server entry point
└── db/                  # Database configuration
    ├── schema.ts        # Database schema
    └── index.ts         # Database connection
```

## Interactive Demos

### CSM Demo's
A showcase of Customer Success Management tools, featuring three embedded applications:

- **Shared Success Space**  
  URL: https://shared-success-space.lovable.app/
- **Customer Success Galaxy**  
  URL: https://customer-success-galaxy.lovable.app
- **Third Demo App**  
  URL: https://third-demo-app.example.com

These demos are accessible via the `CSMDemo` component and are presented in a simulated computer frame UI.

### AI-Powered Presentation Builder
Implemented in `DemoApp.tsx`, this interactive demo allows Customer Success Managers to:
- Upload datasets and visualize insights dynamically
- Generate AI-driven stories from raw data
- Interact with live data visualizations and adjust parameters in real time

Both demos are located in the `client/src/components/csm-demo/CSMDemo.tsx` and `client/src/demo/DemoApp.tsx` files, respectively.

## Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run db:push`: Update database schema
- `npm start`: Start production server

## Documentation Index
- [Site Structure](./STRUCTURE.md)
- [Content Management Guide](./CONTENT_GUIDE.md)
- [Deployment Guide](./DEPLOYMENT.md)
  - [Performance Optimization](./DEPLOYMENT.md#performance-optimization)
  - [Security Best Practices](./DEPLOYMENT.md#security-considerations)
  - [Troubleshooting Guide](./DEPLOYMENT.md#troubleshooting)
  - [API Documentation](./DEPLOYMENT.md#api-documentation)
  - [Development Best Practices](./DEPLOYMENT.md#development-best-practices)