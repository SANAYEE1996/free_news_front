import React,{ useState, useEffect } from "react";
import { Container, Grid, Typography} from '@mui/material';
import { useParams } from "react-router-dom";
import { call, updateNews } from "./service/ApiService";


function UpdateNews(){

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

    const updateNewsSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      updateNews({ id: {id}.id
                  ,memberId : localStorage.getItem("NEWS_MEMBER_ID")
                  ,title: data.get("title")
                  ,text: data.get("text")
                  ,registerDate : ''
                  ,modifyDate : ''});
  };



    return (
        <Container>
            <button className='btn btn-danger' onClick={ () => {location.href="/"}}>뒤로가기</button>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">기사 수정</Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={updateNewsSubmit}>
                제목 :  <input id="title" name="title" type="text" style={{width: '100%', height: 20}} defaultValue={news.title || ""}></input>
                내용 : <textarea id="text" name="text" type="text" style={{width: '100%', height: 200}} defaultValue={news.text || ""}></textarea>
                <button type="submit">기사 수정</button>
            </form>
        </Container>
    );
}

export default UpdateNews;