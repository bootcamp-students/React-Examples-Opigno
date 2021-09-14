import React from 'react'
import { Link, useParams } from 'react-router-dom'

import img1 from "../img/iStock1.jpg"
import img2 from "../img/iStock2.jpg"
import img3 from "../img/iStock3.jpg"
import img4 from "../img/iStock4.jpg"
import img5 from "../img/iStock5.jpg"
import img6 from "../img/iStock6.jpg"
import img7 from "../img/iStock7.jpg" // learn more here: https://create-react-app.dev/docs/adding-images-fonts-and-files/

export default function ImagePage() {
    let imagesArray = [img1, img2, img3, img4, img5, img6, img7]

    const { imgNum } = useParams()

    return (
        <div>
            on the image page for the specific image: {imgNum}

            <img className="img-fluid" src={imagesArray[imgNum]} alt={imgNum} />

        </div>
    )
}
