import React from 'react';
import { Button } from '../components/Button';

interface WithdrawProps {
  onBack: () => void;
}

export const Withdraw: React.FC<WithdrawProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#e5e5e5] font-sans pb-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      <header className="bg-gradient-to-r from-[#eebf34] via-[#d4a017] to-[#b08528] h-[50px] shadow-md relative z-50 flex items-center justify-between px-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
             <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-gold-300 shadow-sm">
                <span className="text-[#eebf34] font-serif font-bold text-lg">S</span>
            </div>
            <span className="text-black font-black text-2xl tracking-tight font-sans">SUAY</span>
          </div>
          <div className="text-white font-bold text-lg drop-shadow-md">แจ้งถอนเงิน</div>
      </header>

      <div className="max-w-[600px] mx-auto px-4 mt-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-800 px-6 py-6 text-center">
                 <p className="text-gray-400 text-sm mb-1">ยอดเงินที่ถอนได้</p>
                 <h1 className="text-4xl font-bold text-[#eebf34]">0.00 <span className="text-sm text-gray-400">THB</span></h1>
            </div>
            
            <div className="p-6">
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2">บัญชีรับเงิน</label>
                    <div className="border border-gray-300 rounded p-3 flex items-center gap-3 bg-gray-50">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">?</div>
                        <div className="text-sm text-gray-500 italic">กรุณาเพิ่มบัญชีธนาคารก่อนทำรายการ</div>
                    </div>
                </div>

                <div className="mb-8">
                    <label className="block text-gray-700 font-bold mb-2">จำนวนเงินที่ต้องการถอน</label>
                    <input type="number" className="w-full text-2xl font-bold text-center border-b-2 border-gray-300 focus:border-[#b08528] outline-none py-2" placeholder="0.00" />
                    <p className="text-xs text-gray-400 mt-2 text-right">* ขั้นต่ำ 100 บาท</p>
                </div>

                <Button className="w-full" disabled={true}>
                    แจ้งถอนเงิน
                </Button>
                
                <div className="mt-6 border-t border-gray-100 pt-4">
                    <h3 className="text-gray-800 font-bold text-sm mb-3">ประวัติการถอนล่าสุด</h3>
                    <table className="w-full text-xs text-left text-gray-500">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="p-2">เวลา</th>
                                <th className="p-2">จำนวน</th>
                                <th className="p-2">สถานะ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3} className="p-4 text-center text-gray-400">ไม่มีรายการ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};