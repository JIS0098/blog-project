import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { UpLoad } from "./UpLoad";
import Title from "../Title";
import ActionBadges from "../meta/ActionBadges";

const Meta = () => {
  return (
    <MetaBox>
      <UpLoad />
      <ActionBadges />
    </MetaBox>
  );
};

const MetaBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #a4a4a4;
  border-bottom: 0.1rem solid #d9d9d9;
  padding: 0 0.8rem 0.8rem;
`;

export default Meta;
