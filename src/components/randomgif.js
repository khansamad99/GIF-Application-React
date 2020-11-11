import React,{useEffect,useState} from 'react'
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;
const Random = () => {
    const [gif, setGif] = useState('');
    //Component did mount first render
    const fetch = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
            
    const {data} = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;
        setGif(imageSrc);
    }
        

    useEffect(() => {
        fetch();
    },[]);

    const handleClick = () => {
        fetch();
    }

    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    )
}

export default Random;