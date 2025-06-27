import React from 'react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-600 py-16">
      <div className="container mx-auto px-8 text-center text-white">
        <h2 className="text-4xl font-bold font-poppins mb-4">Pronto para Vender Mais?</h2>
        <p className="text-xl font-inter mb-8">Crie seu cardápio digital grátis e veja seus pedidos decolarem.</p>
        <a 
          href="#cta"
          className="px-8 py-4 bg-white text-orange-600 rounded-lg font-bold text-lg shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out"
        >
          Começar Agora →
        </a>
      </div>
    </section>
  );
};

export default CTA;
