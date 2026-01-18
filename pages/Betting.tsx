import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';

interface BettingProps {
  onBack: () => void;
}

// Mock Data Types
interface Lotto {
  id: string;
  name: string;
  type: 'featured' | 'stock'; // หวยเด่น | หวยหุ้น
  flag: string; // URL or Emoji
  status: 'open' | 'closed';
  closeTime: string;
  countdown?: string;
  theme: 'gold' | 'silver' | 'bronze' | 'black';
}

const lottos: Lotto[] = [
  { id: 'gov', name: 'หวยรัฐบาลไทย', type: 'featured', flag: '🇹🇭', status: 'closed', closeTime: '15:20', theme: 'silver' },
  { id: 'yiki', name: 'จับยี่กี VIP', type: 'featured', flag: '💎', status: 'open', closeTime: '24 ชม.', countdown: '00:08:51', theme: 'gold' },
  { id: 'malay', name: 'หวยมาเลย์', type: 'featured', flag: '🇲🇾', status: 'open', closeTime: '18:00', countdown: '00:24:44', theme: 'gold' },
  { id: 'hanoi', name: 'หวยฮานอย', type: 'featured', flag: '🇻🇳', status: 'open', closeTime: '18:00', countdown: '00:24:44', theme: 'gold' },
  { id: 'lao_super', name: 'หวยลาว Super', type: 'featured', flag: '🇱🇦', status: 'open', closeTime: '18:30', countdown: '00:54:44', theme: 'bronze' },
  { id: 'hanoi_vip', name: 'หวยฮานอย VIP', type: 'featured', flag: '🇻🇳', status: 'open', closeTime: '19:00', countdown: '01:24:44', theme: 'bronze' },
  { id: 'baac', name: 'หวย ธกส.', type: 'featured', flag: '🏦', status: 'closed', closeTime: '09:00', theme: 'silver' },
  
  { id: 'stock_egypt', name: 'หุ้นอียิปต์', type: 'stock', flag: '🇪🇬', status: 'open', closeTime: '18:00', countdown: '00:24:44', theme: 'silver' },
  { id: 'stock_nikkei', name: 'นิเคอิ', type: 'stock', flag: '🇯🇵', status: 'closed', closeTime: '09:20', theme: 'silver' },
  { id: 'stock_china', name: 'หุ้นจีน', type: 'stock', flag: '🇨🇳', status: 'closed', closeTime: '10:00', theme: 'silver' },
  { id: 'stock_hangseng', name: 'หุ้นฮั่งเส็ง', type: 'stock', flag: '🇭🇰', status: 'closed', closeTime: '10:50', theme: 'silver' },
  { id: 'stock_taiwan', name: 'หุ้นไต้หวัน', type: 'stock', flag: '🇹🇼', status: 'closed', closeTime: '12:00', theme: 'silver' },
  { id: 'stock_korea', name: 'หุ้นเกาหลี', type: 'stock', flag: '🇰🇷', status: 'closed', closeTime: '12:40', theme: 'silver' },
  { id: 'stock_dow', name: 'หุ้นดาวโจนส์', type: 'stock', flag: '🇺🇸', status: 'closed', closeTime: '01:00', theme: 'silver' },
];

