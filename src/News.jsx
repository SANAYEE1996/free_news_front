import { useState, useEffect } from "react";
import { List, Paper } from "@mui/material";
import axios from "axios";

function News() {

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
          if(res.status == 200){
            console.log(res.data);
            setNews(res.data.body.data);
          }
          else if(res.status == 404){
            window.location.href = "/login";
          }
          else{
            Promise.reject(res);
            throw Error(res);
          }
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
            return <List>
                    <div key={tag.id}>
                      <div>제목 : {tag.title} // 작성일 : {tag.registerDate}</div>
                      <div>내용 : {tag.text}</div>
                   </div>
                   </List>
          })
        }
        </Paper>
      </>
    )
  }

export default News;