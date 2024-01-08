import React from "react";
import styled from "styled-components";

function Tab() {
  return (
    <TabList>
      <li>blog</li>
      <li>Favorites</li>
      <li>guest</li>
    </TabList>
  );
}

const TabList = styled.ul`
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  display: flex;
  justify-content: center;
  gap: 1.8rem;
  list-style-type: none;
  position: absolute;
  bottom: 1.1rem;
`;
export default Tab;
