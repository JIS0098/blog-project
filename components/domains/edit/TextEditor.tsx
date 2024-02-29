import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function TextEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async () => {
    const newData = await axios.post("http://localhost:3000/api", {
      title: title,
      content: content,
    });
    setTitle("");
    setContent("");
    router.push(`post`);
  };

  return (
    <TextEditorLayout>
      <h1>글쓰기</h1>
      <TitleInput
        value={title}
        onChange={handleTitleChange}
        placeholder="제목을 입력해 주세요."
      />
      <QuillWrapper>
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          placeholder="내용을 입력해 주세요."
        />
      </QuillWrapper>
      <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
    </TextEditorLayout>
  );
}

const TextEditorLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 88rem;
  margin-top: 3rem;

  & h1 {
    font-size: 2.8rem;
    margin-bottom: 0.8rem;
  }
`;

const QuillWrapper = styled.div`
  .ql-container {
    border: none;
  }

  .ql-editor {
    height: 50rem;
    font-size: 1.8rem;
    border: 0.15rem solid gray;
    margin-bottom: 1rem;
    border-radius: 0.6rem;
  }

  .ql-toolbar {
    display: none;
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

export default TextEditor;
