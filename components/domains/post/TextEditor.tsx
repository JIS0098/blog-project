import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

function TextEditor() {
  const [내용, set내용] = useState("");
  const [할일목록, set할일목록] = useState();
  const [제목, set제목] = useState("");

  return (
    <TextEditorLayout>
      <h1>글쓰기</h1>
      <input
        onChange={(e) => {
          set제목(e.target.value);
        }}
        placeholder="제목을 입력해 주세요."
      />
      <input
        onChange={(e) => {
          set내용(e.target.value);
        }}
        type="textarea"
      />
      <button
        onClick={async () => {
          const newData = await axios.post("http://localhost:3000/api", {
            title: 제목,
            content: 내용,
          });
          set내용("");
          set제목("");
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
