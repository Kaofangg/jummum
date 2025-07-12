// ---------- CountdownPage.jsx ----------
import React, { useEffect, useState } from 'react';
import HeartButton from './HeartButton';

const CountdownPage = ({ onNext }) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-50">
      <h1 className="text-5xl font-bold text-pink-500 mb-6">นับถอยหลังสู่เซอร์ไพรส์ 🎉</h1>
      <div className="text-[120px] font-extrabold text-pink-400 animate-bounce mb-8">
        {count > 0 ? count : '💖'}
      </div>
      {count === 0 && (
        <HeartButton label="ถัดไป" onClick={onNext} />
      )}
    </div>
  );
};

export default CountdownPage;

