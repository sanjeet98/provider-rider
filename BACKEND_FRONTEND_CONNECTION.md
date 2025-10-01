# 🔗 Backend-Frontend Connection Guide

## 📊 Current Status

| Component | Port | Status | Details |
|-----------|------|--------|---------|
| **Backend API** | 3001 | ✅ Running | Node.js + Express + PostgreSQL |
| **Frontend** | 5174 | ✅ Running | React + TypeScript + Vite |
| **Connection** | - | ⚠️ Partial | API client created, needs configuration |

## ✅ What's Been Set Up

### 1. API Client Created
- ✅ `src/api/client.ts` - Axios-based API client
- ✅ Automatic token management
- ✅ Error handling and 401 redirects
- ✅ Pre-configured endpoints for all features

### 2. Axios Installed
- ✅ HTTP client library added to dependencies

### 3. Environment Variables
- ✅ `.env.example` updated with API URL

## 🚀 How to Connect

### Step 1: Create `.env` File

```bash
cd /Users/sanjeetkaul/CascadeProjects/UNKIIP
```

Create `.env` file:
```env
# Backend API URL
VITE_API_URL=http://localhost:3001/api

# Google Maps API Key (optional)
VITE_GOOGLE_MAPS_API_KEY=your_key_here
```

### Step 2: Update Backend CORS

The backend needs to allow requests from your frontend. Update `backend/src/server.js`:

```javascript
// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5174',
  credentials: true,
};
app.use(cors(corsOptions));
```

### Step 3: Restart Both Servers

**Backend:**
```bash
cd /Users/sanjeetkaul/CascadeProjects/UNKIIP/backend
node src/server.js
```

**Frontend:**
```bash
cd /Users/sanjeetkaul/CascadeProjects/UNKIIP
npm run dev
```

### Step 4: Test Connection

```bash
# Test backend health
curl http://localhost:3001/api/health

# Should return:
# {"status":"OK","message":"UPKIIP Backend API is running","timestamp":"..."}
```

## 📝 Example: Connect Login Page

Update `src/pages/Login.tsx` to use real authentication:

```typescript
import api, { authAPI } from '../api/client';

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  try {
    // Call real backend API
    const response = await authAPI.login(email, password);
    
    // Store token
    localStorage.setItem('token', response.data.token);
    
    // Set user role
    setRole(response.data.role);
    
    // Navigate to dashboard
    navigate(`/${response.data.role}/dashboard`);
  } catch (error: any) {
    setError(error.response?.data?.message || 'Invalid credentials');
  } finally {
    setLoading(false);
  }
};
```

## 🔧 Available API Endpoints

### Authentication
```typescript
import { authAPI } from './api/client';

// Login
const { data } = await authAPI.login(email, password);

// Register
const { data } = await authAPI.register({
  email, password, role, firstName, lastName, phone
});

// Get current user
const { data } = await authAPI.getProfile();

// Update password
await authAPI.updatePassword(oldPassword, newPassword);
```

### User Profile
```typescript
import { userAPI } from './api/client';

// Get profile
const { data } = await userAPI.getProfile();

// Update profile
await userAPI.updateProfile({ firstName, lastName, phone });

// Get notifications
const { data } = await userAPI.getNotifications();

// Mark notification as read
await userAPI.markNotificationRead(notificationId);
```

### Services
```typescript
import { serviceAPI } from './api/client';

// Get all services
const { data } = await serviceAPI.getAll();

// Create service request
await serviceAPI.create({
  type: 'plumbing',
  description: 'Burst pipe',
  location: '123 Main St'
});
```

### Claims
```typescript
import { claimAPI } from './api/client';

// Get all claims
const { data } = await claimAPI.getAll();

// Create claim
await claimAPI.create({
  serviceId: 'service-id',
  amount: 500,
  description: 'Emergency repair'
});
```

### Payments
```typescript
import { paymentAPI } from './api/client';

// Get payment history
const { data } = await paymentAPI.getAll();

// Get wallet balance
const { data } = await paymentAPI.getBalance();

// Create payment
await paymentAPI.create({
  amount: 100,
  method: 'card'
});
```

