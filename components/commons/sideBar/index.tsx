import styled from "styled-components";
import ProfileImg from "./ProfileImg";
import Category from "./Category";
import Date from "./Date";
import Comment from "./Comment";

function SideBar() {
  return (
    <SideBarLayout>
      <SideBarBox>
        <Date />
        <ProfileImg />
        <Comment />
        <Category />
      </SideBarBox>
    </SideBarLayout>
  );
}

const SideBarLayout = styled.div`
  background-color: #b69dd9;
  width: 16rem;
  height: 100vh;
  padding: 1.6rem 1.5rem;
`;
const SideBarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
  gap: 0.7rem;
`;

export default SideBar;
