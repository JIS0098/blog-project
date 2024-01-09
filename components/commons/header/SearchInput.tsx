import React from "react";
import styled from "styled-components";
import Image from "next/image";

function SearchInput() {
  return (
    <SearchInputLayout>
      <SearchInputBox>
        <Input />
        <Icon
          src="/images/search-icon.png"
          width={17}
          height={17}
          alt="검색 돋보기 아이콘"
        />
      </SearchInputBox>
    </SearchInputLayout>
  );
}

const SearchInputLayout = styled.div`
  position: absolute;
  right: 3rem;
  bottom: 1.5rem;
`;
const SearchInputBox = styled.div``;

const Input = styled.input`
  width: 15rem;
  background-color: transparent;
  border: none;
  border-bottom: 0.1rem solid white;
  outline: none;
  caret-color: white;
  color: white;
  padding: 0.4rem;
  font-size: 1.2rem;
`;
const Icon = styled(Image)`
  position: relative;
  left: -1.4rem;
`;

export default SearchInput;
