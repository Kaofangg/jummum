// ---------- LoginPage.jsx ----------
import React, { useState } from 'react';
import 'global.css';
import heartImg from '../assets/heart.png';
import cakeImg from '../assets/cake.png';

const LoginPage = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '130768') {
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 relative overflow-hidden">
      {/* Floating hearts and cakes */}
      {[...Array(15)].map((_, i) => (
        <img
          key={`heart-${i}`}
          src={i % 2 === 0 ? heartImg : cakeImg}
          alt="decor"
          className={`absolute w-6 h-6 animate-floating-${i % 5}`}
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        />
      ))}

      <form
        onSubmit={handleLogin}
        className="bg-white rounded-2xl shadow-lg p-10 z-10 w-80 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-pink-500 mb-4">เข้าสู่ระบบเพื่อรับเซอร์ไพรส์ 💖</h2>
        <input
          type="password"
          placeholder="กรอกรหัสผ่าน"
          className="border border-pink-300 rounded px-4 py-2 w-full mb-4 text-center focus:outline-none focus:ring-2 focus:ring-pink-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">รหัสผ่านไม่ถูกต้อง ลองใหม่อีกครั้งนะคะ</p>}
        <button
          type="submit"
          className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-6 rounded-full transition-all"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

/* เพิ่มใน global.css หรือ Tailwind animate keyframes ให้เอฟเฟกต์ลอย: */
/*
@keyframes float {
  0% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(-20px); opacity: 0.7; }
  100% { transform: translateY(0); opacity: 1; }
}
.animate-floating-0 { animation: float 6s ease-in-out infinite; }
.animate-floating-1 { animation: float 7s ease-in-out infinite; }
.animate-floating-2 { animation: float 5s ease-in-out infinite; }
.animate-floating-3 { animation: float 8s ease-in-out infinite; }
.animate-floating-4 { animation: float 6.5s ease-in-out infinite; }
*/
