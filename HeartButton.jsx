// ---------- HeartButton.jsx ----------
import React from 'react';

const HeartButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-all"
    >
      ❤️ {label}
    </button>
  );
};

export default HeartButton;