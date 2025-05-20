import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMsg, setLoginMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Announcement state
  const [announcement, setAnnouncement] = useState(null);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [createdBy, setCreatedBy] = useState('Admin');

  // Fetch announcement on component mount
  useEffect(() => {
    if (isLoggedIn) {
      fetchAnnouncement();
    }
  }, [isLoggedIn]);

  const fetchAnnouncement = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('http://localhost:8080/announcement/');
      if (res.data && Object.keys(res.data).length !== 0) {
        setAnnouncement(res.data);
        setTitle(res.data.title);
        setMessage(res.data.message);
        setCreatedBy(res.data.createdBy || 'Admin');
      } else {
        setAnnouncement(null);
        setTitle('');
        setMessage('');
      }
    } catch (error) {
      alert('Failed to load announcement');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async e => {
    e.preventDefault();
    setLoginMsg('');
    setIsLoading(true);
    try {
      const res = await axios.post('http://localhost:8080/user/login/register', {
        email,
        password,
      });
      if (res.status === 200) {
        setIsLoggedIn(true);
        setLoginMsg('Login successful');
      }
    } catch (err) {
      setLoginMsg(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreate = async e => {
    e.preventDefault();
    if (!title || !message) {
      alert('Title and message are required');
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.post('http://localhost:8080/announcement/create', {
        title,
        message,
        createdBy,
      });
      setAnnouncement(res.data.announcement);
      alert('Announcement created successfully');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to create announcement');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async e => {
    e.preventDefault();
    if (!title || !message) {
      alert('Title and message are required');
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.put('http://localhost:8080/announcement/update', {
        title,
        message,
        createdBy,
      });
      setAnnouncement(res.data.announcement);
      alert('Announcement updated successfully');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update announcement');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete the announcement?')) return;
    setIsLoading(true);
    try {
      await axios.delete('http://localhost:8080/announcement/delete');
      setAnnouncement(null);
      setTitle('');
      setMessage('');
      alert('Announcement deleted successfully');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete announcement');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen  flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0C0950] backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">Login</h2>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white/80 mb-2">Email</label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-white/80 mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </motion.button>
            
            {loginMsg && (
              <motion.p 
                className={`mt-4 text-center ${loginMsg.includes('success') ? 'text-green-400' : 'text-red-400'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {loginMsg}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C0950] to-[#2A2368] p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Announcement Dashboard</h1>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="text-white/80 hover:text-white flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            Logout
          </button>
        </header>

        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 p-6">
          {announcement ? (
            <>
              <form onSubmit={handleUpdate} className="space-y-6 mb-8">
                <div>
                  <label className="block text-white/80 mb-2">Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-3 rounded-lg font-medium shadow hover:shadow-md transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Updating...' : 'Update Announcement'}
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={handleDelete}
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-500 text-white py-3 rounded-lg font-medium shadow hover:shadow-md transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Deleting...' : 'Delete Announcement'}
                  </motion.button>
                </div>
              </form>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">{announcement.title}</h3>
                <p className="text-white/90 mb-4 whitespace-pre-line">{announcement.message}</p>
                <p className="text-sm text-white/60">Created by: {announcement.createdBy || 'Admin'}</p>
              </div>
            </>
          ) : (
            <>
              <form onSubmit={handleCreate} className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Enter announcement title"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Enter announcement message"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-teal-500 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating...' : 'Create Announcement'}
                </motion.button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-white/70 italic">No announcement created yet</p>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}