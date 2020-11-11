import React,{useEffect,useState} from 'react'
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;
const useGif = (tag) => {
    const [gif, setGif] = useState('');

    const fetchGif = async (tag) => {
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);
    }

    useEffect(() => {
        fetchGif(tag);
    }, [tag]);

    return { gif, fetchGif }
}

export default useGif;