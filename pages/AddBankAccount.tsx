import React from 'react';

interface AddBankAccountProps {
  onBack: () => void;
  username: string;
}

export const AddBankAccount: React.FC<AddBankAccountProps> = ({ onBack, username }) => {
  return (
    <div className="min-h-screen bg-[#e5e5e5] font-sans pb-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      
      {/* 1. Header Bar (Logged In State) */}
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
             หน้าหลัก
         </div>
      </div>

      {/* 3. Main Content Card */}
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 mt-4">
          <div className="bg-white rounded shadow-sm border border-gray-300">
              
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 mb-3 sm:mb-0">
                      <div className="w-6 h-6 bg-[#b08528] rounded flex items-center justify-center text-white text-sm font-bold shadow-sm">
                          +
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                          <h2 className="text-[#b08528] font-bold text-lg">เพิ่มบัญชีธนาคาร</h2>
                          <span className="text-gray-500 text-xs">(เติมเครดิตครั้งแรก และเพิ่มบัญชีธนาคารอื่นๆ)</span>
                      </div>
                  </div>
                  <button className="bg-[#007bff] hover:bg-[#0069d9] text-white text-sm font-bold px-3 py-1.5 rounded shadow flex items-center gap-1 transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      เช็คสถานะบัญชี
                  </button>
              </div>

              {/* Form Content */}
              <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      
                      {/* Bank Select */}
                      <div>
                          <label className="block text-gray-500 text-sm font-bold mb-2 flex items-center gap-1">
                              <span className="text-gray-400 text-lg">🏛️</span> เลือกธนาคาร
                          </label>
                          <div className="relative">
                              <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-400 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm">
                                  <option>กรุณาเลือกธนาคาร</option>
                                  <option>กสิกรไทย (K-Bank)</option>
                                  <option>ไทยพาณิชย์ (SCB)</option>
                                  <option>กรุงเทพ (BBL)</option>
                                  <option>กรุงไทย (KTB)</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                              </div>
                          </div>
                      </div>

                      {/* Account Name */}
                      <div>
                          <label className="block text-gray-500 text-sm font-bold mb-2 flex items-center gap-1">
                              <span className="text-gray-400 text-lg">💳</span> ชื่อบัญชี
                          </label>
                          <input 
                            className="appearance-none border border-gray-300 rounded w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 text-sm" 
                            type="text" 
                            placeholder="ชื่อ นามสกุล หน้าสมุดบัญชี" 
                          />
                      </div>

                      {/* Account Number */}
                      <div>
                          <label className="block text-gray-500 text-sm font-bold mb-2 flex items-center gap-1">
                              <span className="text-gray-400 text-lg">☑️</span> เลขที่บัญชี
                          </label>
                          <input 
                            className="appearance-none border border-gray-300 rounded w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 text-sm" 
                            type="text" 
                            placeholder="ระบุเฉพาะตัวเลข" 
                          />
                      </div>

                      {/* Confirm Account Number */}
                      <div>
                          <label className="block text-gray-500 text-sm font-bold mb-2 flex items-center gap-1">
                              <span className="text-gray-400 text-lg">✔️</span> ยืนยันเลขที่บัญชี
                          </label>
                          <input 
                            className="appearance-none border border-gray-300 rounded w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 text-sm" 
                            type="text" 
                            placeholder="ยืนยันเลขที่บัญชีอีกครั้ง" 
                          />
                      </div>

                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={onBack}
                        className="bg-[#6c757d] hover:bg-[#5a6268] text-white font-bold py-2 px-4 rounded shadow transition text-sm"
                      >
                          ยกเลิก
                      </button>
                      <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-2 px-4 rounded shadow transition text-sm">
                          เพิ่มบัญชี
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};