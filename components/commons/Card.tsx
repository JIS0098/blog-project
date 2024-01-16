import React from "react";
import styled from "styled-components";
import Image from "next/image";
const Card = () => {
  return (
    <CardBox>
      <FavoriteIcon
        src={"/images/favorite-icon.svg"}
        width={34}
        height={33}
        alt="즐겨찾기 아이콘"
      />
      <DescriptionBox>
        <Title>엽떡vs마라로제</Title>
        <Text>
          나는 이번주에 떡볶이를 먹을건데 진짜진짜 고민 이다 마라맛도 먹고싶고
          엽떡의 원조맛도 먹고 싶 은데 세상엔 먹을게 어쩌구 저쩌구 이렇쿵
          저러...
        </Text>
        <UploadDate>2024. 01. 12</UploadDate>
      </DescriptionBox>
    </CardBox>
  );
};

const CardBox = styled.div`
  width: 18rem;
  height: 23rem;
  background-color: #eaeaea;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
`;
const FavoriteIcon = styled(Image)`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
`;
const DescriptionBox = styled.div`
  width: 100%;
  height: 11.5rem;
  background-color: #ffffff;
  border-radius: 0 0 0.8rem 0.8rem;
  padding: 1.2rem 1rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.09rem;
`;

const Title = styled.h6`
  font-size: 1.3rem;
  margin: 0;
`;

const Text = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  color: #8b8b8b;
`;

const UploadDate = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: black;
`;
export default Card;
