import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import AddNews from "./AddNews";
import DetailNews from "./DetailNews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, Box} from "@mui/material";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {" Copyright c"}
            ysp, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function AppRouter(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="login" element={<Login />} />
                    <Route path="write/news" element={<AddNews />} />
                    <Route path="news/page/:id" element={<DetailNews />} ></Route>
                </Routes>
            </BrowserRouter>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>
    )
}

export default AppRouter;