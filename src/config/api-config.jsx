let newsHost;

const hostname = window && window.location && window.location.hostname;

if (hostname == "localhost"){
    newsHost = "http://localhost:8000";
}

export const NEWS_URL = `${newsHost}`;