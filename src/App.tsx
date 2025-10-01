import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import { UserProvider } from './context/UserContext';

// Auth Pages
import Login from './pages/Login';

// Customer Portal Pages
import CustomerHome from './pages/customer/Home';
import ServiceRequest from './pages/customer/ServiceRequest';
import Claims from './pages/customer/Claims';
import Payments from './pages/customer/Payments';
import Reports from './pages/customer/Reports';
import CustomerProfile from './pages/customer/Profile';
import CustomerSupport from './pages/customer/Support';

// Service Provider Portal Pages
import ProviderDashboard from './pages/provider/Dashboard';
import Jobs from './pages/provider/Jobs';
import ProviderCalendar from './pages/provider/Calendar';
import ProviderPayments from './pages/provider/Payments';
import ProviderProfile from './pages/provider/Profile';
import ProviderSupport from './pages/provider/Support';

// Admin Portal Pages
import AdminDashboard from './pages/admin/Dashboard';
import Dispatch from './pages/admin/Dispatch';
import AdminReporting from './pages/admin/Reporting';
import UserManagement from './pages/admin/UserManagement';

// Insurance Portal Pages
import InsuranceClaims from './pages/insurance/Claims';
import InsuranceAnalytics from './pages/insurance/Analytics';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Login Route (No Layout) */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes (With Layout) */}
          <Route path="/" element={<AppLayout />}>
            {/* Default redirect to login */}
            <Route index element={<Navigate to="/login" replace />} />
            
            {/* Customer Routes */}
            <Route path="customer/home" element={<CustomerHome />} />
            <Route path="customer/service-request" element={<ServiceRequest />} />
            <Route path="customer/claims" element={<Claims />} />
            <Route path="customer/payments" element={<Payments />} />
            <Route path="customer/reports" element={<Reports />} />
            <Route path="customer/profile" element={<CustomerProfile />} />
            <Route path="customer/support" element={<CustomerSupport />} />
            
            {/* Provider Routes */}
            <Route path="provider/dashboard" element={<ProviderDashboard />} />
            <Route path="provider/jobs" element={<Jobs />} />
            <Route path="provider/calendar" element={<ProviderCalendar />} />
            <Route path="provider/payments" element={<ProviderPayments />} />
            <Route path="provider/profile" element={<ProviderProfile />} />
            <Route path="provider/support" element={<ProviderSupport />} />
            
            {/* Admin Routes */}
            <Route path="admin/dashboard" element={<AdminDashboard />} />
            <Route path="admin/dispatch" element={<Dispatch />} />
            <Route path="admin/reporting" element={<AdminReporting />} />
            <Route path="admin/users" element={<UserManagement />} />
            
            {/* Insurance Routes */}
            <Route path="insurance/dashboard" element={<Navigate to="/insurance/claims" replace />} />
            <Route path="insurance/claims" element={<InsuranceClaims />} />
            <Route path="insurance/analytics" element={<InsuranceAnalytics />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
