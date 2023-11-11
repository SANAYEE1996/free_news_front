import { useState, useEffect } from 'react'
import axios from "axios";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const baseUrl = "http://localhost:8000";
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  async function getNews() {
    await axios // 다 받을 때까지 기다리는 것
      .post(baseUrl + "/news/list",{
        "id" : 0,
        "pageNumber" : 0,
        "searchWord" : ""
      })
      .then((res) => {
        console.log(res.data);
        setNews(res.data.body.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <h1>news list</h1>
      {
        news.map((tag) => {
          return <div key={tag.id}><div>제목 : {tag.title} // 작성일 : {tag.registerDate}</div><div>내용 : {tag.text}</div></div>
        })
      }
    </>
  )
}

export default App
