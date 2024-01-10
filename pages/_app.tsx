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
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <SideBar />
        <Header />
        <Component {...pageProps} />
        <PostPage />
      </Layout>
    </>
  );
}

const Layout = styled.div`
  display: flex;
  width: 100%;
`;
