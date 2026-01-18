import React from 'react';

interface ProfileProps {
  onBack: () => void;
  username: string;
}

export const Profile: React.FC<ProfileProps> = ({ onBack, username }) => {
  return (
    <div className="min-h-screen bg-[#e5e5e5] font-sans pb-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      
      {/* 1. Header Bar (Logged In State) - Reused for consistency */}
      <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[50px] shadow-md relative z-50">
        <div className="max-w-full px-2 sm:px-4 h-full flex items-center justify-between">
          
          {/* Left Side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
                <div className="w-7 h-7 bg-black rounded flex items-center justify-center border border-gold-300 shadow-sm">
                    <span className="text-[#eebf34] font-serif font-bold text-lg">S</span>
                </div>
                <span className="text-black font-black text-xl tracking-tight font-sans">SUAY</span>
            </div>
            
            {/* Jackpot Button */}
            <div className="hidden sm:flex bg-[#333] hover:bg-[#444] text-white text-xs px-3 py-1.5 rounded cursor-pointer border border-gray-600 items-center gap-2 transition">
                <span className="text-gray-300">ลุ้น Jackpot</span>
                <span className="text-[#eebf34] font-bold text-sm">1,000,000</span>
                <span className="text-gray-400 text-[10px]">คลิก!!</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Credit Badge */}
            <div className="flex items-center bg-[#555] rounded px-2 py-1 text-white text-xs gap-1 border border-gray-600">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                <span className="font-mono font-bold">0.00 ฿</span>
            </div>

            {/* Support Icon */}
            <button className="p-1 text-black hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded">
                <div className="w-6 h-6 bg-gray-300 rounded overflow-hidden">
                    <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                </div>
                <div className="flex flex-col leading-none">
                    <span className="text-[10px] text-black font-bold">สวัสดี!</span>
                    <span className="text-xs text-white font-bold">{username || 'GR726162'}</span>
                </div>
            </div>

            {/* Lang */}
            <div className="hidden sm:flex items-center bg-white rounded px-2 py-1 gap-1 cursor-pointer shadow-sm">
                <img src="https://flagcdn.com/w40/th.png" className="w-5 h-auto rounded-sm" alt="TH" />
                <span className="text-gray-800 text-xs font-bold">ไทย</span>
                <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </div>

            {/* Menu */}
            <button className="bg-[#333] hover:bg-[#444] text-white p-1.5 rounded shadow-sm border border-gray-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Breadcrumb Bar */}
      <div className="bg-[#2a2a2a] text-gray-400 py-2 px-4 shadow-inner border-b border-gray-700">
         <div className="max-w-[1200px] mx-auto flex items-center gap-1 text-sm cursor-pointer hover:text-white transition" onClick={onBack}>
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
             ย้อนกลับ
         </div>
      </div>

      {/* 3. Main Content */}
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 mt-4">
        
        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
            <div className="text-[#b08528] text-xl">
               <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
            </div>
            <h1 className="text-[#b08528] text-xl font-bold">ตั้งค่าบัญชีผู้ใช้</h1>
        </div>

        <div className="bg-white rounded shadow border border-gray-300 p-6">
            
            {/* Section 1: Profile Management */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    <h2 className="font-bold text-lg text-black">จัดการโปรไฟล์</h2>
                </div>

                <div className="flex flex-col items-center mb-6">
                    <div className="relative w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow">
                        <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                        <button className="absolute bottom-0 right-0 bg-[#3b5998] hover:bg-[#2d4373] text-white p-1.5 rounded-full shadow-sm border-2 border-white">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1">ชื่อผู้ใช้งาน <span className="text-gray-400 font-normal text-xs">username</span></label>
                        <input type="text" value={username || "GR726162"} readOnly className="w-full bg-gray-200 border border-gray-300 rounded px-3 py-2 text-gray-600 focus:outline-none" />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1">ชื่อจริง</label>
                        <input type="text" className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 focus:bg-white transition" />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1">นามสกุล</label>
                        <input type="text" className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 focus:bg-white transition" />
                    </div>

                    <div>
                         <label className="block text-gray-700 text-sm font-bold mb-1">วัน/เดือน/ปี เกิด</label>
                         <div className="flex gap-2">
                             <select className="flex-1 bg-white border border-gray-300 rounded px-2 py-2 text-sm focus:outline-none focus:border-blue-400">
                                 <option>วัน</option>
                                 {[...Array(31)].map((_, i) => <option key={i}>{i+1}</option>)}
                             </select>
                             <select className="flex-1 bg-white border border-gray-300 rounded px-2 py-2 text-sm focus:outline-none focus:border-blue-400">
                                 <option>เดือน</option>
                                 {['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'].map((m) => <option key={m}>{m}</option>)}
                             </select>
                             <select className="flex-1 bg-white border border-gray-300 rounded px-2 py-2 text-sm focus:outline-none focus:border-blue-400">
                                 <option>ปี</option>
                                 {[...Array(80)].map((_, i) => <option key={i}>{2569 - i}</option>)}
                             </select>
                         </div>
                    </div>

                    <div>
                         <label className="block text-gray-700 text-sm font-bold mb-1">อีเมล์</label>
                         <input type="email" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400" />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1">เบอร์โทรศัพท์</label>
                        <input type="text" value="092864xxxx" readOnly className="w-full bg-gray-200 border border-gray-300 rounded px-3 py-2 text-gray-600 focus:outline-none" />
                    </div>
                </div>
            </div>

            <hr className="border-gray-200 mb-8" />

            {/* Section 2: Password Management */}
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-6">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 000-2z" clipRule="evenodd"></path></svg>
                    <h2 className="font-bold text-lg text-black">จัดการรหัสผ่าน</h2>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1">รหัสผ่านเดิม</label>
                        <input type="password" value="12345678" readOnly className="w-full bg-[#e8f0fe] border border-blue-200 rounded px-3 py-2 text-gray-800 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1">รหัสผ่านใหม่</label>
                        <input type="password" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1">ยืนยันรหัสผ่านใหม่</label>
                        <input type="password" className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400" />
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="mt-8">
                <button className="w-full bg-[#5daafc] hover:bg-[#4a90e2] text-white font-bold py-2.5 rounded shadow flex items-center justify-center gap-2 transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"></path></svg>
                    บันทึก
                </button>
            </div>
            
        </div>
      </div>
    </div>
  );
};