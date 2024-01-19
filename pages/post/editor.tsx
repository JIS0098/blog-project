import axios from "axios";
import { useEffect, useState } from "react";

// 1. 할일 추가 버튼 => DB에 넣는다. create
// 2. 할일 조회 => DB에서 목록을 가져온다. find
// 3. 할일을 삭제한다 => DB에서 id에 해당하는 놈을 삭제한다. findByIdAndDelete
// 4. 할일을 수정한다 => findByIdAndUpdate
export default function Home() {
  const [입력값, set입력값] = useState("");
  const [할일목록, set할일목록] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/api").then((res) => {
      set할일목록(res.data);
    });
  }, [할일목록]);

  return (
    <>
      <input
        value={입력값}
        onChange={(e) => {
          set입력값(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          const newData = await axios.post("http://localhost:3000/api", {
            content: 입력값,
          });
          set입력값("");
        }}
      >
        추가하기
      </button>
    </>
  );
}
