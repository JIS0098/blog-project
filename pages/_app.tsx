import type { AppProps } from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/commons/Header";
import SideBar from "../components/commons/SideBar";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <SideBar />
        <Header />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

const Layout = styled.div`
  display: flex;
`;
