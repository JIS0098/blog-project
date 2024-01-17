import React from "react";
import styled from "styled-components";
import Card from "../../../commons/Card";
import Image from "next/image";

const CategoryCarousel = () => {
  return (
    <CategoryCarouselLayout>
      <CategoryCarouselBox>
        <PreviousButton
          src={"/images/carousel-button.png"}
          width={20}
          height={30}
          alt="캐러셀 버튼"
        />
        <CardListBox>
          <CategoryTitle>
            <h5>
              전체<span>글목록</span>
            </h5>
          </CategoryTitle>
          <CardList>
            <Card />
            <Card />
            <Card />
            <Card />
          </CardList>
          <PaginationButton>
            <div></div>
            <div></div>
            <div></div>
          </PaginationButton>
        </CardListBox>
        <NextButton
          src={"/images/carousel-button.png"}
          width={20}
          height={30}
          alt="캐러셀 버튼"
        />
      </CategoryCarouselBox>
    </CategoryCarouselLayout>
  );
};

const CategoryCarouselLayout = styled.div`
  background-color: #f9f5ff;
  padding: 4rem 3rem;
`;
const CategoryTitle = styled.div`
  margin-bottom: 0.8rem;

  & h5 {
    font-size: 2.5rem;
  }

  & span {
    font-size: 1.2rem;
    margin-left: 0.4rem;
    color: #a4a4a4;
    font-weight: 500;
  }
`;

const CategoryCarouselBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;
`;

const PreviousButton = styled(Image)``;

const NextButton = styled(PreviousButton)`
  transform: scaleX(-1);
`;

const CardListBox = styled.div``;

const CardList = styled.div`
  display: flex;
  gap: 3rem;
`;

const PaginationButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 3rem;

  & div {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #eaeaea;

    &:hover {
      background-color: #a648a8;
    }
  }
`;
export default CategoryCarousel;
