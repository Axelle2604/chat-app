import styled, { createGlobalStyle } from 'styled-components';

export const GlobalBodyStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
    }
    body {
        margin: 0;
    }
`;

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
