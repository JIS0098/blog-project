import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const Card = ({ post }) => {
  const router = useRouter();
  const EditDate = (createdAt) => createdAt.substring(0, 10);

  const handlePostClick = (data) => {
    router.push(`/post/${data?._id}`);
  };

  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>?/gm, "");
  };

  const contentWithoutHtmlTags = stripHtmlTags(post.content);

  return (
    <CardLayout
      onClick={() => {
        handlePostClick(post);
      }}
    >
      <FavoriteIcon
        src={"/images/favorite-icon.svg"}
        width={25}
        height={23}
        alt="즐겨찾기 아이콘"
      />
      <DescriptionBox>
        <Title>{post?.title}</Title>
        <TextBox>
          <Text>{contentWithoutHtmlTags}</Text>
        </TextBox>
        <UploadDate>{EditDate(post?.createdAt)}</UploadDate>
      </DescriptionBox>
    </CardLayout>
  );
};

const CardLayout = styled.div`
  width: 20rem;
  height: 25rem;
  background-color: #eaeaea;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const FavoriteIcon = styled(Image)`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
`;
const DescriptionBox = styled.div`
  width: 100%;
  height: 12rem;
  background-color: #ffffff;
  border-radius: 0 0 0.8rem 0.8rem;
  padding: 1.2rem 1rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Title = styled.div`
  font-size: 1.35rem;
  font-weight: 600;
  margin: 0;
`;

const TextBox = styled.div`
  width: 100%;
  height: 4.5rem;
`;

const Text = styled.div`
  font-size: 1.1rem;
  font-weight: 100;
  color: #8b8b8b;
  line-height: 1.5rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const UploadDate = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
`;
export default Card;
