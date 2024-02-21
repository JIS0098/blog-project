import React, { useRef, useState } from "react";
import styled from "styled-components";
import SearchInput from "../../components/domains/post/SearchInput";
import YouTube from "react-youtube";
import axios from "axios";
import random from "../../public/images/random.svg";
import Image from "next/image";
import TextEditor from "./WYSIWYG";

function PostPage() {
  const [selectedVideo, setSelectedVideo] = useState();
  const [videoList, setVideoList] = useState([]);
  const previousKeyword = useRef();

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
        `https://www.googleapis.com/youtube/v3/search?q=Playlist${keyword}광고없&part=snippet&maxResults=20&type=video&key=AIzaSyCRFxQU8ChM_sKxLtl52dPV_kLi64yxM4k`
      );
      setVideoList(response.data.items);
      setSelectedVideo(response.data.items[0]);
      previousKeyword.current = keyword;
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <PostLayout>
      <SearchInput onSearch={handleSearch} />
      <RadioBox>
        {selectedVideo && (
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
        )}

        <RandomButton onClick={handleRandomVideo}>
          <div>랜덤 재생</div>
          <Image width={50} height={50} src={random} />
        </RandomButton>
      </RadioBox>
      <TextEditor />
    </PostLayout>
  );
}

const PostLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 3rem;
`;

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
export default PostPage;
