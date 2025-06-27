import React from 'react';
import { Smartphone, Zap, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <Smartphone size={48} className="text-orange-500" />,
    title: 'Sem Taxas Escondidas',
    description: 'Seu lucro é 100% seu. Venda sem se preocupar com comissões.',
  },
  {
    icon: <Zap size={48} className="text-green-500" />,
    title: 'Pedidos Sem Erros',
    description: 'O pedido do cliente chega formatado, claro e sem ambiguidades no seu WhatsApp.',
  },
  {
    icon: <TrendingUp size={48} className="text-blue-500" />,
    title: 'Atualização Instantânea',
    description: 'Altere preços, adicione ou remova lanches em segundos, sem complicações.',
  },
];

const Benefits = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold font-poppins mb-2">{benefit.title}</h3>
              <p className="text-gray-600 font-inter">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
