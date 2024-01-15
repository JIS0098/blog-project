import React from "react";
import styled from "styled-components";
import Header from "../components/domains/postHeader";
import Content from "../components/domains/post/Content";
import CategoryCarousel from "../components/domains/post/categoryCarousel";

function PostPage() {
  return (
    <PostLayout>
      <PostBox>
        <Header />
        <Content />
        <CategoryCarousel />
      </PostBox>
    </PostLayout>
  );
}
const PostLayout = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 3.5rem;
  display: flex;
  justify-content: center;
`;

const PostBox = styled.div`
  width: 94rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default PostPage;
