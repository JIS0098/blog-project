import type { AppProps } from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import PageLayout from "../components/PageLayout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

  a {
  text-decoration: none; 
  color: inherit; 
  cursor: pointer; 
  
}

`;

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
