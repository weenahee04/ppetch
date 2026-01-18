import React from 'react';

interface JackpotProps {
  onBack: () => void;
}

export const Jackpot: React.FC<JackpotProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#111] font-sans pb-10">
      <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[50px] shadow-md relative z-50 flex items-center justify-between px-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
             <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gold-300 shadow-sm">
                <span className="text-[#eebf34] font-serif font-bold text-lg">S</span>
            </div>
            <span className="text-black font-black text-2xl tracking-tight font-sans">SUAY</span>
          </div>
          <div className="text-white font-bold text-lg drop-shadow-md">โบนัส</div>
      </header>

      <div className="max-w-[1000px] mx-auto px-4 mt-6">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg p-6 text-white shadow-lg mb-6 flex flex-col items-center justify-center border border-purple-500">
              <div className="text-4xl mb-2">💎 Reward Points</div>
              <div className="text-6xl font-black text-[#eebf34] drop-shadow-[0_0_10px_rgba(238,191,52,0.8)]">0 P</div>
              <p className="mt-2 text-sm text-purple-200">ทุกๆ 50 บาท = 1 Point (Reset ทุกวันที่ 16)</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 mb-6">
              <h2 className="text-[#b08528] font-bold text-xl mb-4 flex items-center gap-2">
                  <span>🎰</span> แทงแจ็คพอต (Jackpot)
              </h2>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded text-center">
                  <p className="text-gray-600 mb-2">ระบุเลข 6 หลักเพื่อลุ้นรางวัล 1,000,000 บาท</p>
                  <div className="flex justify-center gap-2 mb-4">
                      <input type="text" maxLength={6} className="text-center text-3xl tracking-[1em] w-full max-w-md border-2 border-[#b08528] rounded py-2 px-4 focus:outline-none focus:ring-4 ring-[#b08528]/20" placeholder="000000" />
                  </div>
                  <button className="bg-[#b08528] text-white px-8 py-2 rounded font-bold shadow hover:bg-[#967020] transition">
                      ยืนยันตัวเลข
                  </button>
              </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
              <h3 className="text-white font-bold text-lg mb-4">GACHA ลุ้นโชค</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1,2,3,4].map(i => (
                      <div key={i} className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center border border-gray-600 hover:border-[#eebf34] cursor-pointer transition group">
                          <span className="text-4xl group-hover:scale-125 transition">🎁</span>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};