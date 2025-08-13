import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MusicDetail.css';

const MusicDetail = ({ music, onClose }) => {


  const handleYouTubeClick = (e) => {
    e.stopPropagation();
    window.open(music.youtubeUrl, '_blank');
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="music-detail-backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="music-detail-modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
            </svg>
          </button>

          <div className="modal-content">
            <div className="modal-image-section">
              <img 
                src={music.thumbnail} 
                alt={`${music.title} 썸네일`}
                className="modal-thumbnail"
              />
              <div className="modal-image-overlay">
                <motion.button
                  className="youtube-button"
                  onClick={handleYouTubeClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                  </svg>
                  YouTube에서 보기
                </motion.button>
              </div>
            </div>

            <div className="modal-info-section">
              <div className="modal-header">
                <h2 className="modal-title">{music.title}</h2>
              </div>

                             <div className="modal-meta">
                 <div className="meta-item">
                   <span className="meta-label">앨범:</span>
                   <span className="meta-value">
                     {Array.isArray(music.album) ? music.album.join(', ') : music.album}
                   </span>
                 </div>
                 <div className="meta-item">
                   <span className="meta-label">장르:</span>
                   <span className="meta-value">{music.genre}</span>
                 </div>
                 <div className="meta-item">
                   <span className="meta-label">재생시간:</span>
                   <span className="meta-value">{music.duration}</span>
                 </div>
               </div>

              <div className="modal-description">
                <h3>곡 소개</h3>
                <p>{music.description}</p>
              </div>

              <div className="modal-highlights">
                <h3>하이라이트</h3>
                <div className="highlights-grid">
                  {music.highlights.map((highlight, idx) => (
                    <motion.span
                      key={idx}
                      className="highlight-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MusicDetail;
