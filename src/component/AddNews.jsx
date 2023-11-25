import React from "react";
import { Container, Grid, Button, Typography, TextField} from '@mui/material';
import { writeNews } from "../service/ApiService";


function AddNews(){

    const saveNews = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        writeNews({ id: null
                    ,memberId : localStorage.getItem("NEWS_MEMBER_ID")
                    ,title: data.get("title")
                    ,text: data.get("text")
                    ,registerDate : ''
                    ,modifyDate : ''});
    };



    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">기사 작성</Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={saveNews}>
                제목 :  <input id="title" name="title" style={{width: '100%', height: 20}}></input>
                내용 : <textarea id="text" name="text" style={{width: '100%', height: 200}}></textarea>
                <button type="submit">기사 작성</button>
            </form>
        </Container>
    );
}

export default AddNews;