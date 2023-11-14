import axios from "axios";

const baseUrl = "http://localhost:8000";

export async function signin(loginDto){
    await axios.post(baseUrl + "/member/login", loginDto)
                .then((res) => {
                    console.log("access token : " + res.data.body.data.accessToken);
                    if(res.data.body.data.accessToken){
                        localStorage.setItem("ACCESS_TOKEN", res.data.body.data.accessToken);
                        window.location.href = "/";
                    }
                })
}