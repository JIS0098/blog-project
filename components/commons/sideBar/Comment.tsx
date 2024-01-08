import styled from "styled-components";

function Comment() {
  return (
    <CommentBox>
      <h5>지수님</h5>
      <Text>Hello, World!</Text>
      <Line />
    </CommentBox>
  );
}

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
`;
const Text = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 0.1rem;
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 0.25rem dotted #ffffff;
  margin-top: 1rem;
`;

export default Comment;
