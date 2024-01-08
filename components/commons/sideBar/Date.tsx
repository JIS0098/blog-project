import styled from "styled-components";

function Date() {
  return (
    <DateBox>
      <Text>2024.01.04</Text>
      <ClockBox>
        <Time>10:17</Time>
        <TimeMeridiem>am</TimeMeridiem>
      </ClockBox>
    </DateBox>
  );
}

const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;
const Text = styled.div`
  font-size: 0%.08;
  font-weight: 400;
  margin-left: 0.2rem;
  margin-bottom: -0.4rem;
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
export default Date;
