import React, { useState } from 'react';

const PhotosPage = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoSource = '/images/v2.mp4';
  const photos = [
    '/images/j1.jpg',
    '/images/j2.jpg',
    '/images/j3.jpg',
    '/images/j4.jpg',
    '/images/j5.jpg',
    '/images/j6.jpg',
    '/images/j7.jpg',
    '/images/j8.jpg',
    '/images/j9.jpg',
    '/images/j10.jpg',
    '/images/j11.jpg',
  ];

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="page photos-page">
      {/* Title outside the slideshow */}
      <div className="title-container">
        <h1 className="page-title">Junnu 💙🤌</h1>
      </div>
      <div className="slideshow">
        <video
          className="video-slide"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {videoEnded && photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Memory ${index + 1}`}
            className="slide"
            style={{ animationDelay: `${index * 5}s` }}
          />
        ))}
      </div>
      <div className="overlay-text"></div>
    </div>
  );
};

export default PhotosPage;
