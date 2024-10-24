'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function EditProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    ratePerHour: '',
    talentCategory: '',
    typeOfTalent: '',
    gcashNumber: '',
    payMayaNumber: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navbar */}
      <AppBar position="fixed" color="default" elevation={1}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleSidebar}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Talento
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="/" color="inherit" underline="none">
                Home
              </Link>
              <Link href="/services" color="inherit" underline="none">
                Services
              </Link>
              <Link href="/contact" color="inherit" underline="none">
                Contact
              </Link>
              <Button href="/login" variant="outlined" color="inherit">
                Log In
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <h3 className="text-xl font-bold text-center mb-6">TALENTO</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="flex items-center p-3 hover:bg-gray-700 rounded">
                <DashboardIcon className="mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="flex items-center p-3 hover:bg-gray-700 rounded">
                <WorkIcon className="mr-3" />
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/messages" className="flex items-center p-3 hover:bg-gray-700 rounded">
                <ChatIcon className="mr-3" />
                Messages
              </Link>
            </li>
            <li>
              <Link href="/booking" className="flex items-center p-3 hover:bg-gray-700 rounded">
                <EventNoteIcon className="mr-3" />
                Booking
              </Link>
            </li>
            <li>
              <Link href="/logout" className="flex items-center p-3 hover:bg-gray-700 rounded">
                <PowerSettingsNewIcon className="mr-3" />
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Edit Profile Section */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="mt-24 p-6 w-full max-w-xl bg-white rounded-lg shadow-lg"
      >
        <Typography variant="h5" component="div" className="text-gray-800 mb-4 text-center">
          Edit Profile
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            name="firstName"
            label="First Name"
            variant="outlined"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Box>

        <TextField
          fullWidth
          name="email"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-4"
        />

        <TextField
          fullWidth
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={formData.password}
          onChange={handleInputChange}
          className="mt-4"
        />

        <TextField
          fullWidth
          name="address"
          label="Address"
          variant="outlined"
          value={formData.address}
          onChange={handleInputChange}
          className="mt-4"
        />

        <TextField
          fullWidth
          name="ratePerHour"
          label="Rate per hour"
          variant="outlined"
          value={formData.ratePerHour}
          onChange={handleInputChange}
          className="mt-4"
        />

        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <FormControl fullWidth>
            <InputLabel>Talent Category</InputLabel>
            <Select
              name="talentCategory"
              value={formData.talentCategory}
              onChange={handleInputChange}
            >
              <MenuItem value="Singer">Singer</MenuItem>
              <MenuItem value="Dancer">Dancer</MenuItem>
              <MenuItem value="Musician">Musician</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            name="typeOfTalent"
            label="Type of Talent"
            variant="outlined"
            value={formData.typeOfTalent}
            onChange={handleInputChange}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <TextField
            fullWidth
            name="gcashNumber"
            label="GCash Number"
            variant="outlined"
            value={formData.gcashNumber}
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            name="payMayaNumber"
            label="PayMaya Number"
            variant="outlined"
            value={formData.payMayaNumber}
            onChange={handleInputChange}
          />
        </Box>

        <TextField
          fullWidth
          name="description"
          label="Description"
          variant="outlined"
          multiline
          rows={3}
          value={formData.description}
          onChange={handleInputChange}
          className="mt-4"
        />

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" type="submit">
            Save Changes
          </Button>
          <Button variant="outlined" color="default">
            Cancel
          </Button>
        </Box>
      </Box>
    </main>
  );
}
