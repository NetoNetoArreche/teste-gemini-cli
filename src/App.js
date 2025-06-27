import React from 'react';
import Benefits from './components/Benefits';
import Storytelling from './components/Storytelling';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-center text-white p-8"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2564&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 
            className="text-6xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600"
          >
            Seu Hambúrguer Favorito a 1 Clique do WhatsApp!
          </h1>
          <p className="text-2xl font-inter mt-4 max-w-3xl">
            Cardápio digital que aumenta pedidos em 40% sem taxas ou apps complicados.
          </p>
          <a 
            href="#cta" 
            className="mt-8 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-bold text-lg shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out"
          >
            Quero Meu Cardápio Grátis →
          </a>
        </div>
      </section>
      <Benefits />
      <Storytelling />
      <SocialProof />
      <FAQ />
      <CTA />
    </div>
  );
}

export default App;