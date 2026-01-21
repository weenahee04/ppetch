import React from 'react';

interface ContactProps {
  onBack: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#e5e5e5] font-sans pb-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[50px] shadow-md relative z-50 flex items-center justify-between px-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
             <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gold-300 shadow-sm">
                <span className="text-[#eebf34] font-serif font-bold text-lg">B</span>
            </div>
            <span className="text-black font-black text-2xl tracking-tight font-sans">บ้านหวย</span>
          </div>
          <div className="text-white font-bold text-lg drop-shadow-md">ติดต่อเรา</div>
      </header>

      <div className="max-w-[600px] mx-auto px-4 mt-8">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center border border-gray-200">
            <div className="w-20 h-20 bg-[#2a2a2a] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-[#b08528]">
                <svg className="w-10 h-10 text-[#b08528]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-2">ศูนย์บริการลูกค้า</h1>
            <p className="text-gray-500 text-sm mb-8">เราพร้อมให้บริการคุณตลอด 24 ชั่วโมง</p>

            <div className="space-y-4">
                <a href="#" className="block bg-[#00B900] hover:bg-[#009900] text-white font-bold py-3 px-6 rounded-lg shadow transition flex items-center justify-center gap-3">
                    <span className="text-xl">LINE</span>
                    <span>@BAANHUAY_SUPPORT</span>
                </a>
                
                <a href="#" className="block bg-[#1877F2] hover:bg-[#1464cc] text-white font-bold py-3 px-6 rounded-lg shadow transition flex items-center justify-center gap-3">
                    <span className="text-xl">Facebook</span>
                    <span>บ้านหวย Official Fanpage</span>
                </a>

                <div className="border-t border-gray-100 pt-6 mt-6">
                    <p className="text-sm text-gray-600">
                        อีเมล: <span className="font-bold text-gray-800">support@baanhuay.com</span>
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};