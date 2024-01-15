import React from "react";
import styled from "styled-components";

export const UpLoad = () => {
  return (
    <UpLoadBox>
      <ProfileImg />
      <Writer>지수님</Writer>
      <Date>2023.12.27</Date>
      <Time>21:27</Time>
      <IsPublic>공개</IsPublic>
    </UpLoadBox>
  );
};

const UpLoadBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

const Writer = styled.h3`
  color: black;
  font-size: 1rem;
`;

const Date = styled.div``;

const Time = styled.div``;

const IsPublic = styled.div``;
