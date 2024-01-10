import React from "react";
import styled from "styled-components";
import Image from "next/image";

function PostPage() {
  return (
    <PostLayout>
      <PostBox>
        <TitleBox>
          <DesignLine />
          <p>전체</p>
          <h3>글제목</h3>
        </TitleBox>
        <MetaBox>
          <ProfileBox>
            <Img />
            <div>지수님</div>
          </ProfileBox>
          <UpLoadBox>
            <Date>2023.12.27</Date>
            <Time>21:27</Time>
            <IsPublic>공개</IsPublic>
          </UpLoadBox>
        </MetaBox>
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
      </PostBox>
    </PostLayout>
  );
}
const PostLayout = styled.div``;
const PostBox = styled.div``;
const TitleBox = styled.div``;
const DesignLine = styled.div``;
const MetaBox = styled.div``;
const ProfileBox = styled.div``;
const Img = styled.div``;
const UpLoadBox = styled.div``;
const Date = styled.div``;
const Time = styled.div``;
const IsPublic = styled.div``;
const ActionButtonBox = styled.div``;
const ShareLink = styled.div``;
const EditPost = styled.div``;
const DeletePost = styled.div``;
const FavoriteIcon = styled(Image)``;

export default PostPage;
