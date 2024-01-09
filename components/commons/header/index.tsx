import styled from "styled-components";
import Image from "next/image";
import { ASSETS_IMAGE_URL } from "../../../constants";
import Tab from "../sideBar/Tab";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <HeaderLayout>
      <HeaderImage>
        <Tab />
        <IconBox>
          <SoundIcon
            width={47}
            height={47}
            src="/images/sound-icon.png"
            alt="BGM 아이콘"
          />
          <NightIcon
            width={47}
            height={47}
            src="/images/night-mode-icon.png"
            alt="야간모드 아이콘"
          />
        </IconBox>
        <SearchInput />
      </HeaderImage>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  width: 176rem;
  height: 20rem;
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

const IconBox = styled.div`
  display: flex;
  gap: 0.6rem;
  position: absolute;
  right: 1rem;
`;
const SoundIcon = styled(Image)``;
const NightIcon = styled(Image)``;

export default Header;
