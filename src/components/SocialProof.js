import React from 'react';
import Slider from 'react-slick';
import CountUp from 'react-countup';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: 'Reduziu 30% dos erros nos pedidos!',
    name: 'Carlos, Burguer Master',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: 'Nossos pedidos aumentaram 40% na primeira semana!',
    name: "Juliana, Fominha's Burger",
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: 'Finalmente um cardápio digital sem taxas abusivas.',
    name: 'Marcos, The Burger Point',
    image: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
];

const logos = [
  'https://placehold.co/150x50/white/black?text=Burger+King',
  'https://placehold.co/150x50/white/black?text=McDonalds',
  'https://placehold.co/150x50/white/black?text=Subway',
  'https://placehold.co/150x50/white/black?text=Taco+Bell',
  'https://placehold.co/150x50/white/black?text=Pizza+Hut',
];

const SocialProof = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const logoSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold font-poppins mb-12">Aprovado por quem entende</h2>
        
        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto mb-16">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <p className="text-xl font-inter italic text-gray-700">"{testimonial.quote}"</p>
                <p className="text-lg font-bold font-poppins mt-4">- {testimonial.name}</p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Animated Counter */}
        <div className="mb-16">
          <p className="text-5xl font-bold font-poppins text-orange-500">
            +<CountUp end={127} duration={3} />
          </p>
          <p className="text-2xl font-inter text-gray-600">hamburguerias usando</p>
        </div>

        {/* Client Logos Carousel */}
        <div>
          <Slider {...logoSliderSettings}>
            {logos.map((logo, index) => (
              <div key={index} className="px-4">
                <img src={logo} alt={`logo-${index}`} className="mx-auto" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
