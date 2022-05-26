import styled from 'styled-components';
import {string, func} from "prop-types";
import {Button} from '../button';


export const Quotes = ({quote, onUpdate = () => {} }) => {
    return (
      <Wrapper>
        <Text>Para salvar a natureza , faça a sua parte!</Text>
        <Quote> {quote} </Quote>
        <Button onClick={onUpdate}>Mudar frase...</Button>
      </Wrapper>
    );
};

Quotes.prototype = {
  quote: string,
  onUpdate: func
}

const Text = styled.h1`
color: Black;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 3em;
align-items: flex-start;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.p`
  font-size: 2em;
  margin: 0;
`;