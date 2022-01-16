import React from 'react';
import Imagecarousel from "../Components/image-carousel";
import Dokmencollection from "../Components/dokmen-collection";
import Happyfeets from "../Components/happy-feets";
import Dokmensocks from "../Components/dokmen-socks";
import Dokmenicons from "../Components/dokmen-icons";
import Reviews from "../Components/reviews";

export default function Home() {
    return (
        <div>
            <Imagecarousel/>
            <Dokmencollection/>
            <Happyfeets/>
            <Dokmensocks/>
            <Dokmenicons/>
            <Reviews/>
        </div>
    )
}
