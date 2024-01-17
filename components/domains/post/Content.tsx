import React from "react";
import styled from "styled-components";

const Content = () => {
  return <ContentBox>안녕하세요? 내용물입니다</ContentBox>;
};

const ContentBox = styled.div`
  display: flex;

  padding: 3rem;
`;

export default Content;
