import { useState, useEffect } from "react";
import { List, Paper } from "@mui/material";
import { NEWS_URL } from "./config/api-config";
import axios from "axios";

function News() {

    const [news, setNews] = useState([]);
  
    useEffect(() => {
      getNews();
    }, []);
  
    async function getNews() {
      await axios // 다 받을 때까지 기다리는 것
        .post(NEWS_URL + "/news/list",{
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
        <div>
          <form action="" method="post">
            
          </form>
        </div>
        <h1>news list</h1>
        <Paper style={{margin: 16}}>
        {
          news.map((tag) => {
            return <List key={tag.id}>
                    <div >
                      <a href={"news/page?newsId="+tag.id}>제목 : {tag.title} // 작성일 : {tag.registerDate}</a>
                   </div>
                   </List>
          })
        }
        </Paper>
      </>
    )
  }

export default News;