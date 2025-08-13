import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import MusicGallery from './components/MusicGallery';
import MusicDetail from './components/MusicDetail';
import { musicData } from './data/musicData';
import './App.css';

function App() {
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleMusicSelect = (music) => {
    setSelectedMusic(music);
    setIsDetailOpen(true);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
    setTimeout(() => setSelectedMusic(null), 300);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <MusicGallery 
          musicList={musicData} 
          onMusicSelect={handleMusicSelect}
        />
      </main>
      
      <AnimatePresence>
        {isDetailOpen && selectedMusic && (
          <MusicDetail
            music={selectedMusic}
            onClose={closeDetail}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
