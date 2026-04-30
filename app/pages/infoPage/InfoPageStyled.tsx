import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled.section`
  width: 100%;
  background-color: #e7e7e6;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  box-sizing: border-box;
`;

// --- SEÇÃO INSTRUTORES ---
export const InstructorsSection = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
`;

export const ImageSide = styled(motion.div)`
  background-image: url("/Imgs/foto cards.jpg");
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentSide = styled.div`
  padding: 80px 6rem;

  @media (max-width: 768px) {
    padding: 70px 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MainTitle = styled.h1`
  font-family: var(--font-playfair), serif;
  font-size: 3.5rem;
  color: #133f20;
  @media (max-width: 768px) {
    font-size: 2rem !important;
    padding: 0 20px;
    text-align: center;
  }
`;

export const MainSubtitle = styled.p`
  font-family: var(--font-lato), sans-serif;
  color: #4a7c59;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    font-size: 1rem !important;
    padding: 0 20px;
    text-align: center;
  }
`;

export const TutorsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-areas: "card1 ." ". card2" "card3 .";
  gap: 2rem;

  @media (max-width: 768px) {
    display: block;
    width: 100%;

    .swiper {
      padding-top: 60px;
      padding-bottom: 10px;
    }
  }
`;

// Alterado para motion.div para suportar animações
export const TutorCard = styled(motion.div)<{ $area: string }>`
  grid-area: ${(props) => props.$area};
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(255, 107, 107, 0.1) 15%,
    rgba(255, 107, 107, 0.1) 100%
  );
  padding: 45px 20px 25px;
  width: 280px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 250px;
    max-width: 85vw;
    background: linear-gradient(180deg, #f3d5d5 0%, #f9e3e3 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    margin: 0 auto;
  }

  .avatar {
    position: absolute;
    top: -40px;
    right: 20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      right: auto;
      left: 50%;
      transform: translateX(-50%);
      width: 90px;
      height: 90px;
    }
  }
`;

export const TestimonialsSection = styled.div`
  padding: 80px 0;
  text-align: center;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 0;
    max-width: 340px;
  }

  .swiper-pagination-bullet {
    background: #cccccc; // Cor dos pontos inativos
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #133f20; // Cor do ponto ativo (configure como desejar)
  }

  .swiper-pagination {
    bottom: -2px; // Ajuste a posição vertical se necessário
  }
`;

export const TestimonialCard = styled.div`
  background-color: #ebe1e1;
  padding: 30px 20px;
  border-radius: 8px;
  width: 280px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 250px;
    max-width: 85vw;
    margin: 0 auto;
  }

  .stars {
    color: #133f20;
    margin-bottom: 10px;
    text-align: left;
  }
  p {
    font-size: 0.95rem;
    font-style: italic;
    color: #133f20;
    text-align: left;
  }
  h4 {
    font-size: 0.85rem;
    font-weight: bold;
    margin-top: 15px;
    text-align: left;
  }
`;

export const MainTextCard = styled.div`
  border-left: 3px solid #133f20;
  padding-left: 10px;
  text-align: left;
  @media (max-width: 768px) {
    border: none;
    padding: 0;
    text-align: center;
  }
`;

export const TitleCard = styled.h3`
  font-size: 1.4rem;
  color: #133f20;
  font-weight: 800;
`;

export const TextCardB = styled.div`
  font-size: 0.9rem;
  color: #4a7c59;
  margin-top: 4px;
`;

export const TextCardA = styled.div`
  font-size: 0.85rem;
  color: #133f20;
  margin-top: 15px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
    color: #4a7c59;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;

  /* Ajustamos o container pai para não travar o tamanho */
  display: block;

  @media (max-width: 768px) {
    max-width: 340px;
    margin: 0 auto;
    padding: 0 10px;
  }

  .swiper {
    width: 100%;
    /* O SEGREDO: Esse padding empurra o card para cima, 
       deixando o fundo do carrossel vazio para as bolinhas */
    padding-bottom: 50px !important;
    overflow: visible !important;
  }

  .swiper-pagination {
    /* Agora usamos bottom: 0 ou um valor baixo, pois o 
       padding-bottom da .swiper já garantiu o espaço livre abaixo do card */
    bottom: 5px !important;
    display: flex;
    justify-content: center;
    gap: 8px;
    width: 100%;
  }

  .swiper-pagination-bullet {
    background: #cccccc;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #133f20;
  }
`;
export const CustomArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &.prev {
    left: -10px;
  }
  &.next {
    right: -10px;
  }

  @media (max-width: 400px) {
    &.prev {
      left: 5px;
    }
    &.next {
      right: 5px;
    }
  }
`;
