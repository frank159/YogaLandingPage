"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import * as S from "./InfoPageStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

export default function InfoPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [prevInst, setPrevInst] = useState<HTMLDivElement | null>(null);
  const [nextInst, setNextInst] = useState<HTMLDivElement | null>(null);
  const [prevRev, setPrevRev] = useState<HTMLDivElement | null>(null);
  const [nextRev, setNextRev] = useState<HTMLDivElement | null>(null);

  const refTutors = useRef(null);
  const isInView = useInView(refTutors, { once: true, amount: 0.2 });

  const refAval = useRef(null);
  const isInViewAval = useInView(refAval, { once: true, amount: 0.2 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const tutorVariants = {
    hidden: (id: string) => {
      const isMobileSize =
        typeof window !== "undefined" && window.innerWidth <= 768;
      if (isMobileSize) return { opacity: 0, y: 20 };

      // No Desktop: Card 2 vem da direita (x: 50), outros da esquerda (x: -50)
      return {
        opacity: 0,
        x: id === "card2" ? 50 : -50,
      };
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const reviews = [
    {
      name: "Mariana K. - Aluna há 7 meses",
      text: '"As aulas de 15 minutos mudaram minha disposição no trabalho."',
    },
    {
      name: "Camila S. - Aluna há 1 ano",
      text: '"As técnicas de respiração me ajudam a manter o foco."',
    },
    {
      name: "André L. - Aluno há 2 meses",
      text: '"O método de aulas curtas me fez ser constante."',
    },
    {
      name: "Ricardo M. - Aluno há 4 meses",
      text: '"A Beatriz adapta tudo perfeitamente."',
    },
    {
      name: "Fernanda O. - Aluna há 5 meses",
      text: '"A plataforma é intuitiva!"',
    },
  ];

  const instructors = [
    {
      id: "card1",
      name: "Beatriz Guimarães",
      role: "Instrutora Senior",
      desc: "Graduada em Educação Física.",
      img: "/Imgs/icon foto 1.png",
    },
    {
      id: "card2",
      name: "Clara Mendes",
      role: "Meditação Guiada",
      desc: "Mestre em Psicologia Positiva.",
      img: "/Imgs/icon foto 2.png",
    },
    {
      id: "card3",
      name: "Marcus Vinícius",
      role: "Práticas Dinâmicas",
      desc: "Fisioterapeuta e Ashtanga.",
      img: "/Imgs/icon foto 3.png",
    },
  ];

  return (
    <S.MainContainer>
      <S.InstructorsSection>
        <S.ImageSide
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,

            ease: "easeOut",
          }}
        />
        <S.ContentSide>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <S.MainTitle>Pratique com quem entende</S.MainTitle>
            <S.MainSubtitle>
              Nossos instrutores são guias certificados.
            </S.MainSubtitle>
          </motion.div>

          <S.TutorsWrapper ref={refTutors}>
            {isMobile ? (
              <S.CarouselContainer
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <Swiper
                  slidesPerView={1}
                  centeredSlides={true}
                  loop={false}
                  navigation={{ prevEl: prevInst, nextEl: nextInst }}
                  pagination={{ clickable: true }}
                  modules={[Navigation, Pagination]}
                  style={{ width: "100%" }}
                >
                  {instructors.map((tutor) => (
                    <SwiperSlide key={tutor.id}>
                      <S.TutorCard $area={tutor.id}>
                        <div className="avatar">
                          <Image
                            src={tutor.img}
                            alt={tutor.name}
                            width={120}
                            height={120}
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <S.MainTextCard>
                          <S.TitleCard>{tutor.name}</S.TitleCard>
                          <S.TextCardB>{tutor.role}</S.TextCardB>
                        </S.MainTextCard>
                        <S.TextCardA>{tutor.desc}</S.TextCardA>
                      </S.TutorCard>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </S.CarouselContainer>
            ) : (
              instructors.map((tutor) => (
                <S.TutorCard
                  key={tutor.id}
                  $area={tutor.id}
                  custom={tutor.id}
                  variants={tutorVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <div className="avatar">
                    <Image
                      src={tutor.img}
                      alt={tutor.name}
                      width={120}
                      height={120}
                    />
                  </div>
                  <S.MainTextCard>
                    <S.TitleCard>{tutor.name}</S.TitleCard>
                    <S.TextCardB>{tutor.role}</S.TextCardB>
                  </S.MainTextCard>
                  <S.TextCardA>{tutor.desc}</S.TextCardA>
                </S.TutorCard>
              ))
            )}
          </S.TutorsWrapper>
        </S.ContentSide>
      </S.InstructorsSection>

      <S.TestimonialsSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInViewAval ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <S.MainTitle>O que os alunos dizem:</S.MainTitle>
        </motion.div>
        <S.CarouselWrapper
          ref={refAval}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={isInViewAval ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <S.CustomArrow ref={(node) => setPrevRev(node)} className="prev">
            <img src="/Imgs/seta2.png" alt="Anterior" />
          </S.CustomArrow>

          <Swiper
            slidesPerView={isMobile ? 1 : "auto"}
            centeredSlides={isMobile}
            loop={true}
            navigation={{ prevEl: prevRev, nextEl: nextRev }}
            modules={[Navigation]}
            className="testimonialSwiper"
            style={{ width: "100%" }}
          >
            {reviews.map((rev, index) => (
              <SwiperSlide
                key={index}
                style={{ width: isMobile ? "100%" : "280px", height: "180px" }}
              >
                <S.TestimonialCard
                  style={{ margin: isMobile ? "0 auto" : "0" }}
                >
                  <div className="stars">★★★★★</div>
                  <p>{rev.text}</p>
                  <h4>{rev.name}</h4>
                </S.TestimonialCard>
              </SwiperSlide>
            ))}
          </Swiper>

          <S.CustomArrow ref={(node) => setNextRev(node)} className="next">
            <img src="/Imgs/seta1.png" alt="Próximo" />
          </S.CustomArrow>
        </S.CarouselWrapper>
      </S.TestimonialsSection>
    </S.MainContainer>
  );
}
