import React from "react";
import styled from "styled-components";

function Category() {
  return (
    <CategoryLayout>
      <h3>Category</h3>
      <CategoryList>
        <li>
          전체 <span>(20)</span>
        </li>
        <li>
          일상 <span>(10)</span>
        </li>
        <li>
          React <span>(10)</span>
        </li>
        <li>
          React <span>(10)</span>
        </li>
        <li>
          React <span>(10)</span>
        </li>
        <li>
          React <span>(10)</span>
        </li>
      </CategoryList>
    </CategoryLayout>
  );
}

const CategoryLayout = styled.div`
  margin-top: 0.4rem;

  & h3 {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
`;

const CategoryList = styled.ul`
  color: white;
  font-size: 1.2rem;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 100;

  & span {
    font-size: 1rem;
  }
`;

export default Category;
