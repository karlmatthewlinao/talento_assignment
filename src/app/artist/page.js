'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // useRouter for programmatic navigation
import Link from 'next/link'; // Use Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';

function ArtistPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter(); // Use router for navigation

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const artists = [
    {
      name: 'Ian Lyle Casul',
      description: 'Talented singer, performer, and dancer.',
      rating: 4.5,
      profileImage: '/profile1.jpg',
    },
    {
      name: 'Kuriso Jusoten Oporuto',
      description: 'Musician and instrumentalist.',
      rating: 4.8,
      profileImage: '/profile2.jpg',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
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
                <Button variant="outlined" color="inherit">
                  Log In
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform transition-transform ${
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

      
      <div className="container mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
        <Typography variant="h4" className="mb-4">
          Recommended Artists
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 shadow-md rounded-lg flex items-center"
            >
              <Avatar src={artist.profileImage} sx={{ width: 60, height: 60 }} />
              <div className="ml-4">
                <Typography variant="h6" style={{ color: 'black' }}>
                  {artist.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {artist.description}
                </Typography>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((star, i) => (
                    <StarIcon
                      key={i}
                      color={i < artist.rating ? 'primary' : 'disabled'}
                    />
                  ))}
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className="mt-2"
                  onClick={() => router.push(`/artist/${artist.name}`)}
                >
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ArtistPage;
