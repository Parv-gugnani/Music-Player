import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedSongs, setLikedSongs] = useState([]);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const likeSong = (song) => {
    setLikedSongs((prevLikedSongs) => {
      // Avoid duplicates in liked songs
      if (!prevLikedSongs.find((liked) => liked.title === song.title)) {
        return [...prevLikedSongs, song];
      }
      return prevLikedSongs;
    });
  };

  const removeLikedSong = (song) => {
    setLikedSongs((prevLikedSongs) =>
      prevLikedSongs.filter((liked) => liked.title !== song.title)
    );
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        playSong,
        togglePlayPause,
        likedSongs,
        likeSong,
        removeLikedSong,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};