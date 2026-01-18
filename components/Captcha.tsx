import React, { useRef, useEffect, useState } from 'react';

interface CaptchaProps {
  onValidate: (code: string) => void;
  reloadTrigger: number;
}

export const Captcha: React.FC<CaptchaProps> = ({ onValidate, reloadTrigger }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [code, setCode] = useState('');

  const generateCode = () => {
    const chars = '0123456789';
    let newCode = '';
    for (let i = 0; i < 4; i++) {
      newCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCode(newCode);
    onValidate(newCode);
    return newCode;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const captchaCode = generateCode();

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Noise (Lines)
    for (let i = 0; i < 7; i++) {
      ctx.strokeStyle = `rgba(0,0,0,${Math.random() * 0.2})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Text
    ctx.font = 'bold 24px Arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    
    // Draw each char with slight rotation/offset
    const charWidth = canvas.width / 4;
    for(let i=0; i<4; i++) {
        ctx.save();
        const x = (i * charWidth) + (charWidth/2);
        const y = canvas.height/2;
        const angle = (Math.random() - 0.5) * 0.4; // -0.2 to 0.2 rad
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillStyle = '#111827';
        ctx.fillText(captchaCode[i], 0, 0);
        ctx.restore();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadTrigger]);

  return (
    <canvas 
      ref={canvasRef} 
      width={120} 
      height={45} 
      className="rounded border border-gray-300 cursor-pointer shadow-sm" 
      onClick={() => generateCode()} // Allow click to regenerate
      title="คลิกเพื่อเปลี่ยนรหัส"
    />
  );
};