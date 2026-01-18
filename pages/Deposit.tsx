import React from 'react';
import { Button } from '../components/Button';

interface DepositProps {
  onBack: () => void;
}

export const Deposit: React.FC<DepositProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#e5e5e5] font-sans pb-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[50px] shadow-md relative z-50 flex items-center justify-between px-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
             <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gold-300 shadow-sm">
                <span className="text-[#eebf34] font-serif font-bold text-lg">S</span>
            </div>
            <span className="text-black font-black text-2xl tracking-tight font-sans">SUAY</span>
          </div>
          <div className="text-white font-bold text-lg drop-shadow-md">แจ้งเติมเงิน</div>
      </header>

      <div className="max-w-[800px] mx-auto px-4 mt-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                 <h2 className="text-xl font-bold text-[#b08528] flex items-center gap-2">
                    <span>💰</span> แจ้งเติมเงิน (Deposit)
                 </h2>
                 <span className="text-xs text-gray-500">ขั้นตอนที่ 1/2</span>
            </div>
            
            <div className="p-6">
                <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
                    <p className="text-blue-800 text-sm font-bold">⚠️ คำเตือน:</p>
                    <ul className="list-disc pl-5 text-xs text-blue-700 mt-1 space-y-1">
                        <li>กรุณาโอนเงินเข้าบัญชีที่ระบุไว้ด้านล่างนี้เท่านั้น</li>
                        <li>โอนขั้นต่ำ 20 บาท</li>
                        <li>ต้องใช้บัญชีที่ผูกกับระบบโอนเข้ามาเท่านั้น</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-3">1. เลือกบัญชีธนาคารของระบบที่โอนเงินเข้า</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-2 border-[#b08528] bg-yellow-50 rounded-lg p-4 flex items-center gap-4 cursor-pointer relative">
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow">K</div>
                            <div>
                                <div className="font-bold text-gray-800">ธนาคารกสิกรไทย</div>
                                <div className="text-lg text-[#b08528] font-mono font-bold">123-4-56789-0</div>
                                <div className="text-xs text-gray-500">นาย สวย มั่งคั่ง</div>
                            </div>
                            <div className="absolute top-2 right-2 text-[#b08528]">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 cursor-pointer opacity-60 hover:opacity-100">
                             <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow">S</div>
                             <div>
                                <div className="font-bold text-gray-800">ธนาคารไทยพาณิชย์</div>
                                <div className="text-lg text-gray-600 font-mono">987-6-54321-0</div>
                                <div className="text-xs text-gray-500">บริษัท สวย จำกัด</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-3">2. ระบุข้อมูลการโอนเงิน</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs text-gray-500">ช่องทางการโอน</label>
                            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#b08528]">
                                <option>ATM</option>
                                <option>Internet Banking</option>
                                <option>Mobile Banking</option>
                                <option>ตู้ฝากเงินสด</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-gray-500">จำนวนเงิน</label>
                            <input type="number" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#b08528]" placeholder="0.00" />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500">วันที่โอน</label>
                            <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#b08528]" />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500">เวลาที่โอน</label>
                            <div className="flex gap-2">
                                <select className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm"><option>00</option><option>01</option><option>12</option></select>
                                <select className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm"><option>00</option><option>30</option></select>
                            </div>
                        </div>
                    </div>
                </div>

                <Button className="mt-4">
                    แจ้งเติมเงิน
                </Button>

            </div>
        </div>
      </div>
    </div>
  );
};