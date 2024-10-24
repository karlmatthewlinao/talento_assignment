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
import Avatar from '@mui/material/Avatar';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
import Link from 'next/link';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function DwightHowardProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);

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
              onClick={handleSidebarToggle}
              sx={{ mr: 2 }}
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

      {/* Jimi Hendrix Profile Section */}
      <div className="container mx-auto px-4 py-12 mt-16">
        <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <Avatar
            alt="Jimi Hendrix"
            src="/dwight.jpg" 
            className="w-32 h-32 mb-4"
          />
          <h1 className="text-3xl font-bold">Dwight Howard</h1>
          <p className="text-gray-300 mb-4">Basketball Superstar, Ballet-Dancer</p>

          {/* Media Section: Videos and Sample Music */}
          <div className="w-full mt-6">
            <h2 className="text-2xl font-bold mb-4">Featured Talents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sample Music */}
              <div className="bg-white text-black p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Sample Music</h3>
                <MusicNoteIcon className="text-purple-500" fontSize="large" />
                <audio controls className="mt-4 w-full">
                  <source src="/music/sample.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              {/* Sample Video */}
              <div className="bg-white text-black p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Live Performance Video</h3>
                <VideoLibraryIcon className="text-purple-500" fontSize="large" />
                <video controls className="mt-4 w-full">
                  <source src="/videos/sample.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
