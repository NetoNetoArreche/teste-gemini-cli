import React from 'react';
import { Edit, ShoppingCart, Zap } from 'lucide-react';

const steps = [
  {
    icon: <Edit size={48} className="text-purple-600" />,
    title: 'Você Cadastra Seus Lanches',
    bgColor: 'bg-purple-100',
  },
  {
    icon: <ShoppingCart size={48} className="text-blue-600" />,
    title: 'Cliente Escolhe no Cardápio Online',
    bgColor: 'bg-blue-100',
  },
  {
    icon: <Zap size={48} className="text-green-600" />,
    title: 'Pedido Chega Direto no Seu WhatsApp!',
    bgColor: 'bg-green-100',
  },
];

const Storytelling = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold font-poppins mb-12">Como Funciona?</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-center">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 transform -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center mb-12 md:mb-0">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${step.bgColor}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-poppins mt-4 max-w-xs">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
