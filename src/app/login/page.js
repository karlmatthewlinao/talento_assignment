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

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
    
  };

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/background.jpg')` }}
    >
      

      {/* Navbar */}
      <AppBar position="fixed" color="default" elevation={1}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleSidebarToggle}
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

      {/* Login Form */}
      <div className="mt-16 w-full max-w-md p-6 bg-white/70 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Log In</h1>
        <div className="mt-8">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Log In
          </button>
          <div className="text-center mt-4">
            <Link href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center mt-4">
            <Link href="/signup" className="text-blue-600 hover:underline">
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div
  className={`fixed top-0 left-0 h-full w-64 text-black transform transition-transform ${
    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
  style={{ backgroundColor: 'white' }} 
>
  <div className="p-4">
    <h3 className="text-xl font-bold text-center mb-6 text-black">TALENTO</h3> 
    <ul className="space-y-2">
      <li>
        <Link href="/" className="flex items-center p-3 hover:bg-gray-200 rounded text-black">
          <DashboardIcon className="mr-3" sx={{ color: 'black' }} /> 
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

      </div>
    </main>
  );
}
