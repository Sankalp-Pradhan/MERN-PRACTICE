import { use, useEffect, useState } from "react";

//custom Hooks
export function usePostTitle() {
    const [post, setPost] = useState({});

    async function getPosts() {
        const respone = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const json = await respone.json();
        setPost(json);
    }

    useEffect(() => {
        getPosts();
    }, [])

    return post.title;

}

export function useFetch(url) {
    const [finalData, setFinalData] = useState({});
    async function getDetails() {
        const respone = await fetch(url);
        const json = await respone.json();
        setFinalData(json)
    }

    useEffect(() => {
        getDetails()
    }, [url]);
    useEffect(()=>{
        setInterval(getDetails,10*1000)//cleanup
    },[])


    return {
        finalData
    }
}

