import React, { createContext, useState, useRef } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = (song) => {
    if (song && song !== currentSong) {
      setCurrentSong(song);
      audioRef.current.src = song.url;
      audioRef.current.play();
      setIsPlaying(true);
    } else if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const playNextSong = () => {
    // Implement logic for playing the next song if needed
  };

  const playPreviousSong = () => {
    // Implement logic for playing the previous song if needed
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        togglePlayPause,
        playNextSong,
        playPreviousSong,
        setCurrentSong,
      }}
    >
      {children}
      <audio ref={audioRef} onEnded={playNextSong} />
    </PlayerContext.Provider>
  );
};