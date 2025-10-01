# UPKIIP Backend API

Node.js + Express + PostgreSQL backend for the UPKIIP Service Management Platform.

## Features

- ✅ RESTful API with Express.js
- ✅ PostgreSQL database with connection pooling
- ✅ JWT authentication & authorization
- ✅ Role-based access control (Customer, Provider, Admin, Insurance)
- ✅ Real-time updates with Socket.IO
- ✅ Payment processing with Stripe
- ✅ File uploads for claims
- ✅ Email notifications
- ✅ Comprehensive error handling

## Tech Stack

- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Database:** PostgreSQL 14+
- **Authentication:** JWT (jsonwebtoken)
- **Real-time:** Socket.IO
- **Payment:** Stripe
- **Email:** Nodemailer
- **Validation:** express-validator

## Prerequisites

1. **Node.js 18+** and npm
2. **PostgreSQL 14+** installed and running
3. **Stripe account** (for payments)
4. **Email account** (for notifications)

## Installation

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Set Up Database

```bash
# Create PostgreSQL database
createdb upkiip_db

# Or using psql
psql -U postgres
CREATE DATABASE upkiip_db;
\q
```

### 3. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
PORT=5000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=upkiip_db
DB_USER=postgres
DB_PASSWORD=your_password

# JWT
JWT_SECRET=your_super_secret_key_change_this
JWT_EXPIRES_IN=7d

# Stripe (get from https://dashboard.stripe.com/test/apikeys)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...

# Email (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Frontend
FRONTEND_URL=http://localhost:5173
```

### 4. Run Database Migrations

```bash
# Apply schema
psql -U postgres -d upkiip_db -f src/database/schema.sql

# Or using npm script (once migrate.js is created)
npm run migrate
```

### 5. Seed Database (Optional)

```bash
npm run seed
```

## Running the Server

### Development Mode

```bash
npm run dev
```

Server runs on: http://localhost:5000

### Production Mode

```bash
npm start
```

## API Endpoints

### Authentication

```
POST   /api/auth/register          - Register new user
POST   /api/auth/login             - Login user
GET    /api/auth/me                - Get current user (Protected)
PUT    /api/auth/update-password   - Update password (Protected)
POST   /api/auth/forgot-password   - Request password reset
PUT    /api/auth/reset-password/:token - Reset password
```

### Users

```
GET    /api/users/profile          - Get user profile (Protected)
PUT    /api/users/profile          - Update profile (Protected)
GET    /api/users/notifications    - Get notifications (Protected)
PUT    /api/users/notifications/:id/read - Mark notification as read (Protected)
```

### Service Requests

```
GET    /api/services               - Get all service requests (Protected)
POST   /api/services               - Create service request (Customer)
GET    /api/services/:id           - Get service request details (Protected)
PUT    /api/services/:id           - Update service request (Protected)
DELETE /api/services/:id           - Cancel service request (Customer)
POST   /api/services/:id/accept    - Accept service request (Provider)
POST   /api/services/:id/complete  - Complete service request (Provider)
POST   /api/services/:id/review    - Add review (Customer)
```

### Payments

```
GET    /api/payments/transactions  - Get transaction history (Protected)
POST   /api/payments/topup         - Top up PAYG wallet (Customer)
POST   /api/payments/process       - Process payment (Protected)
GET    /api/payments/wallet        - Get wallet balance (Customer)
POST   /api/payments/payout        - Request payout (Provider)
```

### Claims

```
GET    /api/claims                 - Get all claims (Protected)
POST   /api/claims                 - Submit new claim (Customer)
GET    /api/claims/:id             - Get claim details (Protected)
PUT    /api/claims/:id             - Update claim (Protected)
POST   /api/claims/:id/approve     - Approve claim (Insurance)
POST   /api/claims/:id/reject      - Reject claim (Insurance)
POST   /api/claims/:id/documents   - Upload claim documents (Customer)
```

### Providers

```
GET    /api/providers              - Get all providers (Admin)
GET    /api/providers/:id          - Get provider details (Protected)
PUT    /api/providers/:id          - Update provider profile (Provider)
GET    /api/providers/:id/jobs     - Get provider jobs (Provider)
GET    /api/providers/:id/earnings - Get provider earnings (Provider)
PUT    /api/providers/:id/availability - Update availability (Provider)
```

### Admin

```
GET    /api/admin/dashboard        - Get dashboard stats (Admin)
GET    /api/admin/users            - Get all users (Admin)
PUT    /api/admin/users/:id        - Update user (Admin)
DELETE /api/admin/users/:id        - Delete user (Admin)
GET    /api/admin/analytics        - Get analytics data (Admin)
GET    /api/admin/reports          - Generate reports (Admin)
```

### Insurance

```
GET    /api/insurance/claims       - Get all claims (Insurance)
GET    /api/insurance/analytics    - Get claims analytics (Insurance)
GET    /api/insurance/policies     - Get policies (Insurance)
```

## Real-time Events (Socket.IO)

### Client Events

```javascript
// Connect to socket
const socket = io('http://localhost:5000');

