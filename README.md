# UNKIIP - Service Management Platform

A comprehensive multi-portal web application for managing home services, connecting customers with service providers, and integrating insurance claims processing.

## Features

### 1. Customer Portal
- **Home Dashboard**: Quick actions, subscription summary, real-time partner ETA tracking, usage & savings overview
- **Service Request**: Multi-step form with partner matching, live ETA tracking, and status monitoring
- **Claims Management**: Submit and track insurance claims with coverage overview
- **Payments & Billing**: Multiple payment methods (Card, EFT, Wallet, Insurance Direct Billing), transaction history, promotions
- **Reports**: Usage analytics, savings dashboard, service history
- **Profile Management**: Personal info, property details, notification preferences, security settings
- **Support Center**: Live chat, FAQ, help center, feedback system

### 2. Service Provider Portal
- **Dashboard**: Job notifications, earnings summary, schedule overview, performance metrics
- **Job Management**: Accept/decline jobs, view details, track progress, complete jobs
- **Calendar**: Schedule visualization, upcoming events, calendar sync
- **Payments**: Earnings tracking, payout requests, transaction history
- **Profile**: Skills & certifications, KYC status, ratings & reviews
- **Support**: Provider-specific help center and FAQ

### 3. Admin & Operations Console
- **Dashboard**: System overview, key metrics, recent activity, alerts
- **Dispatch & Monitoring**: Real-time job tracking, SLA monitoring, manual assignment/override
- **Reporting & Analytics**: ARPU, churn rate, demand trends, resolution times
- **User Management**: Manage customers, service providers, and insurance partners

### 4. Insurance Integration Layer
- **Claims Processing**: Review and approve/reject claims, structured data view
- **Analytics**: Claims frequency, costs analysis, predictive insights

### 5. System-Wide Features
- Multi-role authentication with role switcher
- Global search functionality
- Real-time notifications
- GDPR/POPIA compliance with consent banner
- Responsive Material-UI design
- Professional and modern UI/UX

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v5
- **Routing**: React Router v6
- **Icons**: Material Icons
- **Styling**: Emotion (CSS-in-JS)
- **State Management**: React Context API

## Prerequisites

- Node.js 18+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd /Users/sanjeetkaul/CascadeProjects/UNKIIP
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
UNKIIP/
├── src/
│   ├── components/          # Reusable components
│   │   └── ConsentBanner.tsx
│   ├── context/            # React Context providers
│   │   └── UserContext.tsx
│   ├── layouts/            # Layout components
│   │   └── AppLayout.tsx
│   ├── pages/              # Page components
│   │   ├── customer/       # Customer portal pages
│   │   │   ├── Home.tsx
│   │   │   ├── ServiceRequest.tsx
│   │   │   ├── Claims.tsx
│   │   │   ├── Payments.tsx
│   │   │   ├── Reports.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── Support.tsx
│   │   ├── provider/       # Service provider portal pages
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Jobs.tsx
│   │   │   ├── Calendar.tsx
│   │   │   ├── Payments.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── Support.tsx
│   │   ├── admin/          # Admin console pages
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Dispatch.tsx
│   │   │   ├── Reporting.tsx
│   │   │   └── UserManagement.tsx
│   │   └── insurance/      # Insurance portal pages
│   │       ├── Claims.tsx
│   │       └── Analytics.tsx
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Application entry point
│   └── theme.ts            # Material-UI theme configuration
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Usage

### Switching Roles

Use the role switcher in the top navigation bar to switch between:
- **Customer** - Access customer portal features
- **Service Provider** - Manage jobs and earnings
- **Admin** - System administration and monitoring
- **Insurance** - Claims processing and analytics

### Navigation

- **Desktop**: Use the top navigation bar to access different sections
- **Mobile**: Tap the menu icon to open the drawer navigation

### Key Features to Explore

1. **Customer Home**: View quick actions and subscription details
2. **Service Request**: Submit a new service request with real-time matching
3. **Claims**: Submit and track insurance claims
4. **Provider Dashboard**: View job notifications and earnings
5. **Admin Dispatch**: Monitor active jobs and SLA status
6. **Insurance Analytics**: Review claims data and predictive insights

## Customization

### Theme

Edit `src/theme.ts` to customize colors, typography, and component styles:

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change primary color
    },
    // ... other customizations
  },
});
```

### Adding New Pages

1. Create a new component in the appropriate `pages/` subdirectory
2. Add the route in `src/App.tsx`
3. Update navigation in `src/layouts/AppLayout.tsx`

## Future Enhancements

- [ ] Real-time WebSocket integration for live updates
- [ ] Map integration (Google Maps/Mapbox) for location tracking
- [ ] Chart library integration (Chart.js/Recharts) for analytics
- [ ] Calendar library integration (FullCalendar/React Big Calendar)
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Email/SMS notification service
- [ ] File upload for claim documents
- [ ] Advanced search with filters
- [ ] Multi-language support (i18n)
- [ ] Dark mode theme
- [ ] Progressive Web App (PWA) support
- [ ] Unit and integration tests

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

Copyright © 2025 UNKIIP. All rights reserved.

## Support

For support, email support@unkiip.com or visit our support center within the application.
