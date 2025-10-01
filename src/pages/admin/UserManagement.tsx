import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Search, Edit, Block, CheckCircle } from '@mui/icons-material';

function UserManagement() {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const customers = [
    { id: 'C001', name: 'John Smith', email: 'john@example.com', status: 'active', subscription: 'Premium' },
    { id: 'C002', name: 'Sarah Johnson', email: 'sarah@example.com', status: 'active', subscription: 'Basic' },
    { id: 'C003', name: 'Mike Davis', email: 'mike@example.com', status: 'inactive', subscription: 'Premium' },
  ];

  const providers = [
    { id: 'P001', name: 'Mike Johnson', email: 'mike.j@example.com', status: 'active', rating: 4.8, jobs: 245 },
    { id: 'P002', name: 'David Brown', email: 'david.b@example.com', status: 'active', rating: 4.6, jobs: 189 },
    { id: 'P003', name: 'Emily Wilson', email: 'emily.w@example.com', status: 'pending', rating: 0, jobs: 0 },
  ];

  const insurers = [
    { id: 'I001', name: 'ABC Insurance', email: 'contact@abc.com', status: 'active', policies: 450 },
    { id: 'I002', name: 'XYZ Insurance', email: 'info@xyz.com', status: 'active', policies: 320 },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        User Management
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Manage customers, service providers, and insurance partners
      </Typography>

      <Card>
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label={`Customers (${customers.length})`} />
          <Tab label={`Service Providers (${providers.length})`} />
          <Tab label={`Insurance Partners (${insurers.length})`} />
        </Tabs>

        <CardContent>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {tabValue === 0 && (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Customer ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Subscription</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id} hover>
                      <TableCell>
                        <Typography variant="body2" fontWeight="bold">
                          {customer.id}
                        </Typography>
                      </TableCell>
                      <TableCell>{customer.name}</TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>
                        <Chip label={customer.subscription} size="small" color="primary" />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={customer.status}
                          size="small"
                          color={customer.status === 'active' ? 'success' : 'default'}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <IconButton size="small">
                          <Edit />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <Block />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {tabValue === 1 && (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Provider ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Rating</TableCell>
                    <TableCell>Completed Jobs</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {providers.map((provider) => (
                    <TableRow key={provider.id} hover>
                      <TableCell>
                        <Typography variant="body2" fontWeight="bold">
                          {provider.id}
                        </Typography>
                      </TableCell>
                      <TableCell>{provider.name}</TableCell>
                      <TableCell>{provider.email}</TableCell>
                      <TableCell>{provider.rating > 0 ? provider.rating : 'N/A'}</TableCell>
                      <TableCell>{provider.jobs}</TableCell>
                      <TableCell>
                        <Chip
                          label={provider.status}
                          size="small"
                          color={
                            provider.status === 'active'
                              ? 'success'
                              : provider.status === 'pending'
                              ? 'warning'
                              : 'default'
                          }
                        />
                      </TableCell>
                      <TableCell align="center">
                        {provider.status === 'pending' && (
                          <IconButton size="small" color="success">
                            <CheckCircle />
                          </IconButton>
                        )}
                        <IconButton size="small">
                          <Edit />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <Block />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {tabValue === 2 && (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Insurer ID</TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Active Policies</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {insurers.map((insurer) => (
                    <TableRow key={insurer.id} hover>
                      <TableCell>
                        <Typography variant="body2" fontWeight="bold">
                          {insurer.id}
                        </Typography>
                      </TableCell>
                      <TableCell>{insurer.name}</TableCell>
                      <TableCell>{insurer.email}</TableCell>
                      <TableCell>{insurer.policies}</TableCell>
                      <TableCell>
                        <Chip label={insurer.status} size="small" color="success" />
                      </TableCell>
                      <TableCell align="center">
                        <IconButton size="small">
                          <Edit />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserManagement;
