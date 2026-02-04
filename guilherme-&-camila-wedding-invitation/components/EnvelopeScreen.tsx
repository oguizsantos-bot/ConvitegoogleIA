
import React from 'react';

interface Props {
  onOpen: () => void;
}

const EnvelopeScreen: React.FC<Props> = ({ onOpen }) => {
  return (
    <div className="relative w-full h-screen bg-wedding-green flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Crest Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img src="https://picsum.photos/seed/crest/800/800" alt="" className="w-full max-w-4xl object-contain opacity-20 grayscale invert" />
      </div>

      {/* Top Logo */}
      <div className="mb-12 z-10">
        <div className="w-24 h-24 border border-wedding-cream rounded-full flex items-center justify-center opacity-80">
          <span className="font-script text-wedding-cream text-5xl">G&C</span>
        </div>
      </div>

      {/* Intro Text */}
      <div className="text-center mb-16 z-10 px-4">
        <p className="text-wedding-cream font-serif italic text-lg leading-relaxed">
          Há <span className="italic">histórias</span> que pedem para ser<br />
          vividas de perto.
        </p>
      </div>

      {/* Envelope Container */}
      <div 
        className="relative cursor-pointer group transform transition-transform duration-300 hover:scale-[1.02] z-20"
        onClick={onOpen}
      >
        {/* Envelope Body */}
        <div className="relative w-[340px] h-[220px] bg-wedding-olive shadow-2xl rounded-sm flex flex-col items-center justify-center">
          {/* Cursive Name on Envelope */}
          <div className="text-center mb-4">
            <h1 className="font-script text-wedding-cream text-4xl leading-tight">Guilherme</h1>
            <h1 className="font-script text-wedding-cream text-4xl leading-tight -mt-4">& Camila</h1>
          </div>
          
          {/* Wax Seal */}
          <div className="absolute bottom-[-30px] w-24 h-24 bg-[#B4B4B4] rounded-full shadow-lg flex items-center justify-center border-4 border-[#9A9A9A]">
             <div className="w-16 h-16 border-2 border-[#8A8A8A] rounded-full flex items-center justify-center opacity-60">
                <span className="font-script text-[#5A5A5A] text-2xl">GC</span>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-24 text-center z-10">
        <p className="text-wedding-cream font-serif uppercase tracking-[0.2em] text-xs mb-1 opacity-70">Um Convite</p>
        <p className="text-wedding-cream font-script text-4xl">Exclusivo <span className="font-serif text-lg tracking-widest uppercase">Para Você</span></p>
      </div>
    </div>
  );
};

export default EnvelopeScreen;
