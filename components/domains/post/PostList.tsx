import styled from "styled-components";
import Card from "../../commons/Card";

function PostList({ postList }) {
  return (
    <PostListLayout>
      {postList?.map((post) => <Card post={post} key={post.id} />)}
    </PostListLayout>
  );
}

const PostListLayout = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  & h1 {
    font-size: 2.8rem;
  }
`;

export default PostList;
