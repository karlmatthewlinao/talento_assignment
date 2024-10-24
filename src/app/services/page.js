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
import Link from 'next/link';  // Correct import for Next.js Link
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function Services() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100"
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
              onClick={handleSidebarToggle} // Toggle sidebar on button click
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

      {/* Hero Section */}
<header className="w-full text-center py-20 text-white mt-20 bg-white/50 rounded-lg shadow-lg backdrop-blur-sm">
  <h1 className="text-5xl font-bold mb-4">Explore Our Services</h1>
  <p className="text-lg mb-6">Discover the range of services we offer to make your events unforgettable.</p>
  <Button variant="contained" color="secondary">
    Get Started
  </Button>
</header>

{/* Search Section */}
<div className="container mx-auto mt-12 space-y-4 bg-white/50 rounded-lg shadow-lg p-6 backdrop-blur-sm">
  <div className="flex justify-center gap-4">
    <select
      value=""
      onChange={() => {}}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="" disabled>Select Event Type</option>
      <option value="option1">Birthday</option>
      <option value="option2">Blessing</option>
      <option value="option3">Wedding</option>
    </select>

    <select
      value=""
      onChange={() => {}}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="" disabled>Select Occasion</option>
      <option value="optionA">Anniversary</option>
      <option value="optionB">Funeral</option>
      <option value="optionC">Thanksgiving</option>
    </select>

    <select
      value=""
      onChange={() => {}}
      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="" disabled>Select Theme</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>

    <button
      onClick={() => {}}
      className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Search
    </button>
  </div>
</div>


      {/* Category Section */}
<section id="categories" className="container mx-auto mt-16 p-6">
  <h2 className="text-3xl font-bold text-white text-center mb-12">Category</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {[{
      name: 'Dancer',
      image: '/dancer.jpg',
      link: '/category/dancer'
    },
    {
      name: 'Musician',
      image: '/musician.jpg',
      link: '/category/musician'
    },
    {
      name:'Singers',
      image:'/singer.jpg',
      link:'/category/singers'

    },
    {
      name: 'Band',
      image: '/band.jpg',
      link: '/category/band'
    },
    {
      name: 'Entertainer',
      image: '/entertainer.jpg',
      link: '/category/entertainer'
    },
    {
      name: 'DJ',
      image: '/dj.jpg',
      link: '/category/dj'
    }].map((category, index) => (
      <Link key={index} href={category.link} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
        <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold text-black">{category.name}</h3> {/* Changed to text-black */}
        </div>
      </Link>
    ))}


        </div>
      </section>

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
