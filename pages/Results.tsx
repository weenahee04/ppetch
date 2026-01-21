import React, { useState } from 'react';

interface ResultsProps {
  onBack: () => void;
}

export const Results: React.FC<ResultsProps> = ({ onBack }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Mock Data: Stocks/Foreign
  const stockResults = [
    { name: 'หุ้นเกาหลี', flag: '🇰🇷', top3: '654', bottom2: '89' },
    { name: 'นิเคอิเช้า', flag: '🇯🇵', top3: '112', bottom2: '45' },
    { name: 'นิเคอิบ่าย', flag: '🇯🇵', top3: '998', bottom2: '12' },
    { name: 'จีนเช้า', flag: '🇨🇳', top3: '774', bottom2: '36' },
    { name: 'จีนบ่าย', flag: '🇨🇳', top3: '002', bottom2: '58' },
    { name: 'ฮั่งเส็งเช้า', flag: '🇭🇰', top3: '335', bottom2: '99' },
    { name: 'ฮั่งเส็งบ่าย', flag: '🇭🇰', top3: '441', bottom2: '01' },
    { name: 'หุ้นไต้หวัน', flag: '🇹🇼', top3: '885', bottom2: '23' },
    { name: 'หุ้นสิงคโปร์', flag: '🇸🇬', top3: '669', bottom2: '74' },
    { name: 'หุ้นอียิปต์', flag: '🇪🇬', top3: '125', bottom2: '88' },
    { name: 'หุ้นเยอรมัน', flag: '🇩🇪', top3: '456', bottom2: '12' },
    { name: 'หุ้นอังกฤษ', flag: '🇬🇧', top3: '789', bottom2: '34' },
    { name: 'หุ้นรัสเซีย', flag: '🇷🇺', top3: '012', bottom2: '56' },
    { name: 'หุ้นอินเดีย', flag: '🇮🇳', top3: '345', bottom2: '78' },
    { name: 'หุ้นดาวโจนส์', flag: '🇺🇸', top3: '678', bottom2: '90' },
    { name: 'หวยมาเลย์', flag: '🇲🇾', top3: '901', bottom2: '23' },
    { name: 'หวยลาว', flag: '🇱🇦', top3: '234', bottom2: '45' },
    { name: 'ฮานอยพิเศษ', flag: '🇻🇳', top3: '567', bottom2: '67' },
    { name: 'ฮานอยปกติ', flag: '🇻🇳', top3: '890', bottom2: '89' },
    { name: 'ฮานอย VIP', flag: '🇻🇳', top3: '123', bottom2: '01' },
  ];

  // Mock Data: Yi Ki Rounds (Generates 88 rounds)
  const yiKiRounds = Array.from({ length: 88 }, (_, i) => {
      const round = i + 1;
      const isFuture = round > 45; // Simulate current round is 45
      return {
          round: round,
          top3: isFuture ? '' : Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
          bottom2: isFuture ? '' : Math.floor(Math.random() * 100).toString().padStart(2, '0')
      };
  });

  return (
    <div className="min-h-screen bg-[#e5e5e5] font-sans pb-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[50px] shadow-md relative z-50 flex items-center justify-between px-4 sticky top-0">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
             <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gold-300 shadow-sm">
                <span className="text-[#eebf34] font-serif font-bold text-lg">B</span>
            </div>
            <span className="text-black font-black text-2xl tracking-tight font-sans">บ้านหวย</span>
          </div>
          <div className="text-white font-bold text-lg drop-shadow-md">ผลรางวัล</div>
      </header>

      <div className="max-w-[1000px] mx-auto px-2 sm:px-4 mt-4">
          
          {/* Date Filter Bar */}
          <div className="bg-white p-3 rounded shadow-sm mb-4 border border-gray-300 flex items-center gap-3">
              <div className="text-[#b08528] font-bold flex items-center gap-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                  เลือกวันที่
              </div>
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm outline-none focus:border-[#b08528]"
              />
              <button className="bg-[#333] hover:bg-black text-white px-4 py-1 rounded text-sm font-bold shadow transition">
                  ค้นหา
              </button>
          </div>

          {/* Featured Results Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              
              {/* Yi Ki VIP Latest */}
              <div className="bg-white rounded border border-[#eebf34] shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-white to-yellow-50 px-4 py-2 border-b border-[#eebf34]/30 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                          <span className="text-[#b08528] text-xl">💎</span>
                          <span className="font-bold text-[#b08528]">จับยี่กี VIP - รอบที่ 45</span>
                      </div>
                      <span className="bg-[#b08528] text-white text-xs px-2 py-0.5 rounded">ล่าสุด</span>
                  </div>
                  <div className="p-4 flex gap-4">
                      <div className="flex-1 border border-gray-200 rounded p-3 text-center bg-gray-50">
                          <div className="text-gray-500 text-xs mb-1">3 ตัวบน</div>
                          <div className="text-3xl font-bold text-gray-800 tracking-wider">594</div>
                      </div>
                      <div className="flex-1 border border-gray-200 rounded p-3 text-center bg-gray-50">
                          <div className="text-gray-500 text-xs mb-1">2 ตัวล่าง</div>
                          <div className="text-3xl font-bold text-gray-800 tracking-wider">82</div>
                      </div>
                  </div>
              </div>

              {/* Government Lottery */}
              <div className="bg-white rounded border border-gray-300 shadow-sm overflow-hidden">
                  <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                      <img src="https://flagcdn.com/w40/th.png" alt="TH" className="w-6 h-4 shadow-sm" />
                      <span className="font-bold text-gray-800">หวยรัฐบาลไทย</span>
                      <span className="text-gray-500 text-xs ml-auto">17 มกราคม 2569</span>
                  </div>
                  <div className="p-3">
                      <div className="border border-gray-300 rounded p-2 text-center mb-2 bg-white shadow-inner">
                          <div className="text-3xl font-black text-[#b08528] tracking-[0.2em]">878972</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="border border-gray-200 rounded p-1">
                              <div className="text-[10px] text-gray-400">3 ตัวหน้า</div>
                              <div className="font-bold text-sm text-gray-700">299, 815</div>
                          </div>
                          <div className="border border-gray-200 rounded p-1">
                              <div className="text-[10px] text-gray-400">3 ตัวล่าง</div>
                              <div className="font-bold text-sm text-gray-700">662, 363</div>
                          </div>
                          <div className="border border-gray-200 rounded p-1">
                              <div className="text-[10px] text-gray-400">2 ตัวล่าง</div>
                              <div className="font-bold text-sm text-gray-700">02</div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* BAAC (Example of full width inside grid if needed, or separate row) */}
              <div className="bg-white rounded border border-gray-300 shadow-sm overflow-hidden lg:col-span-2">
                  <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                      <div className="w-6 h-4 bg-blue-900 rounded-sm"></div>
                      <span className="font-bold text-gray-800">หวย ธกส.</span>
                      <span className="text-gray-500 text-xs ml-auto">17 มกราคม 2569</span>
                  </div>
                  <div className="p-3 flex items-center gap-4">
                      <div className="flex-1 text-center border-r border-gray-200">
                          <div className="text-xs text-gray-400">เลขรางวัล</div>
                          <div className="text-2xl font-bold text-gray-800">5389559</div>
                      </div>
                      <div className="flex-1 text-center border-r border-gray-200">
                          <div className="text-xs text-gray-400">3 ตัวบน</div>
                          <div className="text-2xl font-bold text-[#b08528]">559</div>
                      </div>
                      <div className="flex-1 text-center">
                          <div className="text-xs text-gray-400">2 ตัวล่าง</div>
                          <div className="text-2xl font-bold text-[#b08528]">89</div>
                      </div>
                  </div>
              </div>

          </div>

          {/* Stock Lottery Grid */}
          <div className="mb-6">
              <div className="flex items-center gap-2 mb-2 px-1">
                  <span className="text-gray-600">⭐</span>
                  <h3 className="font-bold text-gray-700">ผลหวยหุ้นต่างประเทศ</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {stockResults.map((stock, idx) => (
                      <div key={idx} className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden flex flex-col">
                          <div className="bg-gray-50 px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                              <span className="text-xl">{stock.flag}</span>
                              <span className="text-xs font-bold text-gray-700 truncate">{stock.name}</span>
                          </div>
                          <div className="flex p-2">
                              <div className="flex-1 text-center border-r border-gray-100">
                                  <div className="text-[9px] text-gray-400">3 ตัวบน</div>
                                  <div className="font-bold text-gray-800">{stock.top3}</div>
                              </div>
                              <div className="flex-1 text-center">
                                  <div className="text-[9px] text-gray-400">2 ตัวล่าง</div>
                                  <div className="font-bold text-gray-800">{stock.bottom2}</div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Yi Ki History Grid */}
          <div className="mb-8">
              <div className="flex items-center gap-2 mb-2 px-1">
                  <span className="text-[#b08528]">💎</span>
                  <h3 className="font-bold text-gray-700">ผลจับยี่กี VIP ย้อนหลัง</h3>
              </div>
              <div className="bg-white p-3 rounded border border-gray-300 shadow-sm">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                      {yiKiRounds.map((item) => (
                          <div key={item.round} className="border border-gray-200 rounded overflow-hidden text-center">
                              <div className="bg-gray-50 text-[10px] font-bold text-gray-600 py-0.5 border-b border-gray-200">
                                  รอบที่ {item.round}
                              </div>
                              <div className="flex">
                                  <div className="flex-1 border-r border-gray-100 py-1">
                                      <div className="text-[8px] text-gray-400">3ตัวบน</div>
                                      <div className={`text-sm font-bold ${item.top3 ? 'text-[#b08528]' : 'text-gray-300'}`}>
                                          {item.top3 || '---'}
                                      </div>
                                  </div>
                                  <div className="flex-1 py-1">
                                      <div className="text-[8px] text-gray-400">2ตัวล่าง</div>
                                      <div className={`text-sm font-bold ${item.bottom2 ? 'text-[#b08528]' : 'text-gray-300'}`}>
                                          {item.bottom2 || '--'}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
};