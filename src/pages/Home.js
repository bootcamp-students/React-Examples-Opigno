import React, { useState, useEffect } from 'react'
import InfoCard from '../components/InfoCard'
import img1 from "../img/iStock1.jpg"
import img2 from "../img/iStock2.jpg"
import img3 from "../img/iStock3.jpg"
import img4 from "../img/iStock4.jpg"
import img5 from "../img/iStock5.jpg"
import img6 from "../img/iStock6.jpg"
import img7 from "../img/iStock7.jpg"

export default function Home() {
    let imagesArray = [img1, img2, img3, img4, img5, img6, img7]

    const [showImages, setShowImages] = useState(false)

    const clickHandler = () => {
        console.log("triggering lifecycle with state update")
        setShowImages(!showImages)
    }

    const mountingFunction = () => {
        console.log("component successfully mounted")
        clickHandler()
    }

    // component did mount
    useEffect(mountingFunction, [])

    return (
        <main role="main">
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Album example</h1>
                    <p className="lead text-muted">
                        This is my photo album
                    </p>
                    <p>
                        <button className="btn btn-primary my-2">Main call to action</button> {" "}
                        <button onClick={clickHandler} className="btn btn-secondary my-2">Show Images</button>
                    </p>
                </div>
            </section>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {imagesArray.map((image, index) => {
                            return <InfoCard
                                key={index}
                                image={image}
                                showImages={showImages}
                            />
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}
