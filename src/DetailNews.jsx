import React,{ useState, useEffect } from "react";
import { Button} from '@mui/material';
import { Link, useParams } from "react-router-dom";
import { call } from "./service/ApiService";
import { deleteNews } from "./service/ApiService";

const DetailNews = () => {

    let {id} = useParams();

    const [news, setNews] = useState({"id": "1"});

    useEffect(() => {
        getNews();
      }, []);
    async function getNews() {
        await call("/news/detail", "POST", {id: {id}.id})
          .then((res) => {
            setNews(res.body.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    let requestDto = {"id" : {id}.id};

    let deleteButton;
    let updateButton;

    if(localStorage.getItem("NEWS_MEMBER_ID") == news.memberId){
        deleteButton = (<Button type="button" onClick={() => deleteNews(requestDto)}>삭제 버튼</Button>);
        updateButton = (<Button type="button" onClick={() => {location.href=`/news/update/${id}`}}>수정 버튼</Button>);
    }

    return  (
        <>
            <div key={news.id}>
                <button className='btn btn-danger' onClick={ () => {location.href="/"}}>뒤로가기</button>
                <div>뉴스 상세 페이지</div>
                <div>{news.title}</div>
                <div>{news.text}</div>
                <div>{news.registerDate}</div>

                {deleteButton}
                <br />
                {updateButton}
            </div>
        </>
    )
}

export default DetailNews;