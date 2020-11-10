import React,{useEffect,useState} from 'react'
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;
const Random = () => {

    //Component did mount first render
    useEffect(() => {
        const fetch = async () => {
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
            
            const {data} = await axios.get(url);
            console.log(data);
        }
    },[]);

    return (
        <div>
            <h1>Random</h1>
        </div>
    )
}

export default Random;