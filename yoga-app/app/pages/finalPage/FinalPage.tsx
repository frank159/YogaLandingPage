"use client";
import { useInView } from "framer-motion";
import * as S from "./FinalPageStyled";
import { useRef } from "react";

export default function FinalPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <S.MainContainer>
      <S.FinalSection>
        <S.MainCard
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          <S.MainTitle>
            Seu momento de <br />
            equilíbrio começa agora
          </S.MainTitle>
          <S.MainText>
            Garanta 7 dias grátis de acesso ilimitado a todas as práticas.
            Experimente no seu tempo, no conforto da sua casa.
          </S.MainText>
          <S.MainButton>Começar minha transformação</S.MainButton>
        </S.MainCard>
      </S.FinalSection>
      {/* Rodapé institucional */}
      <S.Footer>
        <S.FooterImg src="/Imgs/flor.png" alt="flor" />

        <p>© 2026 Yoga Estúdio. Todos os direitos reservados.</p>

        <S.SocialContainer>
          <S.FooterImg src="/Imgs/whats.png" alt="whats" />
          <S.FooterImg src="/Imgs/insta.png" alt="insta" />
        </S.SocialContainer>
      </S.Footer>
    </S.MainContainer>
  );
}
