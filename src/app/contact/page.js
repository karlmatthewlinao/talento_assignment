'use client';

import { useState, useEffect } from 'react'; 
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


export default function AboutUs() {
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [theme, setTheme] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  const handleDropdown1Change = (e) => setDropdown1(e.target.value);
  const handleDropdown2Change = (e) => setDropdown2(e.target.value);
  const handleThemeChange = (e) => setTheme(e.target.value);

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen); 

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
      {/* Sidebar */}
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

     {/* Main Content */}
<div className="relative z-10 flex flex-col items-center justify-center text-center mt-24 bg-white/70 p-6 rounded-lg">
  <h1 className="text-4xl font-bold text-gray-800">About Us</h1>

  <p className="mt-4 text-lg text-gray-600">
    At Talento, we connect you with outstanding talent for every occasion. Whether it's a wedding, birthday, corporate event, or special gathering, our platform offers a seamless booking experience for top performers, speakers, and entertainers. Our mission is to make your events unforgettable with our diverse range of talents, all accessible at your fingertips. Discover how Talento can transform your next event into an extraordinary experience!
  </p>
  <br />

  <p className="text-white">
    Contact us through Mobile: <span className="font-bold">09123456789</span> or via Social Media Platforms:
    <br />
    <a href="https://instagram.com/talento_it" className="text-red-400">Instagram: @talento_it</a>
    <br />
    <a href="https://facebook.com/talentoservices" className="text-blue-400">Facebook: Talento Services</a>
    <br />
    <a href="https://x.com/talento_x" className="text-green-400">X: @talento_x</a>
  </p>
</div>

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

    </main>
  );
}
