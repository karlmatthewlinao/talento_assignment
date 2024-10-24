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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BookEventPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    eventName: '',
    eventTheme: '',
    startDate: '',
    startTime: '',
    endTime: '',
    location: '',
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
    console.log('Booking data:', formData);
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
  className={`fixed top-0 left-0 h-full w-64 text-black transform transition-transform ${
    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
  style={{ backgroundColor: 'white' }} 
>
  <div className="p-4">
    <h3 className="text-xl font-bold text-center mb-6 text-black">TALENTO</h3> {/* Text color to black */}
    <ul className="space-y-2">
      <li>
        <Link href="/" className="flex items-center p-3 hover:bg-gray-200 rounded text-black">
          <DashboardIcon className="mr-3" sx={{ color: 'black' }} /> {/* Icon color to black */}
          Dashboard
        </Link>
      </li>
      <li>
        <Link href="/portfolio" className="flex items-center p-3 hover:bg-gray-200 rounded text-black">
          <WorkIcon className="mr-3" sx={{ color: 'black' }} />
          Portfolio
        </Link>
      </li>
      <li>
        <Link href="/messages" className="flex items-center p-3 hover:bg-gray-200 rounded text-black">
          <ChatIcon className="mr-3" sx={{ color: 'black' }} />
          Messages
        </Link>
      </li>
      <li>
        <Link href="/booking" className="flex items-center p-3 hover:bg-gray-200 rounded text-black">
          <EventNoteIcon className="mr-3" sx={{ color: 'black' }} />
          Booking
        </Link>
      </li>
      <li>
        <Link href="/logout" className="flex items-center p-3 hover:bg-gray-200 rounded text-black">
          <PowerSettingsNewIcon className="mr-3" sx={{ color: 'black' }} />
          Log Out
        </Link>
      </li>
    </ul>
  </div>
</div>


      {/* Book Event Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="mt-24 p-6 w-full max-w-2xl bg-white rounded-lg shadow-lg"
      >
        <IconButton className="mb-6" onClick={() => window.history.back()}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h5" component="div" className="text-gray-800 mb-4">
          Book an Event
        </Typography>

        {/* Event Details */}
        <Typography variant="h6" component="div" className="text-gray-600 mb-2">
          Event Details
        </Typography>
        <TextField
          fullWidth
          name="eventName"
          label="Event Name"
          variant="outlined"
          value={formData.eventName}
          onChange={handleInputChange}
          className="mb-4"
          required
        />
        <FormControl fullWidth className="mb-4">
          <InputLabel>Event Theme</InputLabel>
          <Select
            name="eventTheme"
            value={formData.eventTheme}
            onChange={handleInputChange}
            required
          >
            <MenuItem value="Wedding">Wedding</MenuItem>
            <MenuItem value="Concert">Concert</MenuItem>
            <MenuItem value="Festival">Festival</MenuItem>
          </Select>
        </FormControl>

        {/* Date & Time */}
        <Typography variant="h6" component="div" className="text-gray-600 mb-2">
          Date & Time
        </Typography>
        <Box className="flex gap-4 mb-4">
          <TextField
            fullWidth
            name="startDate"
            label="Start Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.startDate}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            name="startTime"
            label="Start Time"
            type="time"
            InputLabelProps={{ shrink: true }}
            value={formData.startTime}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            name="endTime"
            label="End Time"
            type="time"
            InputLabelProps={{ shrink: true }}
            value={formData.endTime}
            onChange={handleInputChange}
            required
          />
        </Box>

        {/* Location */}
        <Typography variant="h6" component="div" className="text-gray-600 mb-2">
          Location
        </Typography>
        <FormControl fullWidth className="mb-4">
          <InputLabel>Where will your event take place?</InputLabel>
          <Select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          >
            <MenuItem value="Indoor">Indoor</MenuItem>
            <MenuItem value="Outdoor">Outdoor</MenuItem>
            <MenuItem value="Virtual">Virtual</MenuItem>
          </Select>
        </FormControl>

        {/* Additional Information */}
        <Typography variant="h6" component="div" className="text-gray-600 mb-2">
          Additional Information
        </Typography>
        <TextField
          fullWidth
          name="description"
          label="Event Description"
          variant="outlined"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleInputChange}
        />

        {/* Submit Button */}
        <Box className="mt-6 text-center">
          <Button variant="contained" color="primary" type="submit">
            Continue
          </Button>
        </Box>
      </Box>
    </main>
  );
}
