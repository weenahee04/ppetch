import React from 'react';

interface GamesProps {
  onBack: () => void;
}

export const Games: React.FC<GamesProps> = ({ onBack }) => {
  const games = [
      { name: "หัวก้อย", icon: "🪙", color: "bg-yellow-600" },
      { name: "สูงต่ำ", icon: "🎲", color: "bg-red-600" },
      { name: "เป่ายิงฉุบ", icon: "✌️", color: "bg-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-[#111] font-sans pb-10">
      <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[50px] shadow-md relative z-50 flex items-center justify-between px-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
             <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gold-300 shadow-sm">
                <span className="text-[#eebf34] font-serif font-bold text-lg">S</span>
            </div>
            <span className="text-black font-black text-2xl tracking-tight font-sans">SUAY</span>
          </div>
          <div className="text-white font-bold text-lg drop-shadow-md">เกมเดิมพัน</div>
      </header>

      <div className="max-w-[1000px] mx-auto px-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {games.map((game, idx) => (
                  <div key={idx} className={`rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-[#eebf34] transition cursor-pointer group`}>
                      <div className={`${game.color} h-32 flex items-center justify-center`}>
                          <span className="text-6xl drop-shadow-lg group-hover:scale-110 transition">{game.icon}</span>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 text-center">
                          <h3 className="text-white font-bold text-xl mb-2">{game.name}</h3>
                          <button className="bg-[#b08528] text-white px-6 py-1.5 rounded-full text-sm font-bold">เล่นเลย</button>
                      </div>
                  </div>
              ))}
          </div>
          
          <div className="mt-8 bg-[#1a1a1a] p-6 rounded-lg border border-gray-700">
              <h3 className="text-[#eebf34] font-bold mb-2">🏆 อันดับผู้ชนะประจำวัน</h3>
              <div className="space-y-2">
                  {[1,2,3].map(i => (
                      <div key={i} className="flex justify-between items-center bg-gray-800 p-3 rounded border border-gray-700">
                          <div className="flex items-center gap-3">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${i===1?'bg-yellow-400 text-black':i===2?'bg-gray-400 text-black':'bg-orange-700 text-white'}`}>{i}</span>
                              <span className="text-gray-300">User{999-i}***</span>
                          </div>
                          <span className="text-[#eebf34] font-bold">+{10000 - i*500} ฿</span>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};