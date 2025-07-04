import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';




export function CarouselDefault({ imagens = [] }) {
  const [indice, setIndice] = useState(0);

  const selecionarSlide = (index) => {
    setIndice(index);
  };


  return (
      <div className="relative w-full max-w-lg mx-auto ">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${indice * 100}%)` }}
          >
            {imagens.map((image, index) => (
              <img
                key={index}
                className="w-full flex-shrink-0 object-cover"
                src={image}
                alt={`Imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          loop={false}
          navigation
          className='w-full max-w-6x1 mx-auto mt-4'  
        >
          {imagens.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                key={index}
                src={image}
                alt={index}
                className={`cursor-pointer h-24 w-full object-cover rounded-md border-2 ${indice === index ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => selecionarSlide(index)}
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
  );
}
