import { NEWS_URL } from "../config/api-config";
import axios from "axios";

export async function call(api, method, request){
    let headers = new Headers({
        "Content-Type" : "application/json",
    });

    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken && accessToken !== null){
        headers.append("Authorization", "Bearer "+ accessToken);
    }


    let options = {
        headers: headers,
        url: NEWS_URL + api,
        method: method,
    };

    if(request){
        options.body = JSON.stringify(request);
    }

    console.log("NEWS_URL : " + NEWS_URL);
    console.log("Authorization : " +options.headers.get("Authorization"));

    return await fetch(options.url, options).then((res) => {
        if(res.status === 200){
            return res.json();
        } else if(res.status === 403){
            window.location.href = "/login";
        } else{
            new Error(res);
        }
    }).catch((error) => {
        console.log("http error");
        throw Error(error);
    });
}


export async function signin(loginDto){
    return call("/member/login", "POST", loginDto)
            .then((res) => {
                console.log("access token : " + res.body.data.accessToken);
                if(res.body.data.accessToken){
                    localStorage.setItem("ACCESS_TOKEN", res.body.data.accessToken);
                    localStorage.setItem("NEWS_MEMBER_ID", res.body.data.memberId);
                    window.location.href = "/";
                }
            });
}

export async function signout(){
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("NEWS_MEMBER_ID");
    window.location.href = "/login";
}

export async function writeNews(newsDto){
    console.log("newsDto : " +newsDto.memberId);
    console.log("text : "+newsDto.text);
    console.log("title : "+newsDto.title);
    return call("/news/save", "POST", newsDto)
            .then((res) => {
                let code = res.code;
                if(code == null){
                    alert('기사 작성 성공 ! ');
                    window.location.href = "/";
                }
                else{
                    
                }
            });
}