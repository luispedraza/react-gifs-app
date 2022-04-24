import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category ) =>{

    const [state, setState] = useState({
        gifs: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category, 10)
            .then(gifs => {
                setState({
                    gifs: gifs,
                    loading: false
                })
            });
    }, []);

    return state;
}