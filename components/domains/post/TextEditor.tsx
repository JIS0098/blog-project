import styled from "styled-components";
import { useRef } from "react";
import axios from "axios";

function TextEditor() {
  const 내용 = useRef("");
  const 제목 = useRef("");

  return (
    <TextEditorLayout>
      <h1>글쓰기</h1>
      <input
        onChange={(e) => {
          제목.current = e.target.value;
        }}
        placeholder="제목을 입력해 주세요."
      />
      <input
        onChange={(e) => {
          내용.current = e.target.value;
        }}
        type="textarea"
      />
      <button
        onClick={async () => {
          const newData = await axios.post("http://localhost:3000/api", {
            title: 제목.current,
            content: 내용.current,
          });
          내용.current = "";
          제목.current = "";
        }}
      >
        등록
      </button>
    </TextEditorLayout>
  );
}

const TextEditorLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 95rem;

  & h1 {
    font-size: 3rem;
    margin-bottom: 0.8rem;
  }

  & input {
    height: 5rem;
    border-radius: 0.6rem;
    padding: 0 2rem;
    font-size: 2rem;
  }
`;

export default TextEditor;