## 🎯 Example: Connect a Component

### Before (Mock Data):
```typescript
const [services, setServices] = useState([
  { id: 1, type: 'Plumbing', status: 'pending' },
  { id: 2, type: 'Electrical', status: 'completed' },
]);
```

### After (Real API):
```typescript
import { serviceAPI } from '../api/client';

const [services, setServices] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchServices = async () => {
    try {
      const { data } = await serviceAPI.getAll();
      setServices(data);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchServices();
}, []);
```

## 🔐 Authentication Flow

### 1. Login
```typescript
// User logs in
const response = await authAPI.login(email, password);

// Store token
localStorage.setItem('token', response.data.token);

// Token automatically added to all future requests
```

### 2. Protected Requests
```typescript
// API client automatically adds token
// Authorization: Bearer <token>

const profile = await userAPI.getProfile();
```

### 3. Logout
```typescript
// Clear token
localStorage.removeItem('token');

// Redirect to login
navigate('/login');
```

### 4. Auto-Redirect on 401
```typescript
// If token expires or is invalid
// API client automatically:
// 1. Clears token
// 2. Redirects to /login
```

## 🧪 Testing the Connection

### 1. Test Backend Health
```bash
curl http://localhost:3001/api/health
```

### 2. Test Registration
```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test123!@#",
    "role": "customer",
    "firstName": "Test",
    "lastName": "User",
    "phone": "+1234567890"
  }'
```

### 3. Test Login
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test123!@#"
  }'
```

### 4. Test Protected Route
```bash
# Copy token from login response
curl http://localhost:3001/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## 📋 Checklist

### Backend Setup
- [x] Backend running on port 3001
- [x] Database connected (upkiip_db)
- [x] CORS configured
- [x] API routes defined
- [ ] Update CORS to allow frontend origin

### Frontend Setup
- [x] Axios installed
- [x] API client created (`src/api/client.ts`)
- [x] Environment variables configured
- [ ] Create `.env` file with API URL
- [ ] Update components to use API
- [ ] Test authentication flow

### Testing
- [ ] Backend health check works
- [ ] Can register new user
- [ ] Can login with credentials
- [ ] Protected routes require token
- [ ] Frontend can call backend APIs

## 🎯 Next Steps

### 1. Update Login Page
Connect the login page to use real authentication instead of mock data.

### 2. Update Dashboard
Fetch real data from backend instead of using hardcoded values.

### 3. Add Loading States
Show loading spinners while fetching data from API.

### 4. Add Error Handling
Display user-friendly error messages when API calls fail.

### 5. Add Real-time Updates
Use Socket.IO for live notifications and updates.

## 🔧 Troubleshooting

### CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```

**Fix:** Update backend CORS configuration to allow your frontend URL.

### 401 Unauthorized
```
Request failed with status code 401
```

**Fix:** Check if token is valid and not expired. Try logging in again.

### Network Error
```
Network Error
```

**Fix:** 
1. Check if backend is running: `lsof -i:3001`
2. Check if URL is correct in `.env`
3. Check firewall settings

### Connection Refused
```
connect ECONNREFUSED 127.0.0.1:3001
```

**Fix:** Backend is not running. Start it with:
```bash
cd backend && node src/server.js
```

## 📚 Resources

- [Axios Documentation](https://axios-http.com/)
- [React Query](https://tanstack.com/query/latest) - For advanced data fetching
- [SWR](https://swr.vercel.app/) - Alternative to React Query

## ✅ Summary

**Status:** Backend and Frontend are running but not connected yet.

**To Connect:**
1. Create `.env` file with `VITE_API_URL=http://localhost:3001/api`
2. Update backend CORS to allow frontend
3. Update components to use API client
4. Test authentication flow

**API Client Ready:** ✅  
**Environment Variables:** ⚠️ Need `.env` file  
**Components Updated:** ❌ Still using mock data  
**Authentication:** ❌ Not connected  

**Next:** Create `.env` file and update Login page to use real API!
