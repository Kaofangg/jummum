// ---------- BirthdayPage.jsx ----------
import React from 'react';
import HeartButton from './HeartButton';
import Envelope from './Envelope';

const BirthdayPage = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-pink-500 mb-6">🎂 Happy Birthday! 🎉</h1>
      <p className="text-lg text-pink-800 mb-10">ขอให้วันนี้เป็นวันที่พิเศษที่สุดนะคะ 💖</p>

      <Envelope message="สุขสันต์วันเกิดนะคะ ขอบคุณที่อยู่ข้างกันมาตลอด ขอให้ทุกวันของคุณเต็มไปด้วยรอยยิ้ม ความรัก และความสุขมากมาย รักที่สุดเลย 💕" />

      <div className="mt-10">
        <HeartButton label="ถัดไป" onClick={onNext} />
      </div>
    </div>
  );
};

export default BirthdayPage;