export const Betting: React.FC<BettingProps> = ({ onBack }) => {
  const [selectedLotto, setSelectedLotto] = useState<Lotto | null>(null);

  // --- GAME STATE ---
  const [activeTab, setActiveTab] = useState<'manual' | 'panel'>('panel');
  const [digitTab, setDigitTab] = useState<'3' | '2' | '1'>('3'); // 3ตัว, 2ตัว, เลขวิ่ง
  const [selectedBetTypes, setSelectedBetTypes] = useState<string[]>(['3top']);
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);
  const [priceModalOpen, setPriceModalOpen] = useState(false);
  const [fastPrice, setFastPrice] = useState('');

  // Reset state when entering a lotto
  useEffect(() => {
    if(selectedLotto) {
        setSelectedNumbers([]);
        setPriceModalOpen(false);
    }
  }, [selectedLotto]);

  const toggleNumber = (num: string) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== num));
    } else {
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };

  const getThemeGradient = (theme: string) => {
      switch(theme) {
          case 'gold': return 'bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528]';
          case 'silver': return 'bg-gradient-to-b from-[#e0e0e0] to-[#9e9e9e]';
          case 'bronze': return 'bg-gradient-to-r from-[#cd7f32] via-[#b87333] to-[#a0522d]';
          default: return 'bg-gray-800';
      }
  };

  // --- RENDER LOBBY ---
  if (!selectedLotto) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] font-sans pb-10">
        <header className="bg-[#222] h-[50px] shadow-md relative z-50 flex items-center px-4 border-b border-gray-700">
            <div className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white" onClick={onBack}>
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
               <span>หน้าหลัก</span>
            </div>
        </header>

        <div className="max-w-[1200px] mx-auto px-4 mt-6 space-y-8">
            
            {/* Featured Section */}
            <div>
                <div className="bg-[#333] text-white px-4 py-2 rounded-t border-l-4 border-gold-500 font-bold">
                    หวยเด่น
                </div>
                <div className="bg-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-b">
                    {lottos.filter(l => l.type === 'featured').map(lotto => (
                        <div 
                            key={lotto.id} 
                            onClick={() => lotto.status === 'open' && setSelectedLotto(lotto)}
                            className={`relative h-24 rounded shadow-lg overflow-hidden cursor-pointer group transition transform hover:scale-[1.02] ${lotto.status === 'closed' ? 'opacity-70 grayscale' : ''}`}
                        >
                            {/* Background */}
                            <div className={`absolute inset-0 ${getThemeGradient(lotto.theme)}`}></div>
                            
                            {/* Content */}
                            <div className="relative h-full flex items-center justify-between px-4 text-white shadow-inner">
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl drop-shadow-md">{lotto.flag}</span>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-lg drop-shadow-sm text-black/80">{lotto.name}</span>
                                        {lotto.status === 'open' ? (
                                            <span className="text-xs bg-black/20 px-2 py-0.5 rounded text-white font-mono">{lotto.countdown}</span>
                                        ) : (
                                            <span className="text-xs text-gray-700">ปิดรับ {lotto.closeTime}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="text-right">
                                    {lotto.status === 'open' ? (
                                        <>
                                            <div className="text-xs text-black/60 font-bold mb-1">ปิดรับ {lotto.closeTime}</div>
                                            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">เปิดรับแทง</span>
                                        </>
                                    ) : (
                                        <div className="bg-gray-700/50 text-white text-xs px-2 py-1 rounded border border-gray-500">
                                            🕓 ยังไม่รับแทง
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stocks Section */}
            <div>
                <div className="bg-[#333] text-white px-4 py-2 rounded-t border-l-4 border-gray-400 font-bold">
                    หวยหุ้น
                </div>
                <div className="bg-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-b">
                    {lottos.filter(l => l.type === 'stock').map(lotto => (
                        <div 
                            key={lotto.id} 
                            onClick={() => lotto.status === 'open' && setSelectedLotto(lotto)}
                            className={`relative h-24 rounded shadow-lg overflow-hidden cursor-pointer group transition transform hover:scale-[1.02] ${lotto.status === 'closed' ? 'opacity-70 grayscale' : ''}`}
                        >
                            <div className={`absolute inset-0 ${getThemeGradient(lotto.theme)}`}></div>
                            <div className="relative h-full flex items-center justify-between px-4 text-white">
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl drop-shadow-md">{lotto.flag}</span>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-lg drop-shadow-sm text-black/80">{lotto.name}</span>
                                        {lotto.status === 'open' ? (
                                            <span className="text-xs bg-black/20 px-2 py-0.5 rounded text-white font-mono">{lotto.countdown}</span>
                                        ) : (
                                            <span className="text-xs text-gray-700">ปิดรับ {lotto.closeTime}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="text-right">
                                    {lotto.status === 'open' ? (
                                        <>
                                            <div className="text-xs text-black/60 font-bold mb-1">ปิดรับ {lotto.closeTime}</div>
                                            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">เปิดรับแทง</span>
                                        </>
                                    ) : (
                                        <div className="bg-gray-700/50 text-white text-xs px-2 py-1 rounded border border-gray-500">
                                            🕓 ยังไม่รับแทง
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    );
  }

  // --- RENDER GAME INTERFACE ---
  return (
    <div className="min-h-screen bg-[#111] font-sans pb-20">
      
      {/* Header */}
      <div className="bg-[#222] text-white p-3 flex justify-between items-center border-b border-gray-700 sticky top-0 z-40 shadow-md">
          <div className="flex items-center gap-2">
              <button onClick={() => setSelectedLotto(null)} className="flex items-center text-gray-400 hover:text-white text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  ย้อนกลับ
              </button>
              <div className="h-6 w-px bg-gray-600 mx-2"></div>
              <h1 className="text-[#b08528] font-bold text-lg">{selectedLotto.name} <span className="text-white text-xs bg-red-600 px-2 rounded-full ml-2">รอบที่ 49</span></h1>
          </div>
          <div className="bg-black/50 px-3 py-1 rounded border border-gray-600 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#eebf34]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-mono font-bold text-white tracking-widest">{selectedLotto.countdown || '00:00:00'}</span>
          </div>
      </div>

      <div className="max-w-[1000px] mx-auto p-2 sm:p-4">
          
          {/* Main Tabs */}
          <div className="flex rounded-t-lg overflow-hidden border-b border-[#b08528]">
              <button 
                onClick={() => setActiveTab('manual')}
                className={`flex-1 py-3 font-bold text-sm transition ${activeTab === 'manual' ? 'bg-gradient-to-b from-[#fff9c4] to-[#fbc02d] text-black border-t-2 border-[#b08528]' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                  กดเลขเอง
              </button>
              <button 
                onClick={() => setActiveTab('panel')}
                className={`flex-1 py-3 font-bold text-sm transition ${activeTab === 'panel' ? 'bg-gradient-to-b from-[#eebf34] via-[#d4a017] to-[#b08528] text-white border-t-2 border-white shadow-inner' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                  เลือกจากแผง
              </button>
          </div>

          {/* Sub Tabs (Digit Type) */}
          <div className="flex bg-white p-1 gap-1">
              <button 
                onClick={() => { setDigitTab('3'); setSelectedBetTypes(['3top']); }}
                className={`flex-1 py-2 text-sm font-bold rounded transition ${digitTab === '3' ? 'bg-[#007bff] text-white shadow' : 'bg-blue-50 text-[#007bff]'}`}
              >
                  สามตัว
              </button>
              <button 
                onClick={() => { setDigitTab('2'); setSelectedBetTypes(['2top']); }}
                className={`flex-1 py-2 text-sm font-bold rounded transition ${digitTab === '2' ? 'bg-[#17a2b8] text-white shadow' : 'bg-cyan-50 text-[#17a2b8]'}`}
              >
                  สองตัว
              </button>
              <button 
                onClick={() => { setDigitTab('1'); setSelectedBetTypes(['run_top']); }}
                className={`flex-1 py-2 text-sm font-bold rounded transition ${digitTab === '1' ? 'bg-[#28a745] text-white shadow' : 'bg-green-50 text-[#28a745]'}`}
              >
                  เลขวิ่ง
              </button>
          </div>

          {/* Bet Types Selection */}
          <div className="bg-white p-2 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                  {digitTab === '3' && (
                      <>
                        <button className="flex-1 min-w-[120px] bg-[#a92323] text-white rounded border border-[#800000] p-1 flex justify-between items-center px-3 shadow">
                            <span className="font-bold text-sm">3ตัวบน</span>
                            <span className="bg-white/20 px-1 rounded text-xs">850</span>
                        </button>
                        <button className="flex-1 min-w-[120px] bg-[#dc3545] text-white rounded border border-[#a92323] p-1 flex justify-between items-center px-3 shadow opacity-80 hover:opacity-100">
                            <span className="font-bold text-sm">3ตัวโต๊ด</span>
                            <span className="bg-white/20 px-1 rounded text-xs">120</span>
                        </button>
                      </>
                  )}
                  {digitTab === '2' && (
                      <>
                        <button className="flex-1 min-w-[120px] bg-[#a92323] text-white rounded border border-[#800000] p-1 flex justify-between items-center px-3 shadow">
                            <span className="font-bold text-sm">2ตัวบน</span>
                            <span className="bg-white/20 px-1 rounded text-xs">92</span>
                        </button>
                        <button className="flex-1 min-w-[120px] bg-[#dc3545] text-white rounded border border-[#a92323] p-1 flex justify-between items-center px-3 shadow opacity-80 hover:opacity-100">
                            <span className="font-bold text-sm">2ตัวล่าง</span>
                            <span className="bg-white/20 px-1 rounded text-xs">92</span>
                        </button>
                      </>
                  )}
                  {digitTab === '1' && (
                      <>
                        <button className="flex-1 min-w-[120px] bg-[#a92323] text-white rounded border border-[#800000] p-1 flex justify-between items-center px-3 shadow">
                            <span className="font-bold text-sm">วิ่งบน</span>
                            <span className="bg-white/20 px-1 rounded text-xs">3.2</span>
                        </button>
                        <button className="flex-1 min-w-[120px] bg-[#dc3545] text-white rounded border border-[#a92323] p-1 flex justify-between items-center px-3 shadow opacity-80 hover:opacity-100">
                            <span className="font-bold text-sm">วิ่งล่าง</span>
                            <span className="bg-white/20 px-1 rounded text-xs">4.2</span>
                        </button>
                      </>
                  )}
              </div>
              
              {/* Quick Select Buttons */}
              <div className="grid grid-cols-5 gap-2 mt-2">
                  {['000', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map(range => (
                      <button key={range} className="bg-white border border-gray-300 rounded text-xs font-bold text-blue-600 hover:bg-blue-50 py-1">
                          {range}
                      </button>
                  ))}
              </div>
          </div>

          {/* Number Panel */}
          <div className="bg-gray-100 p-2 min-h-[400px]">
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                  {Array.from({ length: 100 }, (_, i) => {
                      const num = i.toString().padStart(digitTab === '3' ? 3 : 2, '0'); // Simplified 3 digit view for demo
                      const isSelected = selectedNumbers.includes(num);
                      return (
                          <button 
                            key={num}
                            onClick={() => toggleNumber(num)}
                            className={`h-10 border rounded font-bold text-sm flex items-center justify-center transition ${isSelected ? 'bg-gradient-to-b from-[#eebf34] to-[#b08528] text-white border-[#b08528] shadow-md transform scale-105' : 'bg-white text-[#b08528] border-[#eebf34] hover:bg-yellow-50'}`}
                          >
                              {num}
                          </button>
                      );
                  })}
              </div>
          </div>

          {/* Bottom Bar */}
          <div className="bg-[#2a2a2a] p-3 sticky bottom-0 border-t border-gray-700 flex gap-3">
              <button 
                className="flex-1 bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 rounded shadow"
                onClick={() => setSelectedNumbers([])}
              >
                  <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      ล้างข้อมูล
                  </span>
              </button>
              <button 
                className="flex-1 bg-gradient-to-b from-[#eebf34] via-[#d4a017] to-[#b08528] hover:from-[#fcd34d] hover:to-[#ca8a04] text-[#3e2e04] font-bold py-2 rounded shadow border border-[#bfa15f]"
                onClick={() => selectedNumbers.length > 0 && setPriceModalOpen(true)}
              >
                  <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                      ใส่ราคา ({selectedNumbers.length})
                  </span>
              </button>
          </div>

          {/* Info */}
          <div className="mt-4 bg-[#fff8e1] border border-[#ffe082] rounded p-3 text-sm text-[#856404]">
              <div className="font-bold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                  เงื่อนไขการแทง
              </div>
              <div className="mt-2 bg-[#b08528] text-white px-2 py-1 rounded inline-block font-bold">3ตัวบน จ่าย : 850</div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                  <li>แทงขั้นต่ำต่อครั้ง : 1.00</li>
                  <li>แทงสูงสุดต่อครั้ง : 8000.00</li>
                  <li>แทงสูงสุดต่อเลข : 8000.00</li>
              </ul>
          </div>

      </div>

      {/* PRICE MODAL */}
      {priceModalOpen && (
          <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                  
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#eebf34] to-[#b08528] p-3 flex justify-between items-center text-white">
                      <div className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                          <span className="font-bold text-shadow-sm">ใส่ราคา {selectedNumbers.length} รายการ</span>
                      </div>
                      <button onClick={() => setPriceModalOpen(false)} className="text-white hover:text-red-100">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                  </div>

                  {/* Table Content */}
                  <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                      <table className="w-full text-sm text-left">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                              <tr>
                                  <th className="px-4 py-2 w-10">#</th>
                                  <th className="px-4 py-2">เลข</th>
                                  <th className="px-4 py-2">ประเภท</th>
                                  <th className="px-4 py-2">ราคา (บาท)</th>
                                  <th className="px-4 py-2">เรทชนะ</th>
                                  <th className="px-4 py-2 w-10"></th>
                              </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                              {selectedNumbers.map((num, idx) => (
                                  <tr key={idx} className="hover:bg-gray-50">
                                      <td className="px-4 py-2">{idx + 1}.</td>
                                      <td className="px-4 py-2">
                                          <span className="bg-[#28a745] text-white px-2 py-0.5 rounded font-bold">{num}</span>
                                      </td>
                                      <td className="px-4 py-2">{digitTab === '3' ? '3ตัวบน' : '2ตัวบน'}</td>
                                      <td className="px-4 py-2">
                                          <input type="number" className="border border-gray-300 rounded px-2 py-1 w-full max-w-[100px]" defaultValue="1" />
                                      </td>
                                      <td className="px-4 py-2 text-gray-500">850.00</td>
                                      <td className="px-4 py-2">
                                          <button onClick={() => toggleNumber(num)} className="text-red-500 hover:text-red-700">
                                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                          </button>
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>

                  {/* Footer Controls */}
                  <div className="bg-white p-4 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
                          {/* Quick Price */}
                          <div className="flex items-center gap-2">
                              <span className="text-gray-700 font-bold text-sm">ราคา "เท่ากัน" ทั้งหมด</span>
                              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                                  <input 
                                    type="number" 
                                    className="px-3 py-1.5 w-32 outline-none text-sm" 
                                    placeholder="ใส่ราคา"
                                    value={fastPrice}
                                    onChange={(e) => setFastPrice(e.target.value)}
                                  />
                                  <button className="bg-green-500 text-white px-3 py-1.5 hover:bg-green-600 transition">
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                  </button>
                              </div>
                          </div>
                          
                          {/* Quick Chips */}
                          <div className="flex gap-2 justify-end">
                              {[5, 10, 20, 50, 100].map(amt => (
                                  <button key={amt} className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold px-3 py-1.5 rounded border border-gray-300">
                                      {amt} ฿
                                  </button>
                              ))}
                          </div>
                      </div>

                      {/* Summary Bar */}
                      <div className="flex flex-col md:flex-row gap-0 rounded-lg overflow-hidden font-bold text-white shadow-lg">
                          <div className="bg-[#007bff] p-3 flex-1 flex flex-col items-center justify-center">
                              <span className="text-xs opacity-80">ยอดเครดิตคงเหลือ</span>
                              <span className="text-lg">0.00 ฿</span>
                          </div>
                          <div className="bg-[#dc3545] p-3 flex-1 flex flex-col items-center justify-center">
                              <span className="text-xs opacity-80">รวมยอดแทง</span>
                              <span className="text-lg">{selectedNumbers.length}</span>
                          </div>
                          <button className="bg-[#28a745] hover:bg-[#218838] p-3 flex-[2] flex items-center justify-center gap-2 text-lg transition">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              ส่งโพย
                          </button>
                      </div>
                      
                      <button onClick={() => setSelectedNumbers([])} className="w-full mt-2 text-gray-400 text-xs hover:text-gray-600 flex items-center justify-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          ยกเลิกทั้งหมด
                      </button>
                  </div>

              </div>
          </div>
      )}

    </div>
  );
};