import SearchInput from "../../components/commons/SearchInput";
import styled from "styled-components";
import PostList from "../../components/domains/post/PostList";

function postPage() {
  return (
    <>
      <PostPageLayout>
        <SearchInput placeholder="제목, 내용을 입력해주세요.">전체</SearchInput>
        <PostList />
      </PostPageLayout>
    </>
  );
}

const PostPageLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default postPage;
