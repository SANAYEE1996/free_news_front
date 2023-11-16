import React from "react";
import { useSearchParams } from "react-router-dom";
import queryString from "query-string";

const DetailNews = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const setSortParams = () => {
        searchParams.set('sort', 'clear');
        setSearchParams(searchParams);
    };

    const appendSortParams = () => {
        searchParams.append('sort', 'hello-world');
        setSearchParams(searchParams);
    };

    return (
        <>
            <div>뉴스 디테일 페이지 // 뉴스 아이디 : {}</div>
        </>
    );
}

export default DetailNews;