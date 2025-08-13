import React from 'react';
import { motion } from 'framer-motion';
import './MusicCard.css';

const MusicCard = ({ music, onSelect, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };



  return (
    <motion.div
      className="music-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      onClick={() => onSelect(music)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-image-container">
        <img 
          src={music.thumbnail} 
          alt={`${music.title} 썸네일`}
          className="card-thumbnail"
          loading="lazy"
        />
        <div className="card-overlay">
          <motion.div 
            className="play-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill="currentColor"/>
            </svg>
          </motion.div>
        </div>
        <div className="card-duration">
          {music.duration}
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h4 className="card-title">{music.title}</h4>
        </div>
        
        <div className="card-details">
          <span className="card-album">
            {Array.isArray(music.album) ? music.album.join(', ') : music.album}
          </span>
        </div>
        
        <div className="card-genre">
          <span className="genre-tag">{music.genre}</span>
        </div>
        
        <p className="card-description">
          {music.description.length > 100 
            ? `${music.description.substring(0, 100)}...` 
            : music.description
          }
        </p>
        
        <div className="card-highlights">
          {music.highlights.slice(0, 2).map((highlight, idx) => (
            <span key={idx} className="highlight-tag">
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MusicCard;
