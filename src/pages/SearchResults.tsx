import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Paper,
  Alert,
} from '@mui/material';
import {
  Search,
  Description,
  Person,
  Payment,
  Build,
  Dashboard,
  Assignment,
  BarChart,
  Help,
  LocalShipping,
  People,
  HealthAndSafety,
} from '@mui/icons-material';
import { useUser } from '../context/UserContext';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  path: string;
  icon: JSX.Element;
  relevance: number;
}

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { role } = useUser();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<SearchResult[]>([]);

  // Define searchable content for each portal
  const searchableContent = {
    customer: [
      { title: 'Home Dashboard', description: 'View your dashboard, active services, and quick actions', category: 'Navigation', path: '/customer/home', icon: <Dashboard />, keywords: ['home', 'dashboard', 'overview', 'main'] },
      { title: 'Service Request', description: 'Request new services, plumbing, electrical, HVAC, and more', category: 'Services', path: '/customer/service-request', icon: <Build />, keywords: ['service', 'request', 'new', 'plumbing', 'electrical', 'hvac', 'repair', 'maintenance'] },
      { title: 'Claims', description: 'View and manage insurance claims', category: 'Insurance', path: '/customer/claims', icon: <Description />, keywords: ['claims', 'insurance', 'submit', 'track', 'status'] },
      { title: 'Payments', description: 'View payment history, invoices, and wallet balance', category: 'Billing', path: '/customer/payments', icon: <Payment />, keywords: ['payment', 'invoice', 'billing', 'wallet', 'balance', 'pay', 'transaction'] },
      { title: 'Reports', description: 'Access service reports and history', category: 'Reports', path: '/customer/reports', icon: <BarChart />, keywords: ['reports', 'history', 'analytics', 'statistics'] },
      { title: 'Profile', description: 'Manage your account settings and personal information', category: 'Account', path: '/customer/profile', icon: <Person />, keywords: ['profile', 'account', 'settings', 'personal', 'information', 'edit'] },
      { title: 'Support', description: 'Get help, contact support, and view FAQs', category: 'Help', path: '/customer/support', icon: <Help />, keywords: ['support', 'help', 'faq', 'contact', 'assistance', 'chat'] },
    ],
    provider: [
      { title: 'Dashboard', description: 'View your provider dashboard and statistics', category: 'Navigation', path: '/provider/dashboard', icon: <Dashboard />, keywords: ['dashboard', 'overview', 'stats', 'main'] },
      { title: 'Jobs', description: 'View and manage your service jobs', category: 'Work', path: '/provider/jobs', icon: <Assignment />, keywords: ['jobs', 'work', 'tasks', 'assignments', 'services', 'pending', 'active'] },
      { title: 'Calendar', description: 'Manage your schedule and appointments', category: 'Schedule', path: '/provider/calendar', icon: <Dashboard />, keywords: ['calendar', 'schedule', 'appointments', 'booking', 'availability'] },
      { title: 'Payments', description: 'View earnings and payment history', category: 'Earnings', path: '/provider/payments', icon: <Payment />, keywords: ['payments', 'earnings', 'income', 'wallet', 'payout'] },
      { title: 'Profile', description: 'Manage your provider profile and credentials', category: 'Account', path: '/provider/profile', icon: <Person />, keywords: ['profile', 'account', 'credentials', 'license', 'certification'] },
      { title: 'Support', description: 'Get provider support and resources', category: 'Help', path: '/provider/support', icon: <Help />, keywords: ['support', 'help', 'resources', 'contact'] },
    ],
    admin: [
      { title: 'Dashboard', description: 'Admin dashboard with system overview', category: 'Navigation', path: '/admin/dashboard', icon: <Dashboard />, keywords: ['dashboard', 'admin', 'overview', 'system'] },
      { title: 'Dispatch', description: 'Real-time job tracking and assignment', category: 'Operations', path: '/admin/dispatch', icon: <LocalShipping />, keywords: ['dispatch', 'tracking', 'assignment', 'jobs', 'map', 'real-time'] },
      { title: 'Reporting', description: 'System reports and analytics', category: 'Analytics', path: '/admin/reporting', icon: <BarChart />, keywords: ['reports', 'analytics', 'statistics', 'data', 'insights'] },
      { title: 'User Management', description: 'Manage users, providers, and customers', category: 'Users', path: '/admin/users', icon: <People />, keywords: ['users', 'management', 'providers', 'customers', 'accounts'] },
      { title: 'Profile', description: 'Admin account settings', category: 'Account', path: '/admin/profile', icon: <Person />, keywords: ['profile', 'account', 'settings', 'admin'] },
    ],
    insurance: [
      { title: 'Claims', description: 'Review and process insurance claims', category: 'Claims', path: '/insurance/claims', icon: <Description />, keywords: ['claims', 'review', 'process', 'approve', 'reject', 'pending'] },
      { title: 'Analytics', description: 'Claims analytics and insights', category: 'Analytics', path: '/insurance/analytics', icon: <BarChart />, keywords: ['analytics', 'insights', 'statistics', 'data', 'trends'] },
      { title: 'Support', description: 'Insurance support center', category: 'Help', path: '/insurance/support', icon: <Help />, keywords: ['support', 'help', 'contact', 'faq'] },
      { title: 'Profile', description: 'Insurance company profile', category: 'Account', path: '/insurance/profile', icon: <HealthAndSafety />, keywords: ['profile', 'company', 'account', 'settings'] },
    ],
  };

  // Perform search
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    const roleContent = searchableContent[role] || [];

    const searchResults = roleContent
      .map(item => {
        let relevance = 0;
        const searchableText = `${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase();

        // Calculate relevance score
        searchTerms.forEach(term => {
          if (item.title.toLowerCase().includes(term)) {
            relevance += 10; // Title match is most important
          }
          if (item.keywords.some(keyword => keyword.includes(term))) {
            relevance += 5; // Keyword match
          }
          if (item.description.toLowerCase().includes(term)) {
            relevance += 3; // Description match
          }
          if (searchableText.includes(term)) {
            relevance += 1; // General match
          }
        });

        return {
          ...item,
          id: item.path,
          relevance,
        };
      })
      .filter(item => item.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance);

    setResults(searchResults);
  }, [query, role]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  const handleResultClick = (path: string) => {
    navigate(path);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Search Results
      </Typography>

      {/* Search Bar */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <form onSubmit={handleSearch}>
          <TextField
            fullWidth
            placeholder="Search for services, features, or help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            autoFocus
          />
        </form>
      </Paper>

      {/* Results Summary */}
      {query && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" color="text.secondary">
            {results.length > 0 ? (
              <>
                Found <strong>{results.length}</strong> result{results.length !== 1 ? 's' : ''} for "<strong>{query}</strong>"
              </>
            ) : (
              <>No results found for "<strong>{query}</strong>"</>
            )}
          </Typography>
        </Box>
      )}

      {/* No Results Message */}
      {query && results.length === 0 && (
        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body1" gutterBottom>
            <strong>No results found.</strong> Try different keywords or check your spelling.
          </Typography>
          <Typography variant="body2">
            Suggestions:
          </Typography>
          <Typography variant="body2" component="div" sx={{ pl: 2 }}>
            • Use simpler or more general terms<br />
            • Check for typos<br />
            • Try searching for features like "payment", "service", "profile", etc.
          </Typography>
        </Alert>
      )}

      {/* Search Results */}
      {results.length > 0 && (
        <Grid container spacing={3}>
          {results.map((result) => (
            <Grid item xs={12} key={result.id}>
              <Card
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': {
                    boxShadow: 4,
                    transform: 'translateY(-2px)',
                  },
                }}
                onClick={() => handleResultClick(result.path)}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 1,
                        bgcolor: 'primary.light',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {result.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <Typography variant="h6" fontWeight="bold">
                          {result.title}
                        </Typography>
                        <Chip label={result.category} size="small" />
                      </Box>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {result.description}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        {result.path}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Popular Searches */}
      {!query && (
        <Box>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Popular Searches
          </Typography>
          <Grid container spacing={2}>
            {['payment', 'service', 'profile', 'support', 'dashboard', 'claims'].map((term) => (
              <Grid item key={term}>
                <Chip
                  label={term}
                  onClick={() => {
                    setSearchQuery(term);
                    setSearchParams({ q: term });
                  }}
                  sx={{ cursor: 'pointer' }}
                />
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom fontWeight="bold">
            Quick Links
          </Typography>
          <List>
            {(searchableContent[role] || []).slice(0, 5).map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton onClick={() => navigate(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}

export default SearchResults;
