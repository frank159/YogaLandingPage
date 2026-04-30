import { motion } from "framer-motion";
import styled from "styled-components";

// Container principal que engloba a seção final e o footer
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* Garante que preenchimentos não aumentem o tamanho total */
  box-sizing: border-box;
  overflow-x: hidden; /* Segurança extra contra elementos que escapam */

  /* Aplica em todos os filhos para evitar o mesmo erro em sub-elementos */
  & * {
    box-sizing: border-box;
  }
`;
export const FinalSection = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: start;
  padding-left: 6rem;
  padding-top: 5%;

  /* Imagem Desktop */
  background-image: url("/Imgs/foto-final.jpg");
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    height: 100vh; /* Ocupa a tela toda no mobile */
    align-items: flex-start;
    padding-left: 3rem !important;
    padding-right: 0 !important;

    /* TROCA A IMAGEM NO MOBILE */
    background-image: url("/Imgs/FinalImg.png");
    background-position: center bottom; /* Ajusta para a modelo aparecer melhor */
  }

  @media (max-width: 1200px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export const MainCard = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 25px;
    max-width: 300px; /* Limita a largura para o texto quebrar como no print */
  }
`;

export const MainTitle = styled.h1`
  font-family: var(--font-playfair), serif;
  color: #133f20;
  line-height: 1.1;
  margin: 0;
  font-size: 3.5rem; /* Tamanho desktop original (ajuste se necessário) */

  @media (max-width: 768px) {
    font-size: 2rem !important; /* Aumentado para dar o impacto do print */
  }
`;

export const MainText = styled.p`
  font-family: var(--font-lato), sans-serif;
  font-size: 1.1rem;
  color: #133f20;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem !important;
    max-width: 90%;
    font-weight: 500;
  }
`;

export const MainButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 50px;
  width: fit-content;
  font-family: var(--font-lato), sans-serif;
  font-weight: 200;
  text-transform: none; /* Removi o uppercase para bater com o print */
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  transition: transform 0.2s ease;

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 0.95rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

// --- ESTILOS DO RODAPÉ ---
export const FooterImg = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

export const Footer = styled.footer`
  background-color: #133f20;
  color: white;
  padding: 25px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-lato), sans-serif;
  font-size: 0.85rem;

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    gap: 20px; /* Espaço entre logo, texto e ícones */
    text-align: center; /* Centraliza o texto das redes sociais e copyright */
    padding: 30px 5%;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  img {
    width: 24px;   /* Tamanho desktop */
    height: auto;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    order: 3;      /* Garante que fique por último se desejar */
    img {
      width: 20px; /* Tamanho reduzido no mobile */
    }
  }
`;