# UPKIIP Backend - Quick Start Guide

## ✅ What's Been Created

- Express.js server with Socket.IO
- PostgreSQL database schema
- JWT authentication system
- Role-based authorization
- API routes for all portals
- Error handling middleware
- Database configuration

## 🚀 Quick Setup (5 Minutes)

### Step 1: Install PostgreSQL

**macOS (Homebrew):**
```bash
brew install postgresql@14
brew services start postgresql@14
```

**Or use Docker:**
```bash
docker run --name upkiip-postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres:14
```

### Step 2: Create Database

```bash
# Using psql
psql postgres
CREATE DATABASE upkiip_db;
\q

# Or using createdb
createdb upkiip_db
```

### Step 3: Install Dependencies

```bash
cd /Users/sanjeetkaul/CascadeProjects/UNKIIP/backend
npm install
```

### Step 4: Configure Environment

```bash
cp .env.example .env
```

**Edit `.env`** with your settings:
```env
PORT=5000
DB_PASSWORD=your_postgres_password
JWT_SECRET=change_this_to_random_string
```

### Step 5: Run Database Schema

```bash
psql -U postgres -d upkiip_db -f src/database/schema.sql
```

### Step 6: Start Server

```bash
npm run dev
```

Server running at: **http://localhost:5000**

## 🧪 Test the API

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "customer@test.com",
    "password": "password123",
    "role": "customer",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "customer@test.com",
    "password": "password123"
  }'
```

Copy the `token` from the response!

### Get Profile (Protected Route)
```bash
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          ✅ Database connection
│   ├── controllers/
│   │   ├── auth.controller.js   ✅ Auth logic
│   │   └── user.controller.js   ✅ User logic
│   ├── middleware/
│   │   ├── auth.js              ✅ JWT verification
│   │   ├── errorHandler.js      ✅ Error handling
│   │   └── notFound.js          ✅ 404 handler
│   ├── routes/
│   │   ├── auth.routes.js       ✅ Auth endpoints
│   │   ├── user.routes.js       ✅ User endpoints
│   │   ├── service.routes.js    ✅ Service endpoints (placeholder)
│   │   ├── payment.routes.js    ✅ Payment endpoints (placeholder)
│   │   ├── claim.routes.js      ✅ Claim endpoints (placeholder)
│   │   ├── provider.routes.js   ✅ Provider endpoints (placeholder)
│   │   ├── admin.routes.js      ✅ Admin endpoints (placeholder)
│   │   └── insurance.routes.js  ✅ Insurance endpoints (placeholder)
│   ├── database/
│   │   └── schema.sql           ✅ Database schema
│   └── server.js                ✅ Entry point
├── .env.example                 ✅ Environment template
├── .gitignore                   ✅ Git ignore
├── package.json                 ✅ Dependencies
└── README.md                    ✅ Full documentation
```

## 🔧 What's Working

✅ **Authentication**
- User registration
- Login with JWT
- Get current user
- Update password

✅ **User Management**
- Get profile
- Update profile
- Notifications

✅ **Database**
- PostgreSQL connection
- Complete schema with 14 tables
- Indexes for performance
- Auto-update timestamps

✅ **Security**
- Password hashing (bcrypt)
- JWT tokens
- Role-based access control
- CORS enabled

✅ **Real-time**
- Socket.IO configured
- Room-based messaging

## 📝 Next Steps to Complete

### 1. Implement Service Request Controllers
Create `src/controllers/service.controller.js` with:
- Create service request
- Match provider algorithm
- Update status
- Real-time tracking

### 2. Implement Payment Controllers
Create `src/controllers/payment.controller.js` with:
- Stripe integration
- PAYG wallet operations
- Transaction history
- Provider payouts

### 3. Implement Claims Controllers
Create `src/controllers/claim.controller.js` with:
- Submit claims
- Approve/reject workflow
- Document uploads
- Insurance integration

### 4. Add File Upload
- Configure Multer
- Handle claim documents
- Profile pictures

### 5. Add Email Notifications
- Configure Nodemailer
- Email templates
- Notification triggers

### 6. Testing
- Unit tests
- Integration tests
- API testing with Postman

## 🔗 Connect Frontend to Backend

### Update Frontend API Calls

Create `frontend/src/api/client.js`:
```javascript
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### Example Usage:
```javascript
import api from './api/client';

// Login
const response = await api.post('/auth/login', {
  email: 'user@example.com',
  password: 'password123'
});

localStorage.setItem('token', response.data.token);

// Get profile
const profile = await api.get('/auth/me');
```

## 🐛 Troubleshooting

### Database Connection Error
```bash
# Check if PostgreSQL is running
brew services list

# Start PostgreSQL
brew services start postgresql@14
```

### Port Already in Use
```bash
# Change PORT in .env
PORT=5001
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources

- [Express.js Docs](https://expressjs.com/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [JWT.io](https://jwt.io/)
- [Socket.IO Docs](https://socket.io/docs/)
- [Stripe API](https://stripe.com/docs/api)

## ✅ Status

**Backend is functional and ready for development!**

- ✅ Server running
- ✅ Database connected
- ✅ Authentication working
- ✅ API routes defined
- ⏳ Controllers need implementation
- ⏳ Frontend integration pending

---

**Happy Coding! 🚀**
