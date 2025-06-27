import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Precisa de cartão de crédito para começar?',
    answer: 'Não! Você pode começar gratuitamente. O cliente paga o pedido diretamente para você, via Pix ou como preferir, direto no WhatsApp.',
  },
  {
    question: 'Como eu recebo os pedidos?',
    answer: 'Assim que o cliente finaliza o pedido no cardápio, você recebe uma mensagem formatada no seu número de WhatsApp com todos os detalhes: itens, quantidades, observações e endereço.',
  },
  {
    question: 'Posso personalizar o cardápio com a minha marca?',
    answer: 'Sim! Você pode adicionar seu logo, escolher cores e personalizar o link do seu cardápio para que ele tenha a cara da sua hamburgueria.',
  },
  {
    question: 'Existe algum limite de produtos ou pedidos?',
    answer: 'Não. Nosso plano gratuito permite que você cadastre quantos produtos quiser e receba pedidos ilimitados sem nenhum custo.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold font-poppins text-center mb-12">Dúvidas Frequentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button 
                className="w-full flex justify-between items-center text-left text-xl font-semibold font-inter focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {activeIndex === index && (
                <div className="mt-4 text-gray-600 font-inter">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
