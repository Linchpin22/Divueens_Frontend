// src/components/SimpleText.js
import React from 'react';
import './simpleText.css';

const SimpleText = () => {
  return (
    <main className="container mx-auto text-center py-2">
      <p className="text-5xl p-4 font-extrabold">
        <span className="text-gradient-pink">Our Team</span> 
      </p>
    </main>
  );
};

export default SimpleText;
