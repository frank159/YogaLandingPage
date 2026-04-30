// import styled from "styled-components";


// export const MainContainer = styled.section`
//   position: relative;
//   min-height: 80vh;
//   width: 100%;
//   display: grid;
//   /* Diminuímos o espaço das colunas para forçar a aproximação */
//   grid-template-columns: 0.8fr 1.2fr; 
//   align-items: center;
//   padding: 50px 5rem;
//   background-color: #e7e7e6;
//   overflow-x: hidden; /* Evita scroll lateral por causa do overlap */

//   @media (max-width: 1200px) {
//     grid-template-columns: 1fr;
//     gap: 80px;
//     text-align: center;
//     padding: 80px 5rem;
//   }
// `;

// export const CardsWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   position: relative;
//   z-index: 2; /* Garante que fique por cima do texto */
//   margin-right: -100px; /* Puxa os cards para cima do conteúdo lateral */

//   @media (max-width: 1200px) {
//     margin-right: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 400px;
//     margin: 0 auto;
//     width: 100%;
//   }
// `;

// export const InfoCard = styled.div<{ $x?: string; $y?: string }>`
//   background: rgba(255, 107, 107, 0.07);
//   padding: 25px;
//   width: 280px;
//   border-radius: 4px;
//   backdrop-filter: blur(5px);
//   text-align: center;
//   color: #133f20;

//   transform: translate(${(props) => props.$x}, ${(props) => props.$y});

//   @media (max-width: 1200px) {
//     --x1: 0; --y1: 0;
//     --x2: 0; --y2: 0;
//     --x3: 0; --y3: 0;
    
//     transform: translate(0, 0) !important; 
//   }

//   position: relative;
//   z-index: 1;

//   &:hover {
//     z-index: 10;
//   }
//   img {
//     width: 30px;
//     margin-bottom: 10px;
//   }

//   h3 {
//     font-size: 1.1rem;
//     font-family: var(--font-lato);
//     font-weight: 700;
//     margin-bottom: 5px;
//   }

//   p {
//     font-size: 0.85rem;
//     font-family: var(--font-lato);
//     color: #4a7c59;
//   }
// `;

// export const ContentSide = styled.div`
//   padding-left: 120px; /* Espaço para os cards "entrarem" sem cobrir o texto principal */
//   padding-right: 2rem;
//   position: relative;
//   z-index: 1;

//   @media (max-width: 1200px) {
//     padding: 0;
//     margin: 0 auto;
//   }
// `;

// export const MainTitle = styled.h1`
//   font-family: var(--font-playfair), serif;
//   font-size: 4rem;
//   font-weight: 400;
//   color: #133f20;
//   margin-bottom: 2rem;
//   margin-right: 4rem;
//   line-height: 1;

//   @media (max-width: 1200px) {
//     font-size: 2.5rem;
//     margin-right: 0;
//   }
// `;

// export const MainText = styled.div`
//   font-family: var(--font-lato), sans-serif;
//   color: #4a7c59;
//   line-height: 1.6;
//   margin-bottom: 2rem;

//   p {
//     margin-bottom: 1.5rem;
//   }
// `;

// export const MainButton = styled.button`
//   background-color: #ff7067;
//   color: white;
//   border: none;
//   padding: 15px 35px;
//   border-radius: 50px;
//   font-weight: 700;
//   cursor: pointer;
// `;

