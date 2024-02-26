import SearchInput from "../../components/commons/SearchInput";
import styled from "styled-components";
import PostList from "../../components/domains/post/PostList";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function postPage() {
  const { data } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/api");
      return response.data;
    },
  });

  return (
    <PostPageLayout>
      <SearchInput placeholder="제목, 내용을 입력해주세요.">전체</SearchInput>
      {data?.length > 0 ? (
        <PostList postList={data} />
      ) : (
        <NotFoundPost>
          <div>저장된 게시물이 없습니다.</div>
        </NotFoundPost>
      )}
    </PostPageLayout>
  );
}

const PostPageLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFoundPost = styled.div`
  & div {
    font-size: 1.6rem;
  }

  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default postPage;
