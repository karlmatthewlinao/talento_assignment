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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';

// Custom TabPanel component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default function PortfolioPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [value, setValue] = useState(0);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

      {/* Portfolio/Profile Section */}
      <div className="container mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
        {/* Profile Cover Photo */}
        <div
          style={{
            backgroundImage: "url('/background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px',
            borderRadius: '8px 8px 0 0',
          }}
        />

        {/* Profile Info */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Avatar
              alt="Profile Picture"
              src="profile.jpg"
              sx={{ width: 80, height: 80 }}
            />
            <div>
              <Typography variant="h5" sx={{ color: 'black' }}>
                Ian Lyle Casul
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Talented singer, performer, and dancer
              </Typography>
            </div>
          </div>
          <Button variant="contained" color="primary" startIcon={<ChatIcon />}>
            Message
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Overview" />
          <Tab label="Reviews" />
          <Tab label="Photos & Videos" />
        </Tabs>

        {/* Tab Panels */}
        <TabPanel value={value} index={0}>
          <Typography variant="body1" paragraph>
            This is the overview section. It provides details about the artist's background, skills, and more.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="body1" paragraph>
            This is the review section. Here, users can read reviews about the artist's performances.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="body1" paragraph>
            This is the photos and videos section. Users can view the artist's media gallery.
          </Typography>
        </TabPanel>
      </div>
    </main>
  );
}
