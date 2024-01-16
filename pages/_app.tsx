import type { AppProps } from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/commons/header";
import SideBar from "../components/commons/sideBar";
import PostPage from "./post";

const GlobalStyle = createGlobalStyle`
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
      <Layout>
        <SideBar />
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>
      </Layout>
    </>
  );
}

const Layout = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
