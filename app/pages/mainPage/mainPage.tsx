"use client";
import * as S from "./mainPageStyled";
import { motion } from "framer-motion";

export default function MainPage() {
  return (
    <S.MainContainer>
      <S.MainCard>
        {/* 1. A LINHA: Anima a escala no eixo Y de 0 para 1 */}
        <S.VerticalLine
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ height: "60%" }} // Altura que estava no seu CSS
        />
        

        {/* 2. O CONTEÚDO: Surge da esquerda para a direita com um pequeno delay */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5, // Começa no meio da animação da linha
            ease: "easeOut" 
          }}
        >
          <S.MainTitle>
            Yoga que
            <S.MobileBr /> se adapta <S.MobileBr />a <S.DisplayBr />
            sua rotina
          </S.MainTitle>

          <S.MainText>
            Conecte corpo e mente
            <S.MobileBr /> sem pressa e sem complicação.
            <S.MobileBr /> Nossos professores certificados
            <S.MobileBr /> te guiam
            <S.DisplayBr />
            em aulas online que se
            <S.MobileBr /> adaptam ao seu ritmo.{" "}
            <strong>
              Comece
              <S.MobileBr /> com 7 dias grátis!
            </strong>
          </S.MainText>

          <S.MainButton>Experimente grátis por 7 dias</S.MainButton>
        </motion.div>
      </S.MainCard>
    </S.MainContainer>
  );
}