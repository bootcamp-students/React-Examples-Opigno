import React, { useState, useEffect } from 'react'
import InfoCard from '../components/InfoCard'
import img1 from "../img/iStock1.jpg"
import img2 from "../img/iStock2.jpg"
import img3 from "../img/iStock3.jpg"
import img4 from "../img/iStock4.jpg"
import img5 from "../img/iStock5.jpg"
import img6 from "../img/iStock6.jpg"
import img7 from "../img/iStock7.jpg" // learn more here: https://create-react-app.dev/docs/adding-images-fonts-and-files/

import { Link } from 'react-router-dom'


export default function Home() {
    let imagesArray = [img1, img2, img3, img4, img5, img6, img7]


    const [showImages, setShowImages] = useState(false)
    const clickHandler = () => {
        console.log("triggering lifecycle with state update")
        setShowImages(!showImages)
    }




    const [pageLoad, setPageLoad] = useState(false) // redundant, not needed
    const mountingFunction = () => {
        console.log("component successfully mounted")
        setPageLoad(true) // redundant, not needed
    }
    // component did mount
    useEffect(mountingFunction, [])



    const updateFunction = () => {
        if (pageLoad) {
            console.log("component successfully updated, first use effect ran")
        }
    }
    // component did update
    useEffect(updateFunction)



    const [num, setNum] = useState(0)

    const sumMachine = () => {
        setNum(prevNum => prevNum + 1)
    }

    // component did update based on a single state
    useEffect(() => {
        console.log("num successfully updated, second use effect ran")
    }, [num, pageLoad])



    return (
        <main role="main">
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Album example</h1>
                    <p className="lead text-muted">
                        This is my photo album
                    </p>
                    <p>
                        <button onClick={sumMachine} className="btn btn-primary my-2">incremement sum</button> {" "}
                        <button onClick={clickHandler} className="btn btn-secondary my-2">Show Images</button>{" "}
                        <Link className="btn btn-warning my-2" to="/form">Fill out my form!</Link>
                    </p>
                </div>
            </section>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {imagesArray.map((image, index) => {
                            return <InfoCard
                                key={index}
                                id={index}
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
