import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="page welcome-page">
      <div className="content">
        <h1>Hey ! dunna💙🤌🎉</h1>
        <p>A small surprise from me 🫴....</p>
        <Link to="/wish" className="next-button">lets,Go!! ✨</Link>
      </div>
    </div>
  );
};

export default WelcomePage;