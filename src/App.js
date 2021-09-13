import React, { createContext } from 'react'
// import Home from './pages/Home'
// import Form from './pages/Form'
import Parent from './components/Parent'
// import Header from './components/Header'
// import Footer from './components/Footer'

//2. initialized the context
export const AppContext = createContext()

export default function App() {
    //1. created initial context data
    let initialContext = { 
        newVariable: "this is data from the AppContext", 
        booleanData: true,
        coolState: ":)"
 }


    return (
        <div className="border border-primary m-auto p-2">
            {/* provided the data to the context via the provider  */}
            <AppContext.Provider value={initialContext}>
                {/* <Header /> */}

                {/* add different pages via react-router */}
                {/* <Form /> */}
                {/* <Home /> */}
                This is the App
                <Parent />
                {/* <Footer /> */}
            </AppContext.Provider>

        </div>
    )
}
