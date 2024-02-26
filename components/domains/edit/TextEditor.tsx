import styled from "styled-components";
import { useRef } from "react";
import axios from "axios";

function TextEditor() {
  const 내용 = useRef("");
  const 제목 = useRef("");

  return (
    <TextEditorLayout>
      <h1>글쓰기</h1>
      <TitleInput
        onChange={(e) => {
          제목.current = e.target.value;
        }}
        placeholder="제목을 입력해 주세요."
      />
      <TextInput
        onChange={(e) => {
          내용.current = e.target.value;
        }}
        type="textarea"
      />
      <SubmitButton
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
      </SubmitButton>
    </TextEditorLayout>
  );
}

const TextEditorLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 95rem;
  margin-top: 3rem;

  & h1 {
    font-size: 2.8rem;
    margin-bottom: 0.8rem;
  }
`;

const SubmitButton = styled.button`
  border-radius: 0.6rem;
  padding: 1rem 0;
  background-color: var(--main-color);
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  border: none;
`;

const TitleInput = styled.input`
  border-radius: 0.6rem;
  height: 4.5rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border: 0.15rem solid gray;
`;

const TextInput = styled(TitleInput)`
  height: 50rem;
`;

export default TextEditor;
