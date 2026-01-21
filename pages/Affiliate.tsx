import React, { useState } from 'react';
import { Button } from '../components/Button';

interface AffiliateProps {
  onBack: () => void;
  username: string;
}

export const Affiliate: React.FC<AffiliateProps> = ({ onBack, username }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'income' | 'withdraw'>('overview');
  const referralLink = `https://www.baanhuay.com/register/aff/${username || 'GR726162'}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert('คัดลอกลิงค์แนะนำเพื่อนเรียบร้อยแล้ว');
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] font-sans pb-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      
      {/* Header Bar */}
      <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[50px] shadow-md relative z-50 flex items-center justify-between px-2 sm:px-4 sticky top-0">
            <div className="flex items-center gap-3">
                {/* Logo */}
                <div className="flex items-center gap-1 cursor-pointer" onClick={onBack}>
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gold-300 shadow-sm">
                        <span className="text-[#eebf34] font-serif font-bold text-xl">B</span>
                    </div>
                    <span className="text-black font-black text-2xl tracking-tight hidden sm:block">บ้านหวย</span>
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
                <div className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-2 py-1 rounded cursor-pointer transition">
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
                <button className="bg-[#333] hover:bg-[#444] text-white p-2 rounded shadow-sm border border-gray-600 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-[#2a2a2a] text-gray-400 py-1.5 px-4 shadow-inner border-b border-gray-700">
         <div className="max-w-[1200px] mx-auto flex items-center gap-1 text-xs cursor-pointer hover:text-white transition" onClick={onBack}>
             <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
             หน้าหลัก
         </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 mt-4">
        
        {/* Title */}
        <div className="bg-white rounded p-3 mb-2 shadow-sm border border-gray-200">
             <div className="flex items-center gap-2">
                <span className="text-[#b08528] text-2xl">👍</span>
                <h1 className="text-[#b08528] font-bold text-xl">แนะนำเพื่อน</h1>
            </div>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <button 
                onClick={() => setActiveTab('overview')}
                className={`flex flex-col items-center justify-center p-3 rounded border transition ${
                    activeTab === 'overview' 
                    ? 'bg-[#b08528] text-white border-[#b08528] shadow-md' 
                    : 'bg-white text-[#b08528] border-[#b08528] hover:bg-yellow-50'
                }`}
            >
                <svg className="w-8 h-8 mb-1" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                <span className="text-sm font-bold">ภาพรวม</span>
            </button>

            <button 
                onClick={() => setActiveTab('members')}
                className={`flex flex-col items-center justify-center p-3 rounded border transition ${
                    activeTab === 'members' 
                    ? 'bg-[#b08528] text-white border-[#b08528] shadow-md' 
                    : 'bg-white text-[#b08528] border-[#b08528] hover:bg-yellow-50'
                }`}
            >
                <svg className="w-8 h-8 mb-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 3.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 8a2 2 0 100-4 2 2 0 000 4zm2 1.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM4 14.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75v-1.5zm6 0a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75v-1.5z" clipRule="evenodd"></path></svg>
                <span className="text-sm font-bold">ที่สมัคร</span>
            </button>

            <button 
                onClick={() => setActiveTab('income')}
                className={`flex flex-col items-center justify-center p-3 rounded border transition ${
                    activeTab === 'income' 
                    ? 'bg-[#b08528] text-white border-[#b08528] shadow-md' 
                    : 'bg-white text-[#b08528] border-[#b08528] hover:bg-yellow-50'
                }`}
            >
                <svg className="w-8 h-8 mb-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                <span className="text-sm font-bold">รายได้</span>
            </button>

            <button 
                onClick={() => setActiveTab('withdraw')}
                className={`flex flex-col items-center justify-center p-3 rounded border transition ${
                    activeTab === 'withdraw' 
                    ? 'bg-[#b08528] text-white border-[#b08528] shadow-md' 
                    : 'bg-white text-[#b08528] border-[#b08528] hover:bg-yellow-50'
                }`}
            >
                 <svg className="w-8 h-8 mb-1" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path></svg>
                <span className="text-sm font-bold">ถอนรายได้</span>
            </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-4">
            {/* Box 1 - Dark */}
            <div className="bg-[#666] rounded border border-gray-600 text-center py-2 flex flex-col justify-center">
                <div className="text-xs text-white mb-0.5 font-bold">ส่วนแบ่งรายได้:</div>
                <div className="text-[#eebf34] font-black text-xl leading-none">8%</div>
            </div>

            {/* Box 2 - White */}
            <div className="bg-white rounded border border-gray-300 text-center py-2 flex flex-col justify-center shadow-sm">
                <div className="text-xs text-black mb-0.5 font-bold">รายได้ทั้งหมด</div>
                <div className="text-[#007bff] font-bold text-lg leading-none">฿ 0</div>
            </div>

            {/* Box 3 - White */}
            <div className="bg-white rounded border border-gray-300 text-center py-2 flex flex-col justify-center shadow-sm">
                <div className="text-xs text-black mb-0.5 font-bold">รายได้ปัจจุบัน</div>
                <div className="text-[#28a745] font-bold text-lg leading-none">฿ 0</div>
            </div>

            {/* Box 4 - White */}
            <div className="bg-white rounded border border-gray-300 text-center py-2 flex flex-col justify-center shadow-sm">
                <div className="text-xs text-black mb-0.5 font-bold">สมาชิกแนะนำ</div>
                <div className="text-[#007bff] font-bold text-lg leading-none">0</div>
            </div>

            {/* Box 5 - White */}
            <div className="bg-white rounded border border-gray-300 text-center py-2 flex flex-col justify-center shadow-sm">
                <div className="text-xs text-black mb-0.5 font-bold">แทงทั้งหมด</div>
                <div className="text-[#007bff] font-bold text-lg leading-none">฿ 0</div>
            </div>

            {/* Box 6 - White */}
            <div className="bg-white rounded border border-gray-300 text-center py-2 flex flex-col justify-center shadow-sm">
                <div className="text-xs text-black mb-0.5 font-bold">คลิกทั้งหมด</div>
                <div className="text-[#007bff] font-bold text-lg leading-none">0</div>
            </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="bg-white rounded shadow-sm border border-gray-300 min-h-[400px]">
             
             {activeTab === 'overview' && (
                 <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-800 border-l-4 border-[#b08528] pl-3 mb-6">ภาพรวมระบบแนะนำเพื่อน</h2>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6">
                         <h3 className="text-gray-800 text-sm font-bold mb-3">แชร์ลิงค์แนะนำเพื่อน</h3>
                         <div className="flex flex-col md:flex-row gap-2">
                             <input 
                                type="text" 
                                value={referralLink} 
                                readOnly 
                                className="flex-1 bg-white border border-gray-300 text-gray-600 text-sm p-2 rounded focus:outline-none"
                             />
                             <button 
                                onClick={handleCopy}
                                className="bg-[#212529] hover:bg-black text-white text-sm font-bold py-2 px-6 rounded transition flex items-center justify-center gap-2"
                             >
                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                 คัดลอกลิงค์
                             </button>
                         </div>
                         <p className="text-xs text-gray-500 mt-2">
                            * หากพบปัญหา ลิงค์ถูกแบนจาก google, facebook หรือช่องทางอื่นๆ ให้ส่งลิงค์แนะนำเพื่อนของท่าน มายังอีเมล์ <span className="font-bold">marketing.baanhuay@gmail.com</span>
                         </p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm text-blue-800">
                            <p className="font-bold mb-2">📢 เงื่อนไขและการรับรายได้ 8%</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>ท่านจะได้รับส่วนแบ่ง 8% จากยอดแทงของสมาชิกที่สมัครผ่านลิงค์แนะนำของท่าน</li>
                                <li>รายได้จะถูกคำนวณทันทีที่มีการแทง</li>
                            </ul>
                        </div>
                    </div>
                 </div>
             )}

             {activeTab === 'members' && (
                 <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-800 border-l-4 border-[#b08528] pl-3 mb-6">สมาชิกที่สมัคร</h2>
                    <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 border-b">User</th>
                                <th className="px-6 py-3 border-b">วันที่สมัคร</th>
                                <th className="px-6 py-3 border-b">สถานะ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3} className="px-6 py-8 text-center text-gray-400 italic">
                                    ยังไม่มีสมาชิกที่แนะนำ
                                </td>
                            </tr>
                        </tbody>
                    </table>
                 </div>
             )}

             {activeTab === 'income' && (
                 <div className="p-6">
                     <h2 className="text-lg font-bold text-gray-800 border-l-4 border-[#b08528] pl-3 mb-6">ประวัติรายได้</h2>
                     <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 border-b">วันที่</th>
                                <th className="px-6 py-3 border-b">จากสมาชิก</th>
                                <th className="px-6 py-3 border-b">ประเภทหวย</th>
                                <th className="px-6 py-3 border-b text-right">จำนวนเงิน (8%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-400 italic">
                                    ไม่มีรายการรายได้
                                </td>
                            </tr>
                        </tbody>
                    </table>
                 </div>
             )}

             {activeTab === 'withdraw' && (
                 <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-800 border-l-4 border-[#b08528] pl-3 mb-6">แจ้งถอนรายได้</h2>
                    <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">จำนวนเงินที่ต้องการถอน</label>
                            <div className="relative">
                                <input 
                                    type="number" 
                                    className="block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b08528] pl-8" 
                                    placeholder="0.00" 
                                    min="100"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">฿</div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">* ถอนขั้นต่ำ 100 บาท</p>
                        </div>
                        <div className="flex justify-between items-center mb-6 text-sm">
                            <span className="text-gray-600">ยอดรายได้คงเหลือ:</span>
                            <span className="font-bold text-[#b08528]">0.00 บาท</span>
                        </div>
                        <Button className="w-full">
                            แจ้งถอนรายได้
                        </Button>
                    </div>
                 </div>
             )}
        </div>

      </div>
    </div>
  );
};