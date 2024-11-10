// src/App.js
import React from 'react';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Music from './pages/music.js';
import ArtistPage from './component/ArtistPage.js';
import TrendPage from './pages/trend.js';
import PodcastPage from './pages/podcast.js';
import RightSidebar from './component/RightSidebar.js';
import { PlayerProvider } from './context/playercontext.js';
import LibraryPage from './pages/library.js';

function App() {
  return (
    <PlayerProvider>
      <Router>
        <div className="app h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col">
          {/* Navbar */}
          <Navbar />
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar on the left */}
            <Sidebar />

            {/* Main Content Area with Right Sidebar */}
            <div className="flex flex-1 relative">
              {/* Main Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 pt-24">
                <Routes>
                  <Route path="/" element={<Music />} />
                  <Route path="/home" element={<Music />} />
                  <Route path="/artist/:id" element={<ArtistPage />} />
                  <Route path="/trends" element={<TrendPage />} />
                  <Route path="/library" element={<LibraryPage />} />
                  <Route path="/discover" element={<div>Discover Page</div>} />
                  <Route path="/settings" element={<div>Settings Page</div>} />
                  <Route path="/podcast" element={<PodcastPage />} />
                  <Route path="*" element={<div>404 - Page Not Found</div>} />
                </Routes>
              </div>

              {/* Right Sidebar, only visible on md (medium screens) and larger */}
              <RightSidebar className="hidden md:flex md:w-64 h-full fixed right-0 top-16" />
            </div>
          </div>
        </div>
      </Router>
    </PlayerProvider>
  );
}

export default App;