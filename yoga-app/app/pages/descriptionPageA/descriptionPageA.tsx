"use client";
import { useRef } from "react"; // Adicione o useRef
import { useInView } from "framer-motion"; // Adicione o useInView
import * as S from "./descriptionPageAStyled";

export default function DescriptionPageA() {
  // Criamos uma referência para a seção
  const cardVariants = {
    hidden: (custom) => {
      // Agora verifica se a tela é menor que 1200px
      const isAligned =
        typeof window !== "undefined" && window.innerWidth < 1200;

      // Se estiver alinhado, ele vem apenas da esquerda (-50)
      // Se for desktop largo (>1200), mantém a lógica original
      const startX = isAligned
        ? -50
        : custom.id % 2 === 0
          ? custom.origX + 50
          : custom.origX - 50;

      const startY = isAligned ? 20 : custom.origY + 20;

      return {
        opacity: 0,
        x: startX,
        y: startY,
      };
    },
    visible: (custom) => {
      const isAligned =
        typeof window !== "undefined" && window.innerWidth < 1200;

      return {
        opacity: 1,
        // Se for menor que 1200px, força x e y para 0 (alinhamento natural do flexbox)
        x: isAligned ? 0 : custom.origX,
        y: isAligned ? 0 : custom.origY,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          delay: custom.id * 0.2 + 0.3,
        },
      };
    },
  };
  
  const refA = useRef(null);
  const isInViewA = useInView(refA, { once: true, amount: 0.2 });

  // 2. Gatilho para a Seção B
  const refB = useRef(null);
  const isInViewB = useInView(refB, { once: true, amount: 0.3 });
  return (
    <>
      <S.GlobalStyle />
      <S.MainWrapper>
        {/* Passamos a ref para a SectionA */}
        <S.SectionA>
          {/* A LINHA: agora ela reage ao estado 'isInView' da seção pai */}
          <S.VerticalLine
            initial={{ scaleY: 0 }}
            animate={isInViewA ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ height: "110%" }}
          />

          <S.VerticalLineB
            initial={{ scaleY: 0 }}
            animate={isInViewB ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ height: "200%" }}
          />

          <S.MainCardA
            ref={refA}
            initial={{ opacity: 0, x: -30 }}
            animate={isInViewA ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <S.TitleA>
              Está difícil encontrar equilíbrio na sua <S.DisplayBr />
              rotina agitada?
            </S.TitleA>
            <S.IconsContainer>
              <S.IconBox>
                <img src="/Imgs/icon-tempo.png" alt="Tempo" />
                <span>Sem tempo?</span>
              </S.IconBox>
              <S.IconBox>
                <img src="/Imgs/icon-ansiedade.png" alt="Ansiedade" />
                <span>Ansiedade?</span>
              </S.IconBox>
              <S.IconBox>
                <img src="/Imgs/icon-dores.png" alt="Dores" />
                <span>Dores posturais?</span>
              </S.IconBox>
            </S.IconsContainer>
            <S.TextContainerA>
              <p style={{ color: "#4A7C59" }}>
                Muitas vezes, o estresse do dia a dia, a falta de tempo e a
                correria não nos permitem cuidar de nossa saúde mental e física.
              </p>
              <p>
                <strong>
                  A boa notícia é que existe uma forma simples, eficaz e
                  acessível de recuperar o equilíbrio sem sair de casa.
                </strong>
              </p>
            </S.TextContainerA>
          </S.MainCardA>
        </S.SectionA>

        <S.SectionB>
          <S.CardsWrapper>
            <S.InfoCard
              variants={cardVariants}
              initial="hidden"
              animate={isInViewB ? "visible" : "hidden"}
              custom={{ id: 1, origX: 100, origY: 50 }}
            >
              <img src="/Imgs/play-circle.png" alt="" />
              <h3>Aulas de 15 a 45 minutos:</h3>
              <p>Escolha o tempo ideal para sua rotina.</p>
            </S.InfoCard>

            <S.InfoCard
              variants={cardVariants}
              initial="hidden"
              animate={isInViewB ? "visible" : "hidden"}
              custom={{ id: 2, origX: 280, origY: 10 }}
            >
              <img src="/Imgs/elements.png" alt="" />
              <h3>Acesso a +200 aulas:</h3>
              <p>Pratique a qualquer momento.</p>
            </S.InfoCard>

            <S.InfoCard
              variants={cardVariants}
              initial="hidden"
              animate={isInViewB ? "visible" : "hidden"}
              custom={{ id: 3, origX: 20, origY: -60 }}
            >
              <img src="/Imgs/new-releases.png" alt="" />
              <h3>Professores Certificados:</h3>
              <p>Aprenda com os melhores.</p>
            </S.InfoCard>
          </S.CardsWrapper>
          <S.ContentSideB
            ref={refB}
            initial={{ opacity: 0, x: -30 }}
            animate={isInViewB ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <S.TitleB>Yoga no seu tempo e no seu ritmo!</S.TitleB>
            <S.TextB>
              <p>
                Com aulas ao vivo e gravadas, você escolhe o tempo e a
                intensidade da sua prática.
              </p>
              <p>
                Nossa plataforma oferece acesso a uma ampla gama de estilos e
                técnicas...
              </p>
            </S.TextB>
            <S.MainButton>Experimente grátis por 7 dias</S.MainButton>
          </S.ContentSideB>
        </S.SectionB>
      </S.MainWrapper>
    </>
  );
}
