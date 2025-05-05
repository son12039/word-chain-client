import { useState } from "react";
import axios from "axios";
const App = () => {
  const [a, setA] = useState([]);
  const instance = axios.create({
    baseURL: "http://localhost:8080/",
  });
  const getVideos = async () => {
    try {
      const response = await instance.get("test"); // 'test' 엔드포인트로 GET 요청
      setA(response.data); // 응답 데이터로 상태 업데이트
    } catch (error) {
      console.error("Error fetching data: ", error); // 에러 처리
    }
  };
  getVideos();
  return (
    <>
      안123ads12녕
      {a.map((user, index) => (
        <div key={index}>
          <p>Usercode: {user.usercode}</p>
          <p>ID: {user.id}</p>
          <p>Password: {user.password}</p>
          <p>Created At: {user.created_at}</p>
          <div>/////////////////</div>
        </div>
      ))}
    </>
  );
};

export default App;
