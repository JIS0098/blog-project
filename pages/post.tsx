import React from "react";
import styled from "styled-components";
import Image from "next/image";

function PostPage() {
  return (
    <PostLayout>
      <PostBox>
        <Header>
          <TitleBox>
            <DesignLine />
            <p>전체</p>
            <h3>글제목</h3>
          </TitleBox>
          <MetaBox>
            <UpLoadBox>
              <ProfileImg />
              <Writer>지수님</Writer>
              <Date>2023.12.27</Date>
              <Time>21:27</Time>
              <IsPublic>공개</IsPublic>
            </UpLoadBox>
            <ActionButtonBox>
              <ShareLink>URL복사</ShareLink>
              <EditPost>수정</EditPost>
              <DeletePost>삭제</DeletePost>
              <FavoriteIcon
                width={4}
                height={4}
                src="/images/favorite-icon"
                alt="즐겨찾기 아이콘"
              />
            </ActionButtonBox>
          </MetaBox>
        </Header>
      </PostBox>
    </PostLayout>
  );
}
const PostLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10rem;
`;

const PostBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    font-size: 1.1rem;
  }
  & h3 {
    font-size: 2.25rem;
  }
`;

const DesignLine = styled.div`
  height: 0.2rem;
  background-color: var(--main-color);
  width: 3rem;
`;

const MetaBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #a4a4a4;
`;

const UpLoadBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ActionButtonBox = styled.div`
  font-size: 1rem;
  display: flex;
  gap: 0.5rem;
  color: #a4a4a4;
`;

const ProfileImg = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

const Writer = styled.h3`
  color: black;
  font-size: 1rem;
`;

const Date = styled.div``;
const Time = styled.div``;
const IsPublic = styled.div``;

const ShareLink = styled.div``;
const EditPost = styled.div``;
const DeletePost = styled.div``;
const FavoriteIcon = styled(Image)``;

export default PostPage;
