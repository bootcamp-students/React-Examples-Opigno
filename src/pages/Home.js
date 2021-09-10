import React, { useState } from 'react'
import InfoCard from '../components/InfoCard'

export default function Home() {

    // setState -> setWord
    const [word, setWord] = useState("hello")



    const [num, setNum] = useState(0)
    const numChanger = () => {
        setNum(num + 1)
    }




    const [array, setArray] = useState([])
    // 1st method
    const updateArr1 = () => {
        let newArr = [...array, "added new item"]
        setArray(newArr)
    }

    // second method
    const updateArr2 = () => {
        setArray([...array, "added new item"])
    }

    // using prev state
    const updateArr3 = () => {
        const setter = prevArray => {
            return [...prevArray, "new item"]
        }
        setArray(setter)
    }
    
    // using prev state inline
    const updateArr4 = () => {
        setArray(prevArray => {
            return [...prevArray, "new item"]
        })
    }

    return (
        <main role="main">
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Album example</h1>
                    <p className="lead text-muted">
                        {num} <button className="btn btn-primary" onClick={numChanger}>click me</button>
                    </p>
                    {/* <p>
                        <a href="#" className="btn btn-primary my-2">Main call to action</a>
                        <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                    </p> */}
                </div>
            </section>
            {/* <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {[...Array(10).keys()].map((item, index) => <InfoCard key={index} />)}
                    </div>
                </div>
            </div> */}
        </main>
    )
}
