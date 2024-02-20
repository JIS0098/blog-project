import type { AppProps } from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/commons/header";

const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
}

  body {
    margin: 0;
  }
  body *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
 
  :root{
    --main-color:#B69DD9;
  }



`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
