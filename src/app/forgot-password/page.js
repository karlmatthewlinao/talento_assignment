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

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleForgotPassword = () => {
    console.log('Password reset requested for:', { email });
    // Implement password reset logic here
  };

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/background.jpg')` }}
    >
      {/* Taskbar (AppBar) */}
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

      {/* Forgot Password Form */}
      <div className="mt-16 w-full max-w-md p-6 bg-white/70 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Forgot Password</h1>
        <div className="mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleForgotPassword}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Reset Password
          </button>
        </div>
      </div>
    </main>
  );
}
