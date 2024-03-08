import styled from "styled-components";
import { ASSETS_IMAGE_URL } from "../../../constants";
import Tab from "./Tab";

function Header() {
  return (
    <HeaderLayout>
      <HeaderImage>
        <Tab />
      </HeaderImage>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  width: 100%;
  height: 27rem;
  overflow: hidden;
`;

const HeaderImage = styled.div`
  padding: 1rem 1.25rem;
  display: flex;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${ASSETS_IMAGE_URL}/images/headerImg.jpg);
  background-size: cover;
  background-position-y: 81.5%;
  backdrop-filter: blur(10px);
`;

export default Header;
