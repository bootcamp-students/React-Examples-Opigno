import React, { createContext } from 'react'
import Home from './pages/Home'
import Form from './pages/Form'
// import Parent from './components/Parent'
import Header from './components/Header'
import Footer from './components/Footer'


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

//2. initialized the context
export const AppContext = createContext()

export default function App() {
    //1. created initial context data
    let initialContext = {
        newVariable: "this is data from the AppContext",
        booleanData: true,
        coolState: ":)",
        whichPage: 1
    }


    return (
        <div className="border border-primary m-auto p-2">
            {/* provided the data to the context via the provider  */}
            <Router>

                <AppContext.Provider value={initialContext}>

                    <Header />

                    <Switch>
                        <Route path="/form">
                            <Form />
                        </Route>

                        <Route path={["/", '/home']}>
                            <Home />
                        </Route>

                    </Switch>

                    <Footer />

                </AppContext.Provider>

            </Router>

        </div>
    )
}
