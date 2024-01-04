import styled from "styled-components";

function SideBar() {
  return (
    <SideBarLayout>
      <SideBarBox>
        <DateBox>
          <Date>2024.01.04</Date>
          <ClockBox>
            <Time>10:17</Time>
            <TimeMeridiem>am</TimeMeridiem>
          </ClockBox>
        </DateBox>
        <ProfileImg />
        <CommentBox>
          <h5>지수님</h5>
          <Comment>Hello, World!</Comment>
        </CommentBox>
      </SideBarBox>
    </SideBarLayout>
  );
}

const SideBarLayout = styled.div`
  background-color: #b69dd9;
  width: 12.5%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const SideBarBox = styled.div`
  margin: 0 auto;
`;

const ProfileImg = styled.div`
  width: 11rem;
  height: 14rem;
  background-color: white;
  border-radius: 1rem;
`;

const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;
const Date = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;
const ClockBox = styled.div`
  display: flex;
  align-items: end;
  gap: 0.1rem;
`;
const Time = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
const TimeMeridiem = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;
const CommentBox = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
`;
const Comment = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;

export default SideBar;
