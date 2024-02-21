import styled from "styled-components";

function TextEditor() {
  return (
    <TextEditorLayout>
      <h1>글쓰기</h1>
    </TextEditorLayout>
  );
}

const TextEditorLayout = styled.div`
  & h1 {
    font-size: 3rem;
  }
`;
export default TextEditor;
