import React, { useState } from 'react';
import { Captcha } from '../components/Captcha';

interface RegisterProps {
  onBack: () => void;
  onRegisterSuccess: (username: string, password: string) => void;
}

export const Register: React.FC<RegisterProps> = ({ onBack, onRegisterSuccess }) => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [captchaValid, setCaptchaValid] = useState(false);
  const [reloadCaptcha, setReloadCaptcha] = useState(0);

  const handleNextStep1 = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)');
      return;
    }
    // In a real app, validate CAPTCHA here
    setStep(2);
  };

  const handleNextStep2 = () => {
    if (otp.length !== 4) {
      alert('กรุณากรอกรหัส OTP 4 หลัก (Simulation: 1234)');
      return;
    }
    setStep(3);
  };

  const handleSubmit = () => {
    if (!username || username.length < 6) {
      alert('ชื่อผู้ใช้ต้องมีความยาวอย่างน้อย 6 ตัวอักษร');
      return;
    }
    if (!password || password.length < 6) {
      alert('รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร');
      return;
    }
    if (password !== confirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }
    onRegisterSuccess(username, password);
  };

  const payoutTables = [
    {
      title: "จ่ายสูงที่สุด บาทละ 900",
      subtitle: "หวยรัฐบาลไทย",
      rows: [
        { type: "3 ตัวบน", price: "บาทละ", pay: "900", unit: "บาท" },
        { type: "3 ตัวโต๊ด", price: "บาทละ", pay: "150", unit: "บาท" },
        { type: "3 ตัวล่าง", price: "บาทละ", pay: "450", unit: "บาท" },
        { type: "3 ตัวหน้า", price: "บาทละ", pay: "450", unit: "บาท" },
        { type: "2 ตัวบน", price: "บาทละ", pay: "90", unit: "บาท" },
        { type: "2 ตัวล่าง", price: "บาทละ", pay: "90", unit: "บาท" },
        { type: "วิ่งบน", price: "บาทละ", pay: "3.2", unit: "บาท" },
        { type: "วิ่งล่าง", price: "บาทละ", pay: "4.2", unit: "บาท" },
      ]
    },
    {
      title: "โปรโมชั่นจ่ายหนัก",
      subtitle: "หวยยี่กี",
      rows: [
        { type: "3 ตัวบน", price: "บาทละ", pay: "850", unit: "บาท" },
        { type: "3 ตัวโต๊ด", price: "บาทละ", pay: "120", unit: "บาท" },
        { type: "2 ตัวบน", price: "บาทละ", pay: "92", unit: "บาท" },
        { type: "2 ตัวล่าง", price: "บาทละ", pay: "92", unit: "บาท" },
        { type: "วิ่งบน", price: "บาทละ", pay: "3.2", unit: "บาท" },
        { type: "วิ่งล่าง", price: "บาทละ", pay: "4.2", unit: "บาท" },
      ]
    },
    {
      title: "โปรโมชั่นจ่ายหนัก",
      subtitle: "หวยฮานอย/หวยหุ้น",
      rows: [
        { type: "3 ตัวบน", price: "บาทละ", pay: "850", unit: "บาท" },
        { type: "3 ตัวโต๊ด", price: "บาทละ", pay: "120", unit: "บาท" },
        { type: "2 ตัวบน", price: "บาทละ", pay: "92", unit: "บาท" },
        { type: "2 ตัวล่าง", price: "บาทละ", pay: "92", unit: "บาท" },
        { type: "วิ่งบน", price: "บาทละ", pay: "3.2", unit: "บาท" },
        { type: "วิ่งล่าง", price: "บาทละ", pay: "4.2", unit: "บาท" },
      ]
    }
  ];

  const categories = [
    { text: "หวยรัฐ บาลละ 900 [ดูราคา]" },
    { text: "หวยยี่กี บาลละ 850 [ดูราคา]" },
    { text: "ฮานอย/หวยหุ้น บาลละ 850 [ดูราคา]" },
    { text: "หวยชุดลาว ชุดละ 120 [ดูราคา]" },
  ];

  return (
    <div className="min-h-screen bg-[#111] font-sans">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[60px] shadow-md relative z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
             <div className="w-10 h-10 bg-black rounded flex items-center justify-center border border-[#fwd] shadow-sm">
                <span className="text-[#eebf34] font-serif font-bold text-2xl">B</span>
            </div>
            <span className="text-black font-black text-3xl tracking-tight">บ้านหวย</span>
          </div>
          <div className="text-white text-xl font-medium drop-shadow-md">
            สมัครสมาชิก
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 py-6">
        <div className="bg-white rounded shadow-lg p-6">
          
          {/* Header Progress */}
          <div className="flex items-center gap-2 mb-6">
             <span className="bg-[#eebf34] text-black font-bold px-3 py-1 rounded-full text-sm">STEP {step}</span>
             <span className="text-[#b08528] font-bold text-lg">
                {step === 1 && "ระบุเบอร์โทร"}
                {step === 2 && "ยืนยัน OTP"}
                {step === 3 && "สร้างบัญชี"}
             </span>
          </div>

          {/* Steps Content */}
          <div className="border-b border-gray-200 pb-8 mb-6">
             
             {/* STEP 1: Phone & Captcha */}
             {step === 1 && (
                 <>
                    <div className="mb-6">
                        <label className="flex items-center gap-2 text-gray-800 font-bold mb-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                            ลงทะเบียนเบอร์โทรศัพท์
                        </label>
                        <div className="flex items-center gap-2 max-w-xl">
                            <div className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded px-3 py-2 text-gray-700 min-w-[80px] justify-center">
                                <img src="https://flagcdn.com/w40/th.png" className="w-6 shadow-sm" alt="TH" />
                                <span className="font-bold">+66</span>
                            </div>
                            <input 
                                type="tel" 
                                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#eebf34]"
                                placeholder="ใส่เบอร์โทรศัพท์"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <p className="text-gray-500 text-xs mt-2">* ระบบจะส่งรหัส OTP ไปยังเบอร์โทรศัพท์นี้เพื่อยืนยันตัวตน</p>
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center gap-2 text-gray-800 font-bold mb-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            กรุณากรอกตัวเลข 4 ตัวในภาพ
                        </label>
                        <div className="flex flex-col sm:flex-row items-start gap-4 max-w-xl">
                            <div className="bg-gray-100 p-1 rounded border border-gray-300">
                                <Captcha onValidate={() => {}} reloadTrigger={reloadCaptcha} />
                            </div>
                            <input 
                                type="text" 
                                className="flex-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#eebf34]"
                                placeholder="กรุณากรอกตัวเลข 4 ตัวในภาพ"
                            />
                        </div>
                    </div>
                    
                    <div className="mb-8">
                        <button 
                            onClick={handleNextStep1}
                            className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-2.5 px-10 rounded shadow-md transition text-lg flex items-center gap-2 transform active:scale-95"
                        >
                            ถัดไป <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button>
                    </div>
                 </>
             )}

             {/* STEP 2: OTP */}
             {step === 2 && (
                 <>
                    <div className="bg-yellow-50 border border-[#eebf34] rounded p-4 mb-6 max-w-xl">
                        <p className="text-sm text-gray-800">
                            ระบบได้ส่งรหัส OTP ไปยังหมายเลข <span className="font-bold text-[#b08528]">{phoneNumber}</span> แล้ว
                        </p>
                        <p className="text-xs text-gray-500 mt-1">(รหัสอ้างอิง: REF-8821)</p>
                    </div>

                    <div className="mb-6">
                         <label className="block text-gray-700 font-bold mb-2">รหัส OTP (4 หลัก)</label>
                         <input 
                            type="text" 
                            className="w-full max-w-xs text-center text-2xl tracking-widest border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#eebf34]"
                            placeholder="XXXX"
                            maxLength={4}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                         />
                         <p className="text-gray-400 text-xs mt-2 cursor-pointer hover:underline">ขอรหัส OTP ใหม่</p>
                    </div>

                    <div className="mb-8 flex gap-4">
                        <button 
                            onClick={() => setStep(1)}
                            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2.5 px-6 rounded shadow-md transition"
                        >
                            ย้อนกลับ
                        </button>
                        <button 
                            onClick={handleNextStep2}
                            className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-2.5 px-10 rounded shadow-md transition text-lg flex items-center gap-2 transform active:scale-95"
                        >
                            ยืนยัน OTP
                        </button>
                    </div>
                 </>
             )}

             {/* STEP 3: Create Account */}
             {step === 3 && (
                 <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-6">
                         <div>
                             <label className="block text-gray-700 font-bold mb-2">ชื่อผู้ใช้งาน (Username)</label>
                             <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                </div>
                                <input 
                                    type="text" 
                                    className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#eebf34]"
                                    placeholder="ภาษาอังกฤษหรือตัวเลขอย่างน้อย 6 ตัว"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                             </div>
                         </div>
                         <div className="hidden md:block"></div>

                         <div>
                             <label className="block text-gray-700 font-bold mb-2">รหัสผ่าน (Password)</label>
                             <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                                </div>
                                <input 
                                    type="password" 
                                    className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#eebf34]"
                                    placeholder="อย่างน้อย 6 ตัวอักษร"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                             </div>
                         </div>

                         <div>
                             <label className="block text-gray-700 font-bold mb-2">ยืนยันรหัสผ่าน (Confirm Password)</label>
                             <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                                </div>
                                <input 
                                    type="password" 
                                    className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#eebf34]"
                                    placeholder="กรอกรหัสผ่านอีกครั้ง"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                             </div>
                         </div>
                    </div>

                    <div className="mb-8">
                        <button 
                            onClick={handleSubmit}
                            className="bg-gradient-to-r from-[#eebf34] to-[#b08528] hover:from-[#fcd34d] hover:to-[#ca8a04] text-[#3e2e04] font-bold py-3 px-12 rounded shadow-lg transition text-lg transform active:scale-95 border border-[#bfa15f]"
                        >
                            สมัครสมาชิก
                        </button>
                    </div>
                 </>
             )}

             <div className="flex gap-4 overflow-x-auto pb-2">
                {categories.map((cat, idx) => (
                    <button key={idx} className="flex-1 whitespace-nowrap min-w-[200px] border border-[#eebf34] text-[#b08528] bg-white hover:bg-[#fff9e6] font-bold py-2 px-4 rounded text-sm transition">
                        {cat.text}
                    </button>
                ))}
             </div>
          </div>

          {/* Tables Section - Always visible to encourage signup */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80 hover:opacity-100 transition">
              {payoutTables.map((table, idx) => (
                  <div key={idx} className="bg-white">
                      <div className="text-center mb-2">
                          <h3 className="text-[#b08528] font-bold text-lg">{table.title}</h3>
                          <h4 className="text-black font-black text-xl">{table.subtitle}</h4>
                      </div>
                      
                      <div className="border border-gray-200 rounded overflow-hidden">
                          {/* Table Header */}
                          <div className="grid grid-cols-3 bg-gradient-to-b from-[#d4a017] to-[#b08528] text-white text-sm font-bold py-2 px-2 text-center">
                              <div>ประเภท</div>
                              <div>ราคา</div>
                              <div>อัตราจ่าย</div>
                          </div>
                          {/* Table Body */}
                          {table.rows.map((row, rIdx) => (
                              <div key={rIdx} className={`grid grid-cols-3 text-sm py-2 px-2 border-b border-gray-100 items-center ${rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                  <div className="font-medium text-gray-800 pl-2">{row.type}</div>
                                  <div className="text-gray-500 text-center">{row.price}</div>
                                  <div className="text-[#b08528] font-bold text-right pr-2">
                                      {row.pay} <span className="text-gray-400 font-normal text-xs">{row.unit}</span>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              ))}
          </div>

        </div>
      </div>
    </div>
  );
};