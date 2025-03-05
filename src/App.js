import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import WishPage from './components/WishPage';
import PhotosPage from './components/PhotosPage';
import './App.css';

function App() {
  const [audio] = useState(new Audio('/music/audio.mp3'));
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [playAttempted, setPlayAttempted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    console.log('Attempting to load audio from:', audio.src);

    audio.addEventListener('loadeddata', () => {
      console.log('Audio metadata loaded successfully');
      setIsAudioReady(true);
    });

    audio.addEventListener('error', (e) => {
      const error = e.target.error;
      let message = 'Unknown audio error';
      if (error) {
        switch (error.code) {
          case MediaError.MEDIA_ERR_ABORTED:
            message = 'Audio loading aborted';
            break;
          case MediaError.MEDIA_ERR_NETWORK:
            message = 'Network error while loading audio';
            break;
          case MediaError.MEDIA_ERR_DECODE:
            message = 'Audio decoding error';
            break;
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            message = 'Audio source not supported or file not found';
            break;
          default:
            message = 'Unknown audio error';
        }
      }
      console.error('Audio loading error:', message, error);
      setErrorMessage(message);
    });

    audio.addEventListener('canplay', () => {
      console.log('Audio can play');
    });

    return () => {
      audio.removeEventListener('loadeddata', () => {});
      audio.removeEventListener('error', () => {});
      audio.removeEventListener('canplay', () => {});
      // Don’t pause on unmount to keep playing across refreshes if started
    };
  }, [audio]);

  useEffect(() => {
    if (isAudioReady && !playAttempted) {
      audio.loop = true;
      audio.play()
        .then(() => {
          console.log('Audio playing successfully');
          setPlayAttempted(true);
          setErrorMessage(''); // Clear any previous error
        })
        .catch((error) => {
          console.error('Audio playback failed:', error.message);
          setPlayAttempted(true); // Avoid retry on refresh
          setErrorMessage('Click anywhere to start the birthday song due to browser restrictions');
        });
    }
  }, [isAudioReady, audio, playAttempted]);

  const handlePageClick = () => {
    if (!audio.paused) return; // Already playing, do nothing
    audio.play()
      .then(() => {
        console.log('Audio started after page click');
        setPlayAttempted(true);
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Playback after click failed:', error.message);
        setErrorMessage('Playback failed - check audio file or browser settings');
      });
  };

  return (
    <Router>
      <div onClick={handlePageClick}>
        {errorMessage && (
          <div
            style={{
              position: 'fixed',
              top: '10px',
              left: '10px',
              zIndex: 1000,
              color: 'white',
              background: 'rgba(30, 144, 255, 0.8)', // Blue theme for your sister
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            {errorMessage}
          </div>
        )}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/wish" element={<WishPage />} />
          <Route path="/photos" element={<PhotosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;