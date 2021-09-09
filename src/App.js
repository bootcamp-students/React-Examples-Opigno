import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Header />

            {/* add different pages via react-router */}
            <Home />

            <Footer />
        </>
    )
}
