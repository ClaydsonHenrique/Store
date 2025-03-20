import React, { useState } from "react";

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

      {/* Miniaturas */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {imagens.map((image, index) => (
          <img
            key={index}
            className={`"w-full h-full object-cover border-2 rounded-lg cursor-pointer ${indice === index ? "border-blue-500" : "border-gray-300"
              }`}
            src={image}
            alt={`Miniatura ${index + 1}`}
            onClick={() => selecionarSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
