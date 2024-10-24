"use client"; // Add this line at the top of your file

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
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function Home() {
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [theme, setTheme] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [postText, setPostText] = useState('');

  const userProfile = {
    name: "User Name",
    description: "This is a user profile description.",
    profilePicture: "/path/to/profile.jpg", 
  };

  const [posts, setPosts] = useState([
    { id: 1, user: "Kris Justin Oporuto", content: "Excited to perform at the upcoming event!", likes: 12, retweets: 5, comments: 3 },
    { id: 2, user: "Kobe Bryant Cutamore", content: "Looking for dancers for a new project!", likes: 8, retweets: 2, comments: 1 },
    { id: 3, user: "Ninyo taas og Garbo", content: "Just finished a great rehearsal!", likes: 10, retweets: 4, comments: 2 },
    { id: 4, user: "Mike Vincent Tyson", content: "Anyone need a singer for their event? DM me!", likes: 15, retweets: 6, comments: 5 },
  ]);

  const handleDropdown1Change = (e) => setDropdown1(e.target.value);
  const handleDropdown2Change = (e) => setDropdown2(e.target.value);
  const handleThemeChange = (e) => setTheme(e.target.value);
  const handlePostTextChange = (e) => setPostText(e.target.value);

  const handleSearch = () => {
    console.log('Searching with:', { dropdown1, dropdown2, theme });
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleCreatePost = () => {
    if (postText.trim()) {
      setPosts([{ id: Date.now(), user: userProfile.name, content: postText, likes: 0, retweets: 0, comments: 0 }, ...posts]);
      setPostText(''); 
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1)); 
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

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
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar} sx={{ mr: 2 }}>
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

      {/* Main Content */}
      <div
        className="flex flex-col items-center justify-center mt-16 z-20"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Talento</h1>
          <p className="mt-4 text-lg text-gray-600">Explore our features and learn more about our services.</p>
        </div>

        {/* Book Talent for Your Event */}
        <div className="w-full">
          <Typography variant="h5" className="text-gray-800 mb-4 text-center">
            Book Talent for Your Event
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <FormControl fullWidth sx={{ maxWidth: 300 }}>
              <InputLabel>Select Event</InputLabel>
              <Select value={dropdown1} onChange={handleDropdown1Change}>
                <MenuItem value={1}>Event 1</MenuItem>
                <MenuItem value={2}>Event 2</MenuItem>
                <MenuItem value={3}>Event 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ maxWidth: 300 }}>
              <InputLabel>Select Theme</InputLabel>
              <Select value={dropdown2} onChange={handleDropdown2Change}>
                <MenuItem value="theme1">Theme 1</MenuItem>
                <MenuItem value="theme2">Theme 2</MenuItem>
                <MenuItem value="theme3">Theme 3</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" onClick={handleSearch}>
              Search
            </Button>
          </Box>
        </div>

        {/* User Profile Section */}
        <Box
          className="flex flex-col items-center justify-center mt-12 p-6"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            padding: '2rem',
            borderRadius: '1rem',
            width: '100%',
            maxWidth: '800px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h5" className="text-gray-800 mb-4">
            Post Something
          </Typography>
          <TextField
            label="What’s on your mind?"
            fullWidth
            multiline
            rows={4}
            value={postText}
            onChange={handlePostTextChange}
          />
          <Button variant="contained" className="mt-4" onClick={handleCreatePost}>
            Post
          </Button>
        </Box>

        {/* Posts Feed */}
        <div className="w-full mt-12">
          {posts.map((post) => (
            <Box
              key={post.id}
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1rem',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant="body1" className="text-gray-800 font-semibold">
                {post.user}
              </Typography>
              <Typography variant="body2" className="text-gray-600 mt-1 mb-3">
                {post.content}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton>
                  <FavoriteBorderIcon />
                  <Typography>{post.likes}</Typography>
                </IconButton>
                <IconButton>
                  <RepeatIcon />
                  <Typography>{post.retweets}</Typography>
                </IconButton>
                <IconButton>
                  <ChatBubbleOutlineIcon />
                  <Typography>{post.comments}</Typography>
                </IconButton>
              </Box>
            </Box>
          ))}
        </div>
      </div>
    </main>
  );
}
