import React, { useRef, useState } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import axios from "axios";
import random from "../../public/images/random.svg";
import Image from "next/image";
import TextEditor from "../../components/domains/edit/TextEditor";
import SearchInput from "../../components/commons/SearchInput";
import { useQuery } from "@tanstack/react-query";
function editPage() {
  const [selectedVideo, setSelectedVideo] = useState();
  const [videoList, setVideoList] = useState([]);
  const previousKeyword = useRef();

  const { data, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/api");
      return response.data;
    },
    cacheTime: 10 * 60 * 1000,
  });

  const handleRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * videoList.length);
    setSelectedVideo(videoList[randomIndex]);
  };

  const handleSearch = async (keyword) => {
    if (previousKeyword.current === keyword) {
      handleRandomVideo();
      return;
    }

    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=Playlist${keyword}광고&part=snippet&maxResults=20&type=video&key=AIzaSyCRFxQU8ChM_sKxLtl52dPV_kLi64yxM4k`
      );
      setVideoList(response.data.items);
      setSelectedVideo(response.data.items[0]);
      previousKeyword.current = keyword;
      console.log("요청됐습니당");
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <>
      <SearchInput
        placeholder="플레이 리스트 키워드를 입력해주세요."
        onSearch={handleSearch}
      >
        플레이 리스트 검색
      </SearchInput>
      <RadioBox>
        {selectedVideo ? (
          <YouTube
            opts={{
              width: "450px", // 너비를 500px로 설정
              height: "250px",
              playerVars: {
                autoplay: 1, // 자동 재생 활성화
              },
            }}
            key={selectedVideo.id.videoId}
            videoId={selectedVideo.id.videoId}
          />
        ) : (
          <Preview />
        )}
        <RandomButton onClick={handleRandomVideo}>
          <div>랜덤 재생</div>
          <Image width={50} height={50} src={random} alt="랜덤 버튼 아이콘" />
        </RandomButton>
      </RadioBox>
      <TextEditor />
    </>
  );
}

const RadioBox = styled.div`
  width: 47rem;
  height: 36rem;
  border-radius: 0.6rem;
  padding: 1rem;
  border: 0.1rem solid var(--main-color);
`;

const RandomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 0.1rem solid var(--main-color);
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  padding: 1rem;
  margin-top: 1rem;
  cursor: pointer;

  & div {
    font-size: 2rem;
    font-weight: 600;
    color: var(--main-color);
  }
`;

const Preview = styled.div`
  width: 45rem;
  height: 25rem;
  background-color: lightgray;
`;
const YouTubeBox = styled.div`
  z-index: 1;
`;
export default editPage;
