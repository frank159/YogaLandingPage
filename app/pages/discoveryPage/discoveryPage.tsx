"use client";

import { useState, useEffect, useRef } from "react";
import * as S from "./discoveryPageStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useInView } from "framer-motion";

export default function DiscoveryPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stylesData = [
    {
      title: "Hatha Yoga",
      text: "Ideal para iniciantes. Foca em posturas físicas (asanas) e respiração para trazer equilíbrio entre corpo e mente.",
      img: "/Imgs/card1.jpg",
    },
    {
      title: "Ashtanga Yoga",
      text: "Para quem busca desafio e movimento. Uma sequência vigorosa que purifica o corpo através do calor e da respiração.",
      img: "/Imgs/card2.png",
    },
    {
      title: "Yin Yoga",
      text: "O caminho para a calma profunda. Focado nos tecidos conjuntivos e articulações, promovendo relaxamento e paciência.",
      img: "/Imgs/card3.png",
    },
    {
      title: "Vinyasa Flow",
      text: "Sincronia perfeita entre fôlego e movimento. Uma prática criativa e fluida que varia a cada aula.",
      img: "/Imgs/card4.png",
    },
  ];

  const renderCards = () =>
    stylesData.map((item, index) => (
      <S.StyleCard key={index}>
        <img src={item.img} alt={item.title} />
        <div className="card-content">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </S.StyleCard>
    ));

  return (
    <S.MainContainer>
      <S.VerticalLine
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ height: "110%" }}
      />
      <S.HeaderContent
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{
          duration: 1,
        }}
      >
        <S.MainTitle>Descubra a variedade de estilos</S.MainTitle>
        <S.MainSubtitle>Várias modalidades para sua rotina.</S.MainSubtitle>
      </S.HeaderContent>

      <S.GridStyles
        ref={ref}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        {isMobile ? (
          <>
            <Swiper
              loop={false}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              navigation={{ prevEl, nextEl }}
              observer={true}
              observeParents={true}
              slidesPerView={1} // Alterado de "auto" para 1
              spaceBetween={0} // Opcional: 0 para ocupar a tela cheia ou 20 se quiser ver margens
              className="mySwiper"
            >
              {stylesData.map((item, index) => (
                <SwiperSlide key={index}>
                  {/* Removido o style={{ width: "auto" }} do SwiperSlide para ele respeitar o slidesPerView={1} */}
                  <S.StyleCard>
                    <img src={item.img} alt={item.title} />
                    <div className="card-content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </S.StyleCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          // No Desktop, renderiza apenas o Flexbox comum
          <S.DesktopGrid>{renderCards()}</S.DesktopGrid>
        )}
      </S.GridStyles>
    </S.MainContainer>
  );
}
