// SearchInput.js

import React, { useState } from "react";
import styled from "styled-components";

function SearchInput({ onSearch, children, placeholder }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery); // 검색어를 부모 컴포넌트로 전달
  };

  return (
    <SearchInputLayout onSubmit={handleSubmit}>
      <h1>{children}</h1>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <SubmitButton type="submit">검색</SubmitButton>
      </div>
    </SearchInputLayout>
  );
}

const SearchInputLayout = styled.form`
  width: 88rem;
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 2.8rem;
    font-weight: 600;
    color: var(--main-color);
    margin-bottom: 0.8rem;
  }

  & input {
    font-size: 1.8rem;
    height: 4.5rem;
    width: 100%;
    border-radius: 0.6rem;
    border: 0.15rem solid var(--main-color);
    padding: 1rem 2rem;
  }

  & div {
    display: flex;
    align-items: center;
    position: relative;
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  width: 8rem;
  height: 4.5rem;
  border-top-right-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  font-size: 1.5rem;
  background-color: var(--main-color);
  border: none;
  color: white;
  font-weight: 400;
`;

export default SearchInput;
