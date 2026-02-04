
import React from 'react';
import Countdown from './Countdown';
import RSVPForm from './RSVPForm';

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-wedding-green text-wedding-cream font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center pt-12 px-6">
        <div className="w-16 h-16 border border-wedding-cream rounded-full flex items-center justify-center mb-12">
          <span className="font-script text-3xl">GC</span>
        </div>
        
        <div className="relative w-full max-w-md aspect-[4/5] mb-8 shadow-2xl overflow-hidden rounded-sm">
          <img src="https://picsum.photos/seed/wedding1/800/1000" alt="Guilherme & Camila" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="text-center z-10">
          <p className="font-serif italic text-sm mb-2">Wedding day</p>
          <h2 className="font-serif text-4xl mb-6 tracking-wide">Guilherme & Camila</h2>
          <p className="font-serif italic text-sm opacity-80 max-w-[200px] mx-auto leading-relaxed">
            Esse é um convite <span className="font-bold">exclusivo</span> e intransferível
          </p>
        </div>

        <div className="mt-auto pb-10 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Date Section */}
      <section className="w-full py-20 flex flex-col items-center justify-center">
        <h3 className="font-serif text-[80px] md:text-[120px] leading-none tracking-tighter opacity-90">
          26.04.26
        </h3>
      </section>

      {/* Intro Story Section */}
      <section className="w-full max-w-4xl px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square md:aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
          <img src="https://picsum.photos/seed/couple/600/800" alt="The Couple" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-serif italic text-lg leading-relaxed text-left">
            Somos feitos de <span className="font-bold">encontros</span>, de tempos que se alinham e de escolhas conscientes. Em <span className="font-bold italic">meio ao caos</span> do mundo, encontramos um no outro abrigo, <span className="font-bold">riso e casa</span>. Este dia é a materialização desse encontro.
          </p>
          <p className="font-serif italic text-lg">
            E <span className="font-bold">você faz parte</span> dele.
          </p>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="w-full flex flex-col items-center py-20 bg-black/5">
        <h4 className="font-serif text-3xl mb-16 italic">O dia em que diremos "sim"</h4>
        
        <div className="w-full max-w-xl flex justify-between px-8 mb-12">
          <div className="text-center">
            <p className="font-serif text-2xl">26.04.26</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl">15hrs</p>
          </div>
        </div>

        <div className="w-full max-w-lg px-6 mb-10">
          <img src="https://picsum.photos/seed/venue/1000/600" alt="Venue" className="w-full rounded-sm shadow-lg mb-6" />
          <div className="flex justify-between items-start">
             <div>
               <h5 className="font-serif italic text-3xl">Sítio paradise</h5>
             </div>
             <div className="text-right">
               <p className="text-xs opacity-70">Jardim Paraíso,</p>
               <p className="text-xs opacity-70">Igarassu - PE, 53615-050</p>
             </div>
          </div>
        </div>

        <p className="max-w-xs text-center font-serif italic text-sm leading-relaxed opacity-80">
          Um espaço escolhido para acolher nossa história e torná-la ainda mais inesquecível.
        </p>
      </section>

      {/* Timeline */}
      <section className="w-full max-w-lg px-8 py-24 flex flex-col items-center">
        <h4 className="font-serif text-4xl mb-16">Cronograma</h4>
        
        <div className="grid grid-cols-3 w-full gap-4">
          <div className="flex flex-col items-center text-center">
             <div className="w-16 h-16 rounded-full border border-wedding-cream flex items-center justify-center mb-4">
                <svg className="w-8 h-8 opacity-80" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
             </div>
             <p className="text-[10px] uppercase tracking-widest font-bold">Cerimônia</p>
             <p className="text-[10px] opacity-60">15:00</p>
          </div>
          <div className="flex flex-col items-center text-center">
             <div className="w-16 h-16 rounded-full border border-wedding-cream flex items-center justify-center mb-4">
                <svg className="w-8 h-8 opacity-80" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
             </div>
             <p className="text-[10px] uppercase tracking-widest font-bold">Recepção</p>
             <p className="text-[10px] opacity-60">17:00</p>
          </div>
          <div className="flex flex-col items-center text-center">
             <div className="w-16 h-16 rounded-full border border-wedding-cream flex items-center justify-center mb-4">
                <svg className="w-8 h-8 opacity-80" viewBox="0 0 24 24" fill="currentColor"><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/></svg>
             </div>
             <p className="text-[10px] uppercase tracking-widest font-bold">Fim de festa</p>
             <p className="text-[10px] opacity-60">22:00</p>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="w-full py-20 bg-black/10">
        <Countdown targetDate="2026-04-26T15:00:00" />
        <p className="text-center mt-8 font-serif italic text-xs opacity-70">
          Estamos contando os dias para <span className="font-bold">viver este instante com você</span>.
        </p>
      </section>

      {/* Map Section */}
      <section className="w-full py-24 flex flex-col items-center px-8">
        <p className="text-center text-[10px] uppercase tracking-widest mb-12 opacity-80">
          Para que sua chegada seja leve,<br />deixamos aqui o caminho até nós.
        </p>
        
        <div className="w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl mb-8">
           <iframe 
             title="Map"
             width="100%" 
             height="100%" 
             frameBorder="0" 
             style={{ border: 0 }}
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15810.0!2d-34.9!3d-7.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTQnMDAuMCJTIDM0wrA1NCcwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
             allowFullScreen
           ></iframe>
        </div>

        <p className="text-center font-serif italic text-sm opacity-70">Onde nossos caminhos se encontram.</p>
      </section>

      {/* RSVP Section */}
      <section className="w-full max-w-lg px-8 py-24 flex flex-col items-center bg-black/5 rounded-t-[60px]">
        <h4 className="font-serif italic text-5xl mb-4 text-center">Sua presença é um presente.</h4>
        <p className="text-center text-[10px] italic opacity-70 mb-12 max-w-[280px]">
          Para nos ajudar a preparar cada detalhe com cuidado, pedimos que confirme sua presença.
        </p>
        
        <RSVPForm />
      </section>

      {/* Footer Info */}
      <section className="w-full py-20 flex flex-col items-center">
        <p className="text-xs uppercase tracking-widest mb-10 opacity-70">Descubra mais sobre o casamento:</p>
        
        <div className="flex gap-6 mb-20">
          {['spotify', 'photos', 'gift', 'link', 'help'].map((icon) => (
            <div key={icon} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
              <div className="w-5 h-5 border border-wedding-cream rounded-sm opacity-60"></div>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col items-center gap-6 px-12">
           <p className="font-serif italic text-sm leading-relaxed opacity-80">
             Que este dia seja leve, que o amor seja celebrado e que a alegria nos encontre juntos.
           </p>
           <div>
             <p className="text-xs font-serif mb-1">Com amor,</p>
             <p className="font-serif text-lg">Guilherme & Camila</p>
           </div>
           
           <div className="w-24 h-24 mt-12 opacity-40">
             <img src="https://picsum.photos/seed/crest-bottom/200/200" alt="Crest" className="grayscale invert" />
           </div>
        </div>
      </section>

      <footer className="w-full py-8 text-center opacity-30 text-[8px] uppercase tracking-widest border-t border-white/5">
        &copy; 2026 G&C Wedding Invitation
      </footer>
    </div>
  );
};

export default MainContent;
