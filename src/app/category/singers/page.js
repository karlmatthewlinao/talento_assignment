'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

// Import icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function SingersPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);

  const singers = [
    { name: 'Pop Singer', image: '/singer.jpg', link: '/category/singer/pop-singer' },
    { name: 'Rock Singer', image: '/singer.jpg', link: '/category/singer/rock-singer' },
    { name: 'Jazz Singer', image: '/singer.jpg', link: '/category/singer/jazz-singer' },
    { name: 'Classical Singer', image: '/singer.jpg', link: '/category/singer/classical-singer' },
    { name: 'R&B Singer', image: '/singer.jpg', link: '/category/singer/rnb-singer' },
  ];

  return (
    <div
      className="min-h-screen"
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
              sx={{ mr: 2 }}
              onClick={handleSidebarToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Talento
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="/" passHref>
                <Button color="inherit">Home</Button>
              </Link>
              <Link href="/services" passHref>
                <Button color="inherit">Services</Button>
              </Link>
              <Link href="/contact" passHref>
                <Button color="inherit">Contact</Button>
              </Link>
              <Link href="/login" passHref>
                <Button variant="outlined" color="inherit">Log In</Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 mt-16">
        <h2 className="text-3xl font-bold text-white mb-8">Singers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {singers.map((singer, index) => (
            <Link key={index} href={singer.link} passHref>
              <div className="text-center cursor-pointer transform hover:scale-105 transition-transform">
                <img
                  src={singer.image}
                  alt={singer.name}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-white">{singer.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 text-black transform transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: 'white' }} // Sidebar with white background
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
  );
}
