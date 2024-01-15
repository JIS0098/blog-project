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

const CategoryCarouselLayout = styled.div``;
const CategoryTitle = styled.div``;
const CategoryCarouselBox = styled.div``;
const NextButton = styled.button``;
const PreviousButton = styled.button``;
const CardListBox = styled.div``;
export default CategoryCarousel;
