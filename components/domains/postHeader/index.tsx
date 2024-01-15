import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Meta from "./meta";

const Header = () => {
  return (
    <HeaderBox>
      <Title />
      <Meta />
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  width: 100%;
`;

export default Header;
