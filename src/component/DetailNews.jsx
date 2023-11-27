import React from "react";
import { Button} from '@mui/material';
import { useParams } from "react-router-dom";
import { deleteNews, getDetailNews } from "../service/ApiService";

const DetailNews = () => {

    let {id} = useParams();

    const news = getDetailNews({id}.id);

    console.log("res : " +news.data);
    console.log("res : " +news);
    console.log("res : " +news);
    console.log("res : " +news);

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