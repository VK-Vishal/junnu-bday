import React from 'react';
import { Link } from 'react-router-dom';

const WishPage = () => {
  return (
    <div className="page wish-page">
      <div className="content">
        <h1 className="pulse-title">Happy Birthday, My Junnu!!🎂✨</h1>
        <p className="wish-text pulse-text">
          Wishing you a magical day overflowing with love 💖, laughter 🌈, and pure joy 🎉! 
          You’re more than a sister—you’re my soul’s twin 🌟, my confidante 🤗, and my forever sunshine ☀️. 
          May every wish you make soar to the stars 🌠 and shower you with happiness 🎁!
        </p>
        <div className="quotes">
          <p className="pulse-quote">"Sisters are the sparkle in life’s sky 🌟, lighting up even the darkest days ✨."</p>
          <p className="pulse-quote">"You’re a rare gem 💎, a sister who fills my world with love 💕 and wonder 🌺."</p>
          <p className="pulse-quote">"With you by my side 🌸, every day feels like a celebration 🎈, my dearest sis 💞."</p>
          <p className="pulse-quote">"Our bond is a melody 🎶, a sweet song of sisterhood that never fades 🎵."</p>
        </div>
        <Link to="/photos" className="next-button pulse-button">Look up for Memories 📸💫</Link>
      </div>
    </div>
  );
};

export default WishPage;