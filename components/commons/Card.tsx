import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <CardLayout>
      <CardBox>
        <FavoritesIcon />
        <DescriptionBox>
          <h3>엽떡vs마라로제</h3>
          <p>내용</p>
          <div>2024.01.09</div>
        </DescriptionBox>
      </CardBox>
    </CardLayout>
  );
}
const CardLayout = styled.div``;
const CardBox = styled.div``;
const DescriptionBox = styled.div``;
const FavoritesIcon = styled.div``;
export default Card;
