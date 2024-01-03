import styled from "styled-components";
import { ASSETS_IMAGE_URL } from "../../constants";

function Header() {
  return (
    <HeaderLayout>
      <HeaderImage />
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  width: 87%;
  height: 22.5rem;
  overflow: hidden;
`;

const HeaderImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${ASSETS_IMAGE_URL}/images/headerImg.jpg);
  background-size: cover;
  background-position-y: 81.5%;
  backdrop-filter: blur(10px);
`;

export default Header;