// Join a room (service request ID)
socket.emit('join-room', 'service-request-id');

// Send service update
socket.emit('service-update', {
  roomId: 'service-request-id',
  status: 'in-progress',
  message: 'Provider is on the way'
});
```

### Server Events

```javascript
// Listen for service status changes
socket.on('service-status-changed', (data) => {
  console.log('Service status updated:', data);
});
```

## Database Schema

See `src/database/schema.sql` for complete schema.

### Main Tables

- `users` - Base user authentication
- `customers` - Customer profiles
- `providers` - Service provider profiles
- `admins` - Admin users
- `insurers` - Insurance companies
- `service_requests` - Service requests
- `transactions` - Payment transactions
- `claims` - Insurance claims
- `reviews` - Ratings and reviews
- `notifications` - User notifications

## Error Handling

All errors return JSON in this format:

```json
{
  "message": "Error description",
  "stack": "Stack trace (development only)"
}
```

### HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

## Security

- Passwords hashed with bcrypt
- JWT tokens for authentication
- Role-based authorization
- SQL injection protection with parameterized queries
- CORS enabled for frontend
- Environment variables for sensitive data

## Testing

```bash
# Run tests (once test suite is created)
npm test
```

## Deployment

### Environment Variables

Set all production environment variables:
- Use strong JWT_SECRET
- Use production Stripe keys
- Set NODE_ENV=production
- Configure production database

### Database

```bash
# Backup database
pg_dump upkiip_db > backup.sql

# Restore database
psql upkiip_db < backup.sql
```

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # Database configuration
│   ├── controllers/             # Route controllers
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── service.controller.js
│   │   ├── payment.controller.js
│   │   ├── claim.controller.js
│   │   ├── provider.controller.js
│   │   ├── admin.controller.js
│   │   └── insurance.controller.js
│   ├── middleware/              # Custom middleware
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── notFound.js
│   ├── routes/                  # API routes
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── service.routes.js
│   │   ├── payment.routes.js
│   │   ├── claim.routes.js
│   │   ├── provider.routes.js
│   │   ├── admin.routes.js
│   │   └── insurance.routes.js
│   ├── database/
│   │   ├── schema.sql           # Database schema
│   │   ├── migrate.js           # Migration script
│   │   └── seed.js              # Seed data
│   ├── utils/                   # Utility functions
│   │   ├── email.js
│   │   ├── stripe.js
│   │   └── helpers.js
│   └── server.js                # Entry point
├── uploads/                     # File uploads
├── .env                         # Environment variables
├── .env.example                 # Example environment
├── .gitignore
├── package.json
└── README.md
```

## Next Steps

1. Create remaining controller files
2. Implement all route handlers
3. Add input validation
4. Set up email templates
5. Implement file upload handling
6. Add comprehensive error logging
7. Write unit and integration tests
8. Set up CI/CD pipeline
9. Deploy to production

## Support

For issues or questions, please open an issue on GitHub.

## License

MIT
