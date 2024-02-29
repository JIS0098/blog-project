import styled from "styled-components";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios from "axios";
import { ObjectId } from "mongodb";

function postPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/api");
      return response.data;
    },
    cacheTime: 10 * 60 * 1000,
    enabled: !!id,
  });

  const EditDate = (createdAt) => createdAt?.substring(0, 10);

  const post = data?.find((post) => post._id === id);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/${id}`);
      router.push("/post");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <Layout>
        <PostTitleBox>
          <div>전체</div>
          <h1>{post?.title}</h1>
        </PostTitleBox>
        <PostMetaBox>
          <div>{EditDate(post?.createdAt)}</div>
          <PostEditBox>
            <div>수정</div>
            <div onClick={handleDelete}>삭제</div>
          </PostEditBox>
        </PostMetaBox>
        <PostContent dangerouslySetInnerHTML={{ __html: post?.content }} />
      </Layout>
    </>
  );
}

const Layout = styled.div`
  width: 88rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3.5rem;

  & div {
    font-size: 1.6rem;
    padding-left: 0.5rem;
    color: gray;
  }

  & h1 {
    font-size: 4.5rem;
    color: black;
  }
`;

const PostTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const PostMetaBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  border-bottom: 0.1rem solid gray;
  padding: 1rem;
  color: gray;
`;

const PostEditBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

const PostContent = styled.div`
  font-size: 1.8rem;
  color: black;
`;

export default postPage;
