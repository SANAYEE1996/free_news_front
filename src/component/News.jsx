import { useState, useEffect } from "react";
import { List, Paper } from "@mui/material";
import { NEWS_URL } from "../config/api-config";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <table className="table table-striped table-bordered text-center">
          <thead>
            <th>제목</th>
            <th>작성일</th>
          </thead>
          <tbody>
          {
            news.map((tag) => {
              return <tr key={tag.id}>
                      <td ><Link to={`news/page/${tag.id}`}>{tag.title}</Link></td>
                      <td>{tag.registerDate}</td>
                    </tr>
            })
          }
          </tbody>
        </table>
        </Paper>
      </>
    )
  }

export default News;