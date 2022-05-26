import { useState } from 'react';
import styled from 'styled-components';
import { getQuote } from '../../services';
import { Quotes } from '../../components';


export function App(){
  const [quoteState, setQuoteState] = useState({quote: 
    <>
      <p>Aqui aparecerá a frase quando a API estiver terminada!</p>
    </>
});

  const onUpdate = async () => {
    const quote = await getQuote();

    setQuoteState(quote);
  };

  return (
    <Content>
      <Quotes quote={quoteState.quote} onUpdate={onUpdate} />
    </Content>
  );
}



const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content:center;
  align-items: center;
`;























