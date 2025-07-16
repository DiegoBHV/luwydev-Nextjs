"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import {logos} from "./imagenes";

import { useEffect } from "react";
export const Slider = () => {
    useEffect(()=>{
       document.querySelector('.swiper-wrapper').style.setProperty('align-items', 'center');
       
    }, [])

  return (
    <div className="swiper clientLogoSliderLight pb-2 sm:pb-9">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: false,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{

            990: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1200: {
                slidesPerView: 7,
                spaceBetween: 0,
              },
          }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="xl:px-[1.2rem] lg:px-[0.9rem]">
          <div className="client-logo-light">
            <a href="https://www.somosbelcorp.com/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.BelcorpLogo}
                className="mx-auto"
                alt="Logo Belcorp"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://luwydev.com/jjm/web2024/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.logo_jjmining}
                className="mx-auto"
                alt="Logo JJ Mining"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://floreriabenavides.com.pe/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.logo_floreria_benavides}
                className="mx-auto"
                alt="Logo Florería Benavides"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://www.grubbasport.com/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.logo_grubbasport}
                className="mx-auto"
                alt="Logo Grubbasport"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://yateperu.pe/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.Yate_Peru_logo}
                className="mx-auto"
                alt="Logo Yate Peru"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://muebleriabianely.com/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.logoBianely_light}
                className="mx-auto"
                alt="Logo Bianely"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://www.yanbal.com/mx//corporate/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.Yanbal_logo}
                className="mx-auto"
                alt="Logo Yanbal"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://www.somosbelcorp.com/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.BelcorpLogo}
                className="mx-auto"
                alt="Logo Belcorp"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://luwydev.com/jjm/web2024/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.logo_jjmining}
                className="mx-auto"
                alt="Logo JJ Mining"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://floreriabenavides.com.pe/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.logo_floreria_benavides}
                className="mx-auto"
                alt="Logo Florería Benavides"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://www.grubbasport.com/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.logo_grubbasport}
                className="mx-auto"
                alt="Logo Grubbasport"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://yateperu.pe/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.Yate_Peru_logo}
                className="mx-auto"
                alt="Logo Yate Peru"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://muebleriabianely.com/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.logoBianely_light}
                className="mx-auto"
                alt="Logo Bianely"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://www.yanbal.com/mx//corporate/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.Yanbal_logo}
                className="mx-auto"
                alt="Logo Yanbal"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.3rem] lg:px-[1rem]">
          <div className="client-logo-light">
            <a href="https://luwydev.com/jjm/web2024/" rel="noopener noreferrer" target="_blank">
              <Image
                src={logos.logo_jjmining}
                className="mx-auto"
                alt="Logo JJ Mining"
              />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
