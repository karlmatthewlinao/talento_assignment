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
import Avatar from '@mui/material/Avatar'; 
import SendIcon from '@mui/icons-material/Send'; 
import DeleteIcon from '@mui/icons-material/Delete';
import VolumeOffIcon from '@mui/icons-material/VolumeOff'; 
import VolumeUpIcon from '@mui/icons-material/VolumeUp'; 
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; 



export default function MessagesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chats, setChats] = useState([
    { id: 1, name: 'John Doe', message: 'Hello!', hidden: false, muted: false },
    { id: 2, name: 'Jane Smith', message: 'How are you?', hidden: false, muted: false },
  ]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [showHiddenChats, setShowHiddenChats] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleCreateChat = () => {
    const newChat = {
      id: chats.length + 1,
      name: `New Chat ${chats.length + 1}`,
      message: '',
      hidden: false,
      muted: false,
    };
    setChats([...chats, newChat]);
    setCurrentChat(newChat);
  };

  const handleSendMessage = () => {
    if (newMessage && currentChat) {
      const updatedChats = chats.map(chat =>
        chat.id === currentChat.id
          ? { ...chat, message: newMessage }
          : chat
      );
      setChats(updatedChats);
      setNewMessage('');
    }
  };

  const handleDeleteChat = (id) => {
    setChats(chats.filter(chat => chat.id !== id));
    if (currentChat?.id === id) setCurrentChat(null);
  };

  const handleHideChat = (id) => {
    const updatedChats = chats.map(chat =>
      chat.id === id ? { ...chat, hidden: !chat.hidden } : chat
    );
    setChats(updatedChats);
  };

  const handleMuteChat = (id) => {
    const updatedChats = chats.map(chat =>
      chat.id === id ? { ...chat, muted: !chat.muted } : chat
    );
    setChats(updatedChats);
  };

  return (
    <main className="flex min-h-screen">
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
      <div className="container mx-auto mt-20 flex p-6">
        {/* Recent Chats */}
        <div className="w-1/3 bg-white shadow-md rounded-lg p-4 mr-4">
          <Typography variant="h6" gutterBottom>
            Recent Chats
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCreateChat}
            sx={{ mb: 2 }}
          >
            Create Chat
          </Button>
          <Button
            variant="text"
            onClick={() => setShowHiddenChats(!showHiddenChats)}
          >
            {showHiddenChats ? 'Hide Hidden Chats' : 'Show Hidden Chats'}
          </Button>
          <ul className="space-y-4 mt-2">
            {chats
              .filter(chat => (showHiddenChats ? true : !chat.hidden))
              .map(chat => (
                <li
                  key={chat.id}
                  onClick={() => setCurrentChat(chat)}
                  className={`p-3 rounded cursor-pointer ${
                    currentChat?.id === chat.id ? 'bg-gray-200' : 'bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <Avatar alt={chat.name} sx={{ width: 32, height: 32 }} />
                      <Typography
                        variant="subtitle1"
                        sx={{ display: 'inline', ml: 2 }}
                      >
                        {chat.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ ml: 2 }}
                      >
                        {chat.message}
                      </Typography>
                      {chat.muted && (
                        <VolumeOffIcon sx={{ fontSize: 16, ml: 1 }} />
                      )}
                    </div>
                    <div className="space-x-2">
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => handleDeleteChat(chat.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        color="default"
                        size="small"
                        onClick={() => handleHideChat(chat.id)}
                      >
                        <VisibilityOffIcon />
                      </IconButton>
                      <IconButton
                        color={chat.muted ? 'primary' : 'default'}
                        size="small"
                        onClick={() => handleMuteChat(chat.id)}
                      >
                        {chat.muted ? <VolumeUpIcon /> : <VolumeOffIcon />}
                      </IconButton>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Chat Box */}
        <div className="w-2/3 bg-white shadow-md rounded-lg p-4">
          {currentChat ? (
            <>
              <Typography variant="h6" gutterBottom>
                {currentChat.name}
              </Typography>
              <div className="h-80 p-4 bg-gray-50 rounded-lg mb-4 overflow-auto">
                <Typography variant="body1">{currentChat.message}</Typography>
              </div>
              <div className="flex space-x-2">
                <TextField
                  fullWidth
                  label="Type your message"
                  variant="outlined"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  onClick={handleSendMessage}
                >
                  Send
                </Button>
              </div>
            </>
          ) : (
            <Typography variant="h6" gutterBottom>
              Select a chat or create a new one
            </Typography>
          )}
        </div>
      </div>
    </main>
  );
}
