// ---------- AnniversaryPage.jsx ----------
import React, { useEffect, useState } from 'react';
import Envelope from './Envelope';

const AnniversaryPage = () => {
  const anniversaryDate = new Date('1968-07-13');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const now = new Date();
    const diff = now - anniversaryDate;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    setDuration(`${years} ปี (${days} วัน)`);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center px-4 py-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">💞 Happy Anniversary 💞</h1>
      <p className="text-lg text-pink-800 mb-2">วันครบรอบ: 13 กรกฎาคม 2568</p>
      <p className="text-md text-pink-600 mb-8">ระยะเวลาที่เรารักกัน: {duration}</p>

      {/* เพลง YouTube */}
      <div className="mb-8">
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/jzpdwjL5FOw?autoplay=1&loop=1"
          title="Anniversary Song"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* สมุดใส่รูป */}
      <div className="w-full max-w-md mb-8">
        <div className="bg-white border border-pink-300 rounded-lg p-4 shadow-lg">
          <h2 className="text-lg font-semibold text-pink-700 mb-2">📖 ความทรงจำของเรา</h2>
          <input type="file" accept="image/*" className="mb-4" onChange={(e) => console.log(e.target.files[0])} />
          <p className="text-sm text-pink-600">*อัปโหลดภาพจะไม่บันทึกไว้ แต่สามารถแสดงได้ชั่วคราวใน session</p>
        </div>
      </div>

      <Envelope message="สุขสันต์วันครบรอบนะคะ ขอบคุณที่เดินร่วมทางกันมา ไม่ว่าจะผ่านอะไร รักคุณเสมอและตลอดไป 💖" />
    </div>
  );
};

export default AnniversaryPage;