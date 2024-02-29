import styled from "styled-components";
import Header from "./commons/header";

function PageLayout({ children }) {
  return (
    <Layout>
      <Header />
      <Page>{children}</Page>
      <Footer />
    </Layout>
  );
}
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const Page = styled.div`
  max-width: 88rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const Footer = styled.div`
  height: 5rem;
`;
export default PageLayout;
