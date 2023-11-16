import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { signin } from "./service/ApiService";

function Login(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        signin({email: email, password : password});
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">로그인</Typography>
                </Grid>
            </Grid>
            <button className='btn btn-danger' onClick={ () => {location.href="/"}}>뒤로가기</button>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth id="email" label="email" name="email" autoComplete="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth id="password" label="password" name="password" autoComplete="password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Login;