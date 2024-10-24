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
import Link from '@mui/material/Link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export default function PostDetails() {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [types, setTypes] = useState({ singer: false, dancer: false, musician: false, band: false, dj: false });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleTypeChange = (event) => setTypes({ ...types, [event.target.name]: event.target.checked });
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="relative min-h-screen bg-gray-100" style={{
      backgroundImage: "url('/background.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
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
              <Link href="/" color="inherit" underline="none">Home</Link>
              <Link href="/services" color="inherit" underline="none">Services</Link>
              <Link href="/contact" color="inherit" underline="none">Contact</Link>
              <Button href="/login" variant="outlined" color="inherit">Log In</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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

      {/* Main Content */}
      <main className="relative min-h-screen pt-16">
        <Container
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            marginTop: '2rem',
            maxWidth: '600px',
          }}
        >
          <Typography variant="h5" component="div" gutterBottom>
            Post Details
          </Typography>
          <Box component="form" noValidate autoComplete="off" className="flex flex-col gap-4">
            <TextField
              label="Event Name"
              variant="outlined"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              fullWidth
            />
            <Box className="flex gap-4">
              <div className="flex flex-col w-1/2 gap-2">
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-2">
                <label className="block text-sm font-medium text-gray-700">Start Time</label>
                <input
                  type="time"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </Box>
            <Box className="flex gap-4">
              <div className="flex flex-col w-1/2 gap-2">
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-2">
                <label className="block text-sm font-medium text-gray-700">End Time</label>
                <input
                  type="time"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </Box>
            <TextField
              label="Description"
              multiline
              rows={4}
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
            />
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={handleCategoryChange}
                label="Category"
              >
                <MenuItem value="singer">Singer</MenuItem>
                <MenuItem value="dancer">Dancer</MenuItem>
                <MenuItem value="musician">Musician</MenuItem>
                <MenuItem value="band">Band</MenuItem>
                <MenuItem value="dj">DJ</MenuItem>
              </Select>
            </FormControl>
            {category && (
              <FormGroup>
                {category === 'singer' && (
                  <>
                    <FormControlLabel control={<Checkbox name="singer" checked={types.singer} onChange={handleTypeChange} />} label="Singer Type 1" />
                    <FormControlLabel control={<Checkbox name="singer" checked={types.singer} onChange={handleTypeChange} />} label="Singer Type 2" />
                  </>
                )}
                {category === 'dancer' && (
                  <>
                    <FormControlLabel control={<Checkbox name="dancer" checked={types.dancer} onChange={handleTypeChange} />} label="Dancer Type 1" />
                    <FormControlLabel control={<Checkbox name="dancer" checked={types.dancer} onChange={handleTypeChange} />} label="Dancer Type 2" />
                  </>
                )}
                
              </FormGroup>
            )}
            <Button variant="contained" color="primary">Submit</Button>
          </Box>
        </Container>
      </main>
    </div>
  );
}
