import React, { useState } from 'react';
import { generateLuckyNumbers } from '../services/geminiService';
import { PageView } from '../types';

interface DashboardProps {
  username: string;
  onLogout: () => void;
  onNavigate?: (page: PageView) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ username, onLogout, onNavigate }) => {
  const [loading, setLoading] = useState(false);
  const [luckyData, setLuckyData] = useState<any>(null);
  const [showAiModal, setShowAiModal] = useState(false);

  const handleGetLuckyNumber = async () => {
    setLoading(true);
    const data = await generateLuckyNumbers();
    setLuckyData(data);
    setLoading(false);
  };

  const toggleAiModal = () => {
      setShowAiModal(!showAiModal);
      if (!luckyData && !showAiModal) {
          // Optional: Auto fetch when opening? No, let user click.
      }
  }

  const menuItems = [
    { title: 'แทงหวย', icon: 'calculator', action: 'betting' },
    { title: 'แทงหวยชุด', icon: 'money', action: 'betting' },
    { title: 'เลขเด็ด AI', icon: 'magic', action: 'ai-modal' }, // AI Feature moved here
    { title: 'โบนัส', icon: 'gift', action: 'jackpot' },
    { title: 'ผลรางวัล', icon: 'badge', action: 'results' },
    { title: 'โพยหวย', icon: 'receipt', action: 'poy' },
    { title: 'สร้างเลขชุด', icon: 'list', action: 'number-sets' },
    { title: 'แนะนำเพื่อน', icon: 'hands', action: 'affiliate' },
    { title: 'ชวนเพื่อน', icon: 'user-plus', action: 'invite_friend' },
    { title: 'ช่วยเหลือ', icon: 'help', action: 'help' },
  ];

  const renderIcon = (name: string) => {
      switch(name) {
          case 'calculator': return <svg className="w-8 h-8 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H10zm4-5a1 1 0 100 2h.01a1 1 0 100-2H14zM7 7a1 1 0 100 2h.01a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>;
          case 'crown': return <svg className="w-8 h-8 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>;
          case 'diamond': return <svg className="w-8 h-8 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path d="M11 2a1 1 0 01.8.4l3.5 5a1 1 0 01-.15 1.26L9.63 14.28a1 1 0 01-1.26 0L2.85 8.66A1 1 0 012.7 7.4l3.5-5A1 1 0 017 2h4zm2 14.5a1 1 0 110-2 1 1 0 010 2z"></path></svg>; // Generic shape replacement
          case 'money': return <svg className="w-8 h-8 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path></svg>;
          case 'magic': return <svg className="w-8 h-8 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 9a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-4a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V6h-1a1 1 0 110-2h1V3a1 1 0 011-1z" clipRule="evenodd"></path></svg>;
          case 'gift': return <svg className="w-8 h-8 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>;
          case 'badge': return <svg className="w-8 h-8 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>;
          case 'receipt': return <svg className="w-8 h-8 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path></svg>;
          case 'list': return <svg className="w-8 h-8 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>;
          case 'hands': return <svg className="w-8 h-8 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>;
          case 'user-plus': return <svg className="w-8 h-8 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>;
          case 'help': return <svg className="w-8 h-8 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>;
          default: return null;
      }
  }

  const handleMenuClick = (action: string) => {
      if (action === 'ai-modal') {
          toggleAiModal();
      } else if (onNavigate) {
          onNavigate(action as PageView);
      }
  };

  return (
    <div className="min-h-screen bg-[#111] font-sans pb-20">
        
        {/* Top Header Bar */}
        <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[50px] shadow-md relative z-50 flex items-center justify-between px-2 sm:px-4 sticky top-0">
            <div className="flex items-center gap-3">
                {/* Logo */}
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => onNavigate && onNavigate('landing')}>
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gold-300 shadow-sm">
                        <span className="text-[#eebf34] font-serif font-bold text-xl">S</span>
                    </div>
                    <span className="text-black font-black text-2xl tracking-tight hidden sm:block">SUAY</span>
                </div>
                
                {/* Jackpot Ticker */}
                <div className="bg-[#333] hover:bg-[#222] text-white px-3 py-1 rounded cursor-pointer border border-gray-600 hidden md:flex items-center gap-2 transition shadow-inner">
                    <span className="text-gray-300 text-xs italic">ลุ้น Jackpot</span>
                    <span className="text-[#eebf34] font-bold text-sm tracking-wider">1,000,000</span>
                    <span className="text-gray-400 text-[10px]">คลิก!!</span>
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* Balance Badge */}
                <div className="bg-[#555] rounded px-3 py-1 text-white text-sm flex items-center gap-1 border border-gray-600 shadow-inner">
                    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                    <span className="font-bold">0.00 ฿</span>
                </div>

                {/* Support */}
                <button className="text-black hover:text-white transition" title="ติดต่อเรา">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                </button>

                {/* Profile Widget */}
                <div className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-2 py-1 rounded cursor-pointer transition" onClick={() => onNavigate && onNavigate('profile')}>
                    <div className="w-8 h-8 bg-gray-200 rounded overflow-hidden border border-gray-400">
                        <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                    </div>
                    <div className="flex flex-col leading-none hidden sm:flex">
                        <span className="text-[10px] text-black font-bold">สวัสดี!</span>
                        <span className="text-xs text-white font-bold tracking-wide">{username || 'GR726162'}</span>
                    </div>
                </div>

                {/* Lang */}
                <div className="bg-white rounded px-2 py-1 flex items-center gap-1 cursor-pointer shadow-sm">
                     <img src="https://flagcdn.com/w40/th.png" className="w-5 h-3.5 shadow-sm rounded-sm" alt="TH" />
                     <span className="text-gray-800 text-xs font-bold">ไทย</span>
                     <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </div>

                {/* Menu Toggle */}
                <button onClick={onLogout} className="bg-[#333] hover:bg-[#444] text-white p-2 rounded shadow-sm border border-gray-600 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </header>

        {/* Hero Section */}
        <div className="max-w-[1200px] mx-auto px-2 sm:px-4 mt-4">
            <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 overflow-hidden flex flex-col md:flex-row shadow-lg">
                
                {/* Left: Status Card */}
                <div className="flex-1 p-6 relative overflow-hidden bg-black">
                    {/* Gold Abstract Bg */}
                    <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/gold-scale.png')]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                    
                    <div className="relative z-10 flex flex-col justify-center h-full">
                        <div className="inline-block bg-[#333] text-[#b08528] px-3 py-1 rounded-full text-xs font-bold mb-2 border border-[#b08528] self-start">
                            {username || 'GR726162'}
                        </div>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-bold text-[#eebf34] drop-shadow-md font-mono">0.00</span>
                            <span className="text-2xl font-bold text-[#b08528]">฿</span>
                        </div>
                        <div className="inline-flex items-center gap-1 bg-white rounded-full px-3 py-1 self-start shadow-sm">
                             <div className="w-4 h-4 rounded-full bg-gray-300 text-[10px] flex items-center justify-center font-bold">P</div>
                             <span className="text-black text-xs font-bold">Reward 0 P</span>
                        </div>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="w-full md:w-[350px] bg-[#111] border-l border-gray-700 p-4 flex flex-col gap-3 justify-center">
                    <button 
                        onClick={() => onNavigate && onNavigate('deposit')}
                        className="w-full bg-gradient-to-b from-[#eebf34] via-[#d4a017] to-[#b08528] hover:from-[#fcd34d] hover:to-[#ca8a04] text-[#3e2e04] font-bold text-lg py-3 rounded shadow-lg border border-[#bfa15f] flex items-center justify-center gap-2 transition transform active:scale-98"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
                        เติมเงิน
                    </button>
                    <button 
                         onClick={() => onNavigate && onNavigate('withdraw')}
                         className="w-full bg-gradient-to-b from-[#e0e0e0] to-[#a0a0a0] hover:from-[#f0f0f0] hover:to-[#b0b0b0] text-gray-800 font-bold text-lg py-3 rounded shadow-lg border border-gray-400 flex items-center justify-center gap-2 transition transform active:scale-98"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                        ถอนเงิน
                    </button>
                </div>
            </div>
        </div>

        {/* Menu Grid */}
        <div className="max-w-[1200px] mx-auto px-2 sm:px-4 mt-6">
            <div className="bg-[#222] p-1 rounded-t-lg"></div> {/* Decorative Top Line */}
            <div className="bg-white rounded-b-lg shadow-xl overflow-hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 divide-x divide-y divide-gray-100 border border-gray-200">
                {menuItems.map((item, idx) => (
                    <div 
                        key={idx}
                        onClick={() => handleMenuClick(item.action)} 
                        className="group flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-yellow-50 transition duration-200 h-32 relative"
                    >
                        <div className="mb-3 transform group-hover:scale-110 transition duration-300 drop-shadow-sm">
                            {renderIcon(item.icon)}
                        </div>
                        <span className="text-gray-600 font-bold text-sm group-hover:text-[#b08528] transition">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* AI Modal */}
        {showAiModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl border-2 border-[#b08528] relative">
                    <button 
                        onClick={toggleAiModal}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    <div className="bg-gradient-to-r from-[#eebf34] to-[#b08528] p-6 text-center">
                        <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-md">🔮 SUAY AI</h2>
                        <p className="text-[#3e2e04] text-sm font-medium">ระบบวิเคราะห์เลขเด็ดอัจฉริยะ</p>
                    </div>

                    <div className="p-8 text-center">
                        {!luckyData ? (
                            <div className="py-8">
                                <p className="text-gray-600 mb-6">ให้ AI ช่วยคำนวณเลขมงคลประจำวันของคุณ</p>
                                <button 
                                    onClick={handleGetLuckyNumber} 
                                    disabled={loading}
                                    className="bg-black text-[#eebf34] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                            กำลังคำนวณ...
                                        </>
                                    ) : 'วิเคราะห์เลขเด็ด'}
                                </button>
                            </div>
                        ) : (
                            <div className="animate-fade-in">
                                <div className="text-[#b08528] text-sm mb-2 font-bold uppercase tracking-widest">เลขเด่นของคุณ</div>
                                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#b08528] to-[#8f6b1f] drop-shadow-sm mb-6">
                                    {luckyData.mainNumber}
                                </div>
                                <div className="flex justify-center gap-3 mb-6">
                                    {luckyData.secondaryNumbers.map((num: string, idx: number) => (
                                        <span key={idx} className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-bold shadow-sm">
                                            {num}
                                        </span>
                                    ))}
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                    <p className="text-gray-700 italic text-sm">"{luckyData.reasoning}"</p>
                                </div>
                                <button 
                                    onClick={() => setLuckyData(null)} 
                                    className="mt-6 text-gray-500 hover:text-[#b08528] text-sm font-medium underline"
                                >
                                    ลองใหม่อีกครั้ง
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}

    </div>
  );
};