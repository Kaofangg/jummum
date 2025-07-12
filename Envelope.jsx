// ---------- Envelope.jsx ----------
import React, { useState } from 'react';

const Envelope = ({ message }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-64 h-40 cursor-pointer" onClick={() => setOpen(!open)}>
      {!open ? (
        <div className="w-full h-full bg-pink-300 rounded-lg flex items-center justify-center shadow-md">
          <p className="text-white text-lg">📩 คลิกเพื่อเปิดจดหมาย</p>
        </div>
      ) : (
        <div className="bg-white border border-pink-300 rounded-lg p-4 shadow-lg text-pink-700">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Envelope;
