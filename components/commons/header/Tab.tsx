import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Tab() {
  return (
    <TabList>
      <Link href="/post">
        <li>Home</li>
      </Link>
      <Link href="/edit">
        <li>Write</li>
      </Link>
    </TabList>
  );
}

const TabList = styled.ul`
  color: white;
  font-size: 2rem;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 1.8rem;
  list-style-type: none;
  bottom: 1.1rem;
`;
export default Tab;
