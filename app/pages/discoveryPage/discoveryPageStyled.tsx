import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5% 6rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/Imgs/fundo_cards_aulas.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    z-index: -1;
  }

  @media (max-width: 768px) {
    align-items: center;
    padding: 15% 0; /* Tiramos o padding lateral aqui para o carrossel ir de ponta a ponta */

    &::after {
      display: none;
    }

    &::before {
      background-image: url("/Imgs/fundoCarrocel.png");
      opacity: 0.4;
      background-position: center;
    }
  }
`;

export const VerticalLine = styled(motion.div)`
  content: "";
  position: absolute;
  left: 5rem;
  top: -5rem;
  height: 115%;
  width: 1px;
  background-color: #133f20;
  z-index: 999;

  @media (max-width: 768px) {
    display: none; /* Esconde no mobile conforme seu código original */
  }
`;

export const HeaderContent = styled(motion.div)`
  max-width: 60%;
  margin-bottom: 8rem;

  @media (max-width: 768px) {
    max-width: 90%; /* Devolvemos o limite lateral só pro texto */
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const MainTitle = styled.h2`
  font-family: var(--font-playfair), serif;
  font-size: 3.2rem;
  font-weight: 300;
  color: #133f20;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const MainSubtitle = styled.p`
  font-family: var(--font-lato), sans-serif;
  font-size: 1rem;
  color: #133f20;
`;

/* --- AQUI ACONTECE A MÁGICA DO CARROSSEL --- */
export const GridStyles = styled.div`
  position: relative;
  width: 100%;

  /* Isso garante que o Swiper ocupe tudo e os slides centralizem o conteúdo */
  .mySwiper {
    width: 100%;
    padding: 20px 0;
  }

  /* ACESSANDO A CLASSE INTERNA DO SWIPER */
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent; /* Remove fundos indesejados */
  }

  @media (max-width: 768px) {
    padding: 0 10px; /* Espaço para as setas não colarem na borda da tela */
  }
`;

export const StyleCard = styled.div`
  background-color: #ffadad;
  width: 280px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .card-content {
    padding: 25px;
    color: #133f20;
    h3 {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }
    p {
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
  @media (max-width: 768px) {
    width: 250px;
    max-width: 300px;
    margin: 0 auto;

    img {
      height: 300px;
    }
  }
`;

// Adicione isso ao seu arquivo de estilos
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

  /* Remove seleções indesejadas */
  outline: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  /* Transição suave para a animação */
  transition: transform 0.1s ease-in-out;

  &.prev {
    left: 20px;
  }
  &.next {
    right: 20px;
  }

  /* Efeito ao clicar (pressionar) */
  &:active {
    transform: translateY(-50%) scale(0.85); /* Diminui para 85% do tamanho */
  }

  /* Opcional: leve aumento ao passar o mouse (hover) antes de clicar */
  @media (hover: hover) {
    &:hover {
      transform: translateY(-50%) scale(1.1);
    }
    &:active {
      transform: translateY(-50%) scale(0.9);
    }
  }

  img {
    width: 100%;
    height: auto;
    pointer-events: none;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

// Novo container apenas para o Desktop
export const DesktopGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  width: 100%;
`;
