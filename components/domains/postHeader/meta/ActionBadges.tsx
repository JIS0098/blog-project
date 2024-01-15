import React from "react";
import styled from "styled-components";
import Image from "next/image";

const ActionBadges = () => {
  return (
    <ActionButtonBox>
      <ShareLink>URL복사</ShareLink>
      <EditPost>수정</EditPost>
      <DeletePost>삭제</DeletePost>
      <FavoriteIcon
        width={24}
        height={24}
        src="/images/favorite-icon.svg"
        alt="즐겨찾기 아이콘"
      />
    </ActionButtonBox>
  );
};

const ActionButtonBox = styled.div`
  font-size: 1rem;
  display: flex;
  gap: 0.5rem;
  color: #a4a4a4;
  align-items: center;
`;

const ShareLink = styled.div``;
const EditPost = styled.div``;
const DeletePost = styled.div``;
const FavoriteIcon = styled(Image)``;

export default ActionBadges;
