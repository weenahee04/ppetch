import React from 'react';

interface NumberSetsProps {
  onBack: () => void;
}

export const NumberSets: React.FC<NumberSetsProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#e5e5e5] font-sans pb-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[50px] shadow-md relative z-50 flex items-center justify-between px-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
             <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gold-300 shadow-sm">
                <span className="text-[#eebf34] font-serif font-bold text-lg">S</span>
            </div>
            <span className="text-black font-black text-2xl tracking-tight font-sans">SUAY</span>
          </div>
          <div className="text-white font-bold text-lg drop-shadow-md">สร้างเลขชุด</div>
      </header>

      <div className="max-w-[800px] mx-auto px-4 mt-6">
          <div className="flex justify-end mb-4">
              <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-2 px-4 rounded shadow flex items-center gap-2">
                  <span className="text-xl font-bold">+</span> สร้างเลขชุด
              </button>
          </div>

          <div className="bg-white rounded-lg shadow border border-gray-200 p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
              <div className="text-6xl mb-4 opacity-20">🔢</div>
              <p className="text-gray-400 font-bold text-lg">ยังไม่มีเลขชุด</p>
              <p className="text-gray-400 text-sm">สร้างเลขชุดเพื่อให้ง่ายต่อการดึงโพย</p>
          </div>
      </div>
    </div>
  );
};