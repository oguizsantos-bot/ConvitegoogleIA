
import React, { useState } from 'react';

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    attending: '',
    dietary: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 px-6 bg-white/5 rounded-2xl w-full border border-white/10">
        <h4 className="font-serif text-2xl mb-4 italic">Obrigado pela confirmação!</h4>
        <p className="text-sm opacity-70">Mal podemos esperar para celebrar este dia com você.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-8 text-[10px] uppercase tracking-widest border-b border-white/40 pb-1"
        >
          Enviar outra resposta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] uppercase tracking-widest opacity-60 ml-1">Nome:</label>
          <input 
            type="text" 
            name="name"
            required
            placeholder="Seu nome"
            className="custom-input text-sm"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] uppercase tracking-widest opacity-60 ml-1">Sobrenome:</label>
          <input 
            type="text" 
            name="surname"
            required
            placeholder="Seu sobrenome"
            className="custom-input text-sm"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[9px] uppercase tracking-widest opacity-60 ml-1">Email:</label>
        <input 
          type="email" 
          name="email"
          required
          placeholder="exemplo@email.com"
          className="custom-input text-sm"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="w-1/2 flex flex-col gap-1.5">
        <label className="text-[9px] uppercase tracking-widest opacity-60 ml-1">Celular:</label>
        <input 
          type="tel" 
          name="phone"
          placeholder="(00) 00000-0000"
          className="custom-input text-sm"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3 py-2">
        <label className="text-[9px] uppercase tracking-widest opacity-60 ml-1">Você confirma sua presença?</label>
        <div className="flex flex-col gap-2 ml-1">
          <label className="flex items-center gap-3 cursor-pointer text-xs group">
            <input 
              type="radio" 
              name="attending" 
              value="yes"
              required
              className="w-4 h-4 bg-transparent border border-white/40 checked:bg-wedding-olive"
              onChange={handleChange}
            />
            <span className="opacity-80 group-hover:opacity-100 italic">Sim</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer text-xs group">
            <input 
              type="radio" 
              name="attending" 
              value="no"
              className="w-4 h-4 bg-transparent border border-white/40 checked:bg-wedding-olive"
              onChange={handleChange}
            />
            <span className="opacity-80 group-hover:opacity-100 italic">Com carinho, não poderei ir</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[9px] uppercase tracking-widest opacity-60 ml-1">Você possui alguma restrição alimentar?</label>
        <select 
          name="dietary"
          className="custom-input text-sm appearance-none bg-no-repeat bg-[right_1rem_center]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'white\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundSize: '16px' }}
          value={formData.dietary}
          onChange={handleChange}
        >
          <option value="">Selecione uma opção</option>
          <option value="none">Nenhuma</option>
          <option value="vegan">Vegano / Vegetariano</option>
          <option value="lactose">Intolerante a Lactose</option>
          <option value="gluten">Intolerante a Glúten</option>
        </select>
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className="mt-6 bg-[#253328] border border-white/20 py-4 rounded-full text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-black/40 transition-colors"
      >
        {isSubmitting ? 'Confirmando...' : 'Confirmar presença'}
      </button>

      <div className="mt-12 flex flex-col gap-1.5">
        <label className="text-[9px] uppercase tracking-widest opacity-60 ml-1">Deixe uma mensagem de carinho aos noivos:</label>
        <textarea 
          name="message"
          rows={4}
          placeholder="Escreva uma mensagem..."
          className="custom-input text-sm resize-none bg-white/5 border-white/10"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
    </form>
  );
};

export default RSVPForm;
