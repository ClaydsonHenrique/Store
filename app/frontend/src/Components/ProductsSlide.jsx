import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../redux/action/index.js';

function ProductSlider({ products, brandName }) {
  const [activeContainer, setActiveContainer] = useState(null);
  const [slideNumbers, setSlideNumbers] = useState(Array(products.length).fill(0));

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleSlideMouseEnter = (index, slideIndex) => {
    setActiveContainer(index);
    setSlideNumbers((prevNumbers) => {
      const newNumbers = [...prevNumbers];
      newNumbers[index] = slideIndex;
      return newNumbers;
    });
  };

  const handleSlideMouseLeave = () => {
    setActiveContainer(null);
    setSlideNumbers(Array(products.length).fill(0));
  };
  const detailProduct = (id) => {
    dispatch(addProduct(id))
    navigate(`/detalhes/${id}`)
  }

  return (
    <section className="product-slider">
      <div>
        <h1>{brandName}</h1>
      </div>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        className="mySwiper center-swiper"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {products.map(({ categoria, cores, genero, id, marca, name, text, tipo }, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ height: '400px' }}
              className="container-slide"
              onMouseEnter={() => handleSlideMouseEnter(index, 1)}
              onMouseLeave={handleSlideMouseLeave}
            >
              <h1>{name.toUpperCase()}</h1>
              <div>
                {cores[0].images[slideNumbers[index]] ?
                  <img src={cores[0].images[slideNumbers[index]]} alt="" style={{ width: '300px', height: 'auto' }} />
                  :
                  <img src={cores[0].images[0]} alt="" style={{ width: '300px', height: 'auto' }} />}
              </div>
              {cores[0].pricePromo !== '' ?
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                  <p className="priceDisable"><s>{cores[0].priceOriginal}</s></p>
                  <p style={{ color: 'red' }}>{cores[0].pricePromo}</p>
                </div>
                :
                <p>{cores[0].priceOriginal}</p>
              }
              {activeContainer === index ? (
                <div>
                  <button onClick={() => detailProduct(id)}>Detalhes</button>
                </div>
              ) : null}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProductSlider;
