import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Overlord'] );
    // };

    return (
        <>
            <h2>GifExperApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(
                        c => <GifGrid
                            key={c}
                            category={c} />
                    )
                }
            </ol>
        </>
    )
}
