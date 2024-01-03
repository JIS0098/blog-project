import styled from "styled-components";

function SideBar() {
  return (
    <SideBarBox>
      <ProfileImg />
    </SideBarBox>
  );
}

const SideBarBox = styled.div`
  background-color: #b69dd9;
  width: 12.5%;
  height: 100vh;
`;
const ProfileImg = styled.div``;
export default SideBar;
