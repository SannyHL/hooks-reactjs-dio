export const getQuote = () => 
fetch(process.env.API).then((response) => response.json());




