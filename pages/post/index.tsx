import React, { useState } from "react";
import styled from "styled-components";
import SearchInput from "../../components/domains/post/SearchInput";
import YouTube from "react-youtube";
import axios from "axios";
import random from "../../public/images/random.svg";
import Image from "next/image";
function PostPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearch = async (keywords) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=Playlist${keywords}광고없&part=snippet&maxResults=10&type=video&key=AIzaSyCRFxQU8ChM_sKxLtl52dPV_kLi64yxM4k`
      );
      // 모든 검색 결과를 가져온 후 랜덤으로 하나의 동영상을 선택하여 selectedVideo 상태에 저장
      const randomIndex = Math.floor(
        Math.random() * response.data.items.length
      );
      const randomVideo = response.data.items[randomIndex];
      setSelectedVideo(randomVideo);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <PostLayout>
      <SearchInput onSearch={handleSearch} />
      <div>
        {selectedVideo && (
          <YouTube
            opts={{
              width: "700px", // 너비를 500px로 설정
              height: "350px",
            }}
            key={selectedVideo.id.videoId}
            videoId={selectedVideo.id.videoId}
          />
        )}
        <Image width={80} height={80} src={random} />
      </div>
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
`;

export default PostPage;
