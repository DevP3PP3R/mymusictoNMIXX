import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MusicCard from './MusicCard';
import './MusicGallery.css';

const MusicGallery = ({ musicList, onMusicSelect }) => {
  const [albumFilter, setAlbumFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('releaseDate');

  const filteredMusic = musicList.filter(music => {
    const albumMatch = albumFilter === 'all' || 
      (Array.isArray(music.album) ? music.album.includes(albumFilter) : music.album === albumFilter);
    const typeMatch = typeFilter === 'all' || music.musicType === typeFilter;
    return albumMatch && typeMatch;
  });

  const sortedMusic = [...filteredMusic].sort((a, b) => {
    switch (sortBy) {
      case 'releaseDate':
        return new Date(b.releaseDate) - new Date(a.releaseDate);
      case 'title':
        return a.title.localeCompare(b.title);
      case 'album':
        return a.album.localeCompare(b.album);
      default:
        return 0;
    }
  });

  const albums = ['all', ...new Set(musicList.flatMap(music => 
    Array.isArray(music.album) ? music.album : [music.album]
  ))];
  const musicTypes = ['all', ...new Set(musicList.map(music => music.musicType))];

  // 음악 타입을 한글로 표시하는 함수
  const getTypeDisplayName = (type) => {
    const typeNames = {
      'remix': '리믹스',
      'mashup': '매시업',
      'playlist': '플레이리스트',
      'cover': '커버'
    };
    return typeNames[type] || type;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (

    <div className="music-gallery">
      <motion.div 
        className="gallery-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
                 <div className="header-image-container">
           <img 
             src={process.env.PUBLIC_URL + "/assets/images/캐릭터일렬.png"} 
             alt="엔믹스 캐릭터 일렬" 
             className="header-character-image"
           />
         </div>
        <h3>리믹스, 매쉬업, 커버까지 모두 모아봤어요</h3>
      </motion.div>

      {/* <motion.div 
        className="gallery-controls"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="filter-info">
          <span className="filter-status">
            {albumFilter === 'all' && typeFilter === 'all' 
              ? `전체 ${filteredMusic.length}곡` 
              : `${albumFilter === 'all' ? '전체' : albumFilter} 앨범, ${typeFilter === 'all' ? '전체' : getTypeDisplayName(typeFilter)} 타입 ${filteredMusic.length}곡`
            }
          </span>
        </div>
        
        <div className="filter-row">
          <div className="filter-section">
            <label htmlFor="album-filter">앨범별 필터:</label>
            <select 
              id="album-filter" 
              value={albumFilter} 
              onChange={(e) => setAlbumFilter(e.target.value)}
            >
              {albums.map(album => (
                <option key={album} value={album}>
                  {album === 'all' ? '전체' : album}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-section">
            <label htmlFor="type-filter">음악 타입별 필터:</label>
            <select 
              id="type-filter" 
              value={typeFilter} 
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              {musicTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? '전체' : getTypeDisplayName(type)}
                </option>
              ))}
            </select>
          </div>

          <div className="sort-section">
            <label htmlFor="sort-by">정렬:</label>
            <select 
              id="sort-by" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="releaseDate">발매일순</option>
              <option value="title">제목순</option>
              <option value="album">앨범순</option>
            </select>
          </div>
        </div>
      </motion.div> */}

      <motion.div 
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sortedMusic.map((music, index) => (
          <MusicCard
            key={music.id}
            music={music}
            onSelect={onMusicSelect}
            index={index}
          />
        ))}
      </motion.div>

      {sortedMusic.length === 0 && (
        <motion.div 
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>선택한 필터에 해당하는 음악이 없습니다.</p>
        </motion.div>
      )}
    </div>
  );
};

export default MusicGallery;
