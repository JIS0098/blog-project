import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <TitleBox>
      <DesignLine />
      <p>전체</p>
      <h3>글제목 입니당</h3>
    </TitleBox>
  );
};

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    font-size: 1.1rem;
    margin-top: 0.8rem;
    margin-bottom: 1.5rem;
    color: #a4a4a4;
  }
  & h3 {
    font-size: 3rem;
    font-weight: 600;
  }

  margin-bottom: 4rem;
`;

const DesignLine = styled.div`
  height: 0.2rem;
  background-color: #a648a8;
  width: 2.5rem;
`;

export default Title;
