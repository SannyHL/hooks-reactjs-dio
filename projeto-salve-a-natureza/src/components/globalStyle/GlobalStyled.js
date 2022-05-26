import { createGlobalStyle } from 'styled-components';
import lionImg from '../../Imagens/lion.jpg';

export const GlobalStyle = createGlobalStyle`
body {
    background: url(${lionImg}) center no-repeat;
    background-size: cover;
    color: orange;
    padding: 0;
    margin: 0;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    align-items: center;
  }
`;