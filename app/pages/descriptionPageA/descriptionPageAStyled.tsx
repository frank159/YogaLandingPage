import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-playfair: 'Playfair Display', serif;
    --font-lato: 'Lato', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }
`;

// Esse cara abraça a Seção A e B e coloca o fundo no mobile
export const MainWrapper = styled.div`
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    background-image: url("/Imgs/cardsImgMobile.png"); /* COLOQUE O NOME DA IMG AQUI */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

// --- SEÇÃO A ---
export const SectionA = styled.section`
  position: relative;
  min-height: 80vh;
  width: 100%;
  display: flex;
  align-items: start;
  padding-top: 4%;
  padding-left: 4%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/Imgs/2img.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    z-index: -1;
  }

  /* &::after {
    content: "";
    position: absolute;
    right: 5rem;
    top: -5rem;
    height: 200%;
    width: 1px;
    background-color: #133f20;
    z-index: 999;
  } */

  @media (max-width: 768px) {
    padding: 10% 8%;
    min-height: auto;
    background-color: transparent !important;

    &::before {
      display: none; /* Remove o fundo da Seção A no mobile */
    }
    &::after {
      width: 0;
    }
  }
`;

export const MainCardA = styled(motion.div)`
  position: relative;
  z-index: 5;
`;

export const TitleA = styled.h1`
  font-family: var(--font-playfair), serif;
  font-weight: 300;
  color: #133f20;
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 2.5rem;
  padding-right: 6rem;

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: right;
    font-size: 2rem !important;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 3rem;
  padding-left: 5%;

  @media (max-width: 768px) {
    padding-left: 0;
    justify-content: center;
    gap: 20px;
  }
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #133f20;
  font-family: var(--font-lato), sans-serif;
  font-size: 0.9rem;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const TextContainerA = styled.div`
  font-family: var(--font-lato), sans-serif;
  color: #133f20;
  line-height: 1.6;
  max-width: 600px;

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  strong {
    font-weight: 700;
    display: block;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;

// --- SEÇÃO B ---
export const SectionB = styled.section`
  position: relative;
  min-height: 90vh;
  width: 100%;
  display: grid;
  align-items: center;
  padding: 80px 6rem;
  background-color: #e7e7e6;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "cards content";

  @media (max-width: 768px) {
    background-color: transparent !important; /* Fica transparente pro fundo do Wrapper aparecer */
    grid-template-areas: "content cards";
    text-align: start;
    padding: 40px 6%;
    min-height: auto;
  }
`;

export const CardsWrapper = styled.div`
  grid-area: cards;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  @media (max-width: 1200px) {
    /* Centraliza e remove a bagunça a partir de 1200px */
    align-items: center;
    justify-content: center;
    height: auto; /* Deixa o conteúdo ditar a altura */
    gap: 30px; /* Espaço maior entre os cards alinhados */
  }

  @media (max-width: 768px) {
    gap: 0;
    padding-top: 15px;
    align-items: end;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
`;

export const InfoCard = styled(motion.div)`
  background: rgba(255, 107, 107, 0.07);
  padding: 25px;
  width: 280px;
  border-radius: 4px;
  backdrop-filter: blur(5px);
  text-align: center;
  color: #133f20;
  position: relative;
  z-index: 1;

  /* IMPORTANTE: Removi o transform: translate daqui */

  @media (max-width: 1200px) {
    /* Força o reset de qualquer transform residual e garante largura fixa ou fluida */
    transform: none !important;
    width: 320px; /* Um pouco maior para preencher melhor a tela tablet/desktop pequeno */
  }

  @media (max-width: 768px) {
    /* O Framer Motion manterá a posição centralizada (x: 0, y: 0)
       quando a animação terminar no mobile. */
    width: 90%;
    padding: 15px;
    background-color: rgba(255, 107, 107, 0.3);

    h3,
    p {
      font-size: 14px !important;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-family: var(--font-lato);
    font-weight: 700;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.85rem;
    font-family: var(--font-lato);
    color: #4a7c59;
  }
`;

export const ContentSideB = styled(motion.div)`
  grid-area: content;
  padding-left: 60px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const TitleB = styled.h2`
  font-family: var(--font-playfair), serif;
  font-size: 3.5rem;
  font-weight: 400;
  color: #133f20;
  margin-bottom: 1.5rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 32px !important;
  }
`;

export const TextB = styled.div`
  font-family: var(--font-lato), sans-serif;
  color: #4a7c59;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;

  p {
    margin-bottom: 1.2rem;
  }
`;

export const MainButton = styled.button`
  background-color: #ff7067;
  color: white;
  border: none;
  padding: 18px 40px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 14px;
  }
`;

export const MobileBr = styled.br`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const DisplayBr = styled.br`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const VerticalLine = styled(motion.div)`
  position: absolute;
  right: 5rem; /* Mesma posição que estava no seu after */
  top: -5rem; /* Mesma posição que estava no seu after */
  width: 1px;
  background-color: #133f20;
  z-index: 999;
  transform-origin: top; /* Crucial para animar de cima para baixo */

  @media (max-width: 768px) {
    display: none; /* Esconde no mobile conforme seu código original */
  }
`;

export const VerticalLineB = styled(VerticalLine)``;
