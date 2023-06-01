import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { ContextProvider } from "../../Context/Context";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

function App() {
  useEffect(() => {
    document.title = `Catálogo da loja`;
  });

  const Format = createGlobalStyle`
  
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
    }
  `;

  return (
    <>
      <Format />
      <ContextProvider>
        <Header />
        <Main />
      </ContextProvider>
    </>
  );
}

export default App;
