// src/context/playercontext.js
import React, { createContext, useState, useEffect } from 'react';
import { Howl } from 'howler';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [progress, setProgress] = useState(0); // Track song progress
  const [likedSongs, setLikedSongs] = useState([]);

  // Load liked songs from localStorage on mount
  useEffect(() => {
    const storedLikedSongs = JSON.parse(localStorage.getItem('likedSongs'));
    if (storedLikedSongs) {
      setLikedSongs(storedLikedSongs);
    }
  }, []);

  // Save liked songs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
  }, [likedSongs]);

  // Update progress every second when a song is playing
  useEffect(() => {
    let interval;
    if (isPlaying && audio) {
      interval = setInterval(() => {
        setProgress(audio.seek());
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, audio]);

  // Handle song playback
  const playSong = (song) => {
    if (audio) {
      audio.stop(); // Stop previous audio if it exists
    }
    const newAudio = new Howl({
      src: [song.url],
      onend: () => setIsPlaying(false),
      onplay: () => setProgress(0),
    });

    setCurrentSong(song);
    setAudio(newAudio);
    newAudio.play();
    setIsPlaying(true);
  };

  // Toggle play/pause for the current song
  const togglePlayPause = () => {
    if (audio) {
      isPlaying ? audio.pause() : audio.play();
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle like/unlike for a song
  const toggleLikeSong = (song) => {
    if (likedSongs.some((likedSong) => likedSong.title === song.title)) {
      setLikedSongs(likedSongs.filter((likedSong) => likedSong.title !== song.title));
    } else {
      setLikedSongs([...likedSongs, song]);
    }
  };

  // Set progress in seconds, for use with a slider
  const seekSong = (value) => {
    if (audio) {
      audio.seek(value);
      setProgress(value);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        playSong,
        togglePlayPause,
        likedSongs,
        toggleLikeSong, // Toggle like/unlike for songs
        progress,
        seekSong, // Seek to specific time
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};