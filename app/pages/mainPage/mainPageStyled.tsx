import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: start;

  padding-left: 40%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/Imgs/Principal.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
    align-items: start;

    &::before {
      background-image: url("/Imgs/inicio_mobi.png");
      opacity: 0.9;
      background-position: center top;
    }
  }
`;

export const MainCard = styled.div`
  position: relative;
  width: 100%;
  padding-left: 40px;
  padding-right: 6rem;

  /* Removemos o ::before daqui para animar uma div real */

  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    margin-top: 50%;
  }
`;

export const VerticalLine = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  background-color: #133f20;
  transform-origin: top; /* Garante que ela cresça de cima para baixo */

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainTitle = styled.h1`
  font-family: var(--font-playfair), serif;
  font-weight: 300;
  color: #133f20;
  line-height: 1.1;
  padding-top: 8rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem !important;
    padding-top: 0;
    margin-bottom: 1.5rem;
  }
`;

export const MainText = styled.p`
  font-family: var(--font-lato), sans-serif;
  color: #133f20;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem !important;
    max-width: 85%;
  }
`;

export const MainButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 50px;
  font-family: var(--font-lato), sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
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
