import React, { useState } from 'react';

interface PoyProps {
  onBack: () => void;
}

export const Poy: React.FC<PoyProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('today');

  return (
    <div className="min-h-screen bg-[#e5e5e5] font-sans pb-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[50px] shadow-md relative z-50 flex items-center justify-between px-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
             <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gold-300 shadow-sm">
                <span className="text-[#eebf34] font-serif font-bold text-lg">S</span>
            </div>
            <span className="text-black font-black text-2xl tracking-tight font-sans">SUAY</span>
          </div>
          <div className="text-white font-bold text-lg drop-shadow-md">โพยหวย</div>
      </header>

      <div className="max-w-[1000px] mx-auto px-4 mt-6">
          <div className="flex gap-2 overflow-x-auto mb-4 bg-white p-2 rounded shadow-sm border border-gray-200">
              {['today', 'pending', 'finished', 'history'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded text-sm font-bold whitespace-nowrap flex-1 ${activeTab === tab ? 'bg-[#b08528] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                      {tab === 'today' && 'โพยวันนี้ทั้งหมด'}
                      {tab === 'pending' && 'รอออกผล'}
                      {tab === 'finished' && 'ออกผลแล้ว'}
                      {tab === 'history' && 'โพยหวยย้อนหลัง'}
                  </button>
              ))}
          </div>

          <div className="bg-white rounded-lg shadow border border-gray-200 p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
              <div className="text-6xl mb-4 opacity-20">📜</div>
              <p className="text-gray-400 font-bold text-lg">ไม่พบรายการโพยหวย</p>
              <p className="text-gray-400 text-sm">เลือกเมนู "แทงหวย" เพื่อเริ่มเสี่ยงโชค</p>
          </div>
      </div>
    </div>
  );
};