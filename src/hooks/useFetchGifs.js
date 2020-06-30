// Los custom hooks

import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFectGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]); //<== cada ves que cambie esta prop, se ejecutara lo de adentro de lo contrario solo lo hara una ves



    return state;
};