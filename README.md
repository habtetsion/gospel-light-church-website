# Gospel Light Eritrean Baptist Church Website

A modern, responsive church website built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional design with custom branding colors
- **Fast Performance**: Built with Vite for optimal development and production performance
- **Easy Navigation**: Intuitive header with mobile menu support
- **Complete Pages**:
  - Home: Hero section, welcome message, service times, upcoming events
  - About: Church history, mission, and leadership
  - Services: Service schedule and location
  - Events: Church events and activities
  - Sermons: Media library for sermons
  - Contact: Contact form and information
  - Giving: Online giving information

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router 6
- **Icons**: React Icons (HeroIcons, Font Awesome)
- **Forms**: React Hook Form + Yup
- **Maps**: React Leaflet
- **Media Player**: React Player

## Getting Started

### Prerequisites

- Node.js 18+ recommended (the project currently works with Node 18.17.1)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd gospel-light-church
```

2. Install dependencies (already installed):
```bash
npm install --legacy-peer-deps
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Building for Production

Build the project:

```bash
npm run build
```

The built files will be in the `dist/` folder.

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
gospel-light-church/
├── public/              # Static assets
│   ├── images/         # Images organized by section
│   └── sermons/        # Sermon audio/video files
├── src/
│   ├── components/     # React components
│   │   ├── common/    # Reusable components (Header, Footer, Button, Card)
│   │   ├── home/      # Home page components
│   │   ├── about/     # About page components
│   │   ├── services/  # Services page components
│   │   ├── events/    # Events page components
│   │   ├── sermons/   # Sermons page components
│   │   ├── contact/   # Contact page components
│   │   └── giving/    # Giving page components
│   ├── pages/         # Page components
│   ├── data/          # Static data (events, sermons, etc.)
│   ├── utils/         # Utility functions
│   ├── hooks/         # Custom React hooks
│   ├── App.jsx        # Main app component
│   ├── router.jsx     # Route configuration
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles and Tailwind config
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:
- **Primary**: Blue (#0ea5e9) - for trust and spirituality
- **Secondary**: Purple (#d946ef) - for accent elements
- **Accent**: Gold (#f59e0b) - for calls-to-action

### Content

Update the content in:
- Components in `src/components/`
- Data files in `src/data/` (when added)
- Images in `public/images/`

### Contact Information

Update contact details in:
- `src/components/common/Footer.jsx`
- `src/components/home/ServiceTimes.jsx`

## Next Steps

1. **Add Real Content**:
   - Replace placeholder images
   - Update contact information
   - Add real service times and location
   - Create data files for events and sermons

2. **Complete Remaining Pages**:
   - Implement About page with church history
   - Add Events calendar functionality
   - Build Sermons media player
   - Create Contact form with email integration
   - Design Giving page

3. **Integrate Services**:
   - Set up EmailJS for contact form
   - Add maps integration
   - Implement sermon media player
   - Add event calendar

4. **Deploy**:
   - Choose a hosting platform (Vercel, Netlify, etc.)
   - Configure domain name
   - Set up SSL certificate
   - Add analytics

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify

### Manual Hosting

1. Build: `npm run build`
2. Upload `dist/` folder to your web host
3. Configure server for SPA routing

## License

© 2025 Gospel Light Eritrean Baptist Church. All rights reserved.

## Support

For questions or issues, please contact the development team.
