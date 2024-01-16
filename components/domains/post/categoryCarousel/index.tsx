import React from "react";
import styled from "styled-components";
import Card from "../../../commons/Card";

const CategoryCarousel = () => {
  return (
    <CategoryCarouselLayout>
      <CategoryTitle>
        <h5>
          전체<span>글목록</span>
        </h5>
      </CategoryTitle>
      <CategoryCarouselBox>
        <NextButton />
        <CardListBox>
          <Card />
        </CardListBox>
        <PreviousButton />
      </CategoryCarouselBox>
    </CategoryCarouselLayout>
  );
};

const CategoryCarouselLayout = styled.div`
  background-color: #f9f5ff;
`;
const CategoryTitle = styled.div`
  & h5 {
    font-size: 1.8rem;
  }

  & span {
    font-size: 1rem;
    margin-left: 0.3rem;
    color: #a4a4a4;
    font-weight: 500;
  }
`;
const CategoryCarouselBox = styled.div``;
const NextButton = styled.button``;
const PreviousButton = styled.button``;
const CardListBox = styled.div``;
export default CategoryCarousel;
