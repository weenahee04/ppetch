import React, { useState } from 'react';
import { Button } from '../components/Button';

interface InviteFriendProps {
  onBack: () => void;
  username: string;
}

export const InviteFriend: React.FC<InviteFriendProps> = ({ onBack, username }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInvite = () => {
      if(phoneNumber.length < 10) {
          alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง');
          return;
      }
      alert('ส่งคำเชิญเรียบร้อยแล้ว');
      setPhoneNumber('');
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] font-sans pb-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      
      {/* Header Bar */}
      <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[50px] shadow-md relative z-50 flex items-center justify-between px-2 sm:px-4 sticky top-0">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 cursor-pointer" onClick={onBack}>
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gold-300 shadow-sm">
                        <span className="text-[#eebf34] font-serif font-bold text-xl">S</span>
                    </div>
                    <span className="text-black font-black text-2xl tracking-tight hidden sm:block">SUAY</span>
                </div>
                
                <div className="bg-[#333] hover:bg-[#222] text-white px-3 py-1 rounded cursor-pointer border border-gray-600 hidden md:flex items-center gap-2 transition shadow-inner">
                    <span className="text-gray-300 text-xs italic">ลุ้น Jackpot</span>
                    <span className="text-[#eebf34] font-bold text-sm tracking-wider">1,000,000</span>
                    <span className="text-gray-400 text-[10px]">คลิก!!</span>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="bg-[#555] rounded px-3 py-1 text-white text-sm flex items-center gap-1 border border-gray-600 shadow-inner">
                    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                    <span className="font-bold">0.00 ฿</span>
                </div>

                <button className="text-black hover:text-white transition" title="ติดต่อเรา">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                </button>

                <div className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-2 py-1 rounded cursor-pointer transition">
                    <div className="w-8 h-8 bg-gray-200 rounded overflow-hidden border border-gray-400">
                        <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                    </div>
                    <div className="flex flex-col leading-none hidden sm:flex">
                        <span className="text-[10px] text-black font-bold">สวัสดี!</span>
                        <span className="text-xs text-white font-bold tracking-wide">{username || 'GR726162'}</span>
                    </div>
                </div>

                <div className="bg-white rounded px-2 py-1 flex items-center gap-1 cursor-pointer shadow-sm">
                     <img src="https://flagcdn.com/w40/th.png" className="w-5 h-3.5 shadow-sm rounded-sm" alt="TH" />
                     <span className="text-gray-800 text-xs font-bold">ไทย</span>
                     <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </div>

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
                <h1 className="text-[#b08528] font-bold text-xl">ระบบชวนเพื่อน</h1>
            </div>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded shadow-sm border border-gray-200 p-6 min-h-[500px]">
            
            {/* Action Button */}
            <div className="mb-6">
                <button className="bg-gradient-to-b from-[#b08528] to-[#967020] text-white font-bold text-lg py-3 px-8 rounded shadow-lg border-b-4 border-[#6b5017] flex items-center gap-2 hover:translate-y-0.5 hover:shadow-md transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
                    ชวนเพื่อน
                    <span className="text-xs bg-white text-[#b08528] px-1.5 py-0.5 rounded ml-2">+</span>
                </button>
            </div>

            <hr className="border-gray-200 mb-6" />

            {/* Invite Form Section */}
            <div>
                <h2 className="flex items-center gap-2 text-xl font-bold text-gray-600 mb-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                    ชวนเพื่อนง่ายๆ แค่กรอกเบอร์
                </h2>

                {/* Blue Alert */}
                <div className="bg-[#d1ecf1] text-[#0c5460] border border-[#bee5eb] p-4 rounded mb-4 text-sm">
                    การชวนเพื่อนผ่านระบบ invite ท่านจะได้รับ % ตามเงื่อนไขของ affiliate ปกติ สามารถดู % ได้ที่นี่ <span className="font-bold underline cursor-pointer">คลิก</span> และสามารถชวนเพื่อนได้ 10 คนต่อวัน
                </div>

                {/* Red Alert */}
                <div className="bg-[#f8d7da] text-[#721c24] border border-[#f5c6cb] p-4 rounded mb-6 text-sm text-center font-bold">
                    !! ขณะนี้ระบบปิดรับสมัคร หากต้องการชวน "เพื่อน" กรุณากรอกเบอร์โทรศัพท์ด้านล่าง เพื่อรับลิงค์สมัครผ่าน SMS !!
                </div>

                {/* Form */}
                <div className="bg-gray-50 border border-gray-200 rounded p-6 max-w-2xl">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-full md:w-auto flex-shrink-0">
                            <label className="block text-gray-700 font-bold bg-gray-200 px-4 py-2.5 rounded border border-gray-300">
                                เบอร์โทรศัพท์
                            </label>
                        </div>
                        <input 
                            type="tel" 
                            className="flex-1 w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                            placeholder="กรุณากรอกเบอร์โทรศัพท์ 10 หลัก"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            maxLength={10}
                        />
                    </div>

                    <div className="mt-6">
                        <button 
                            onClick={handleInvite}
                            className="w-full bg-[#007bff] hover:bg-[#0069d9] text-white font-bold py-3 rounded shadow transition flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
                            ชวนเพื่อน
                        </button>
                    </div>
                </div>

            </div>

        </div>

      </div>
    </div>
  );
};