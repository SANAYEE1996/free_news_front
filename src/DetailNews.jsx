import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { call } from "./service/ApiService";

const DetailNews = () => {

    let {id} = useParams();

    const [news, setNews] = useState({"id": "1"});

    useEffect(() => {
        getNews();
      }, []);
    async function getNews() {
        await call("/news/detail", "POST", {id: {id}.id})
          .then((res) => {
            console.log(res.body.data);
            setNews(res.body.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    return  (
        <>
            <div key={news.id}>
            <button className='btn btn-danger' onClick={ () => {location.href="/"}}>뒤로가기</button>
                <div>뉴스 상세 페이지</div>
                <div>{news.title}</div>
                <div>{news.text}</div>
                <div>{news.registerDate}</div>
            </div>
        </>
    )
}

export default DetailNews;