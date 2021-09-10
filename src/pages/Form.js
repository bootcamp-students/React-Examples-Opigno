import React, { useState, useEffect } from 'react'

export default function Form() {
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    // const [address, setAddress] = useState("")
    // const [address2, setAddress2] = useState("")
    // const [zip, setZip] = useState("")

    const [data, setData] = useState({})

    const handleChange = e => setData(prevState => ({
        ...prevState,
        [e.target.id]: e.target.value
    }))



    const formValidator = () => {
        if (data.zip) {
            if (data.zip.charCodeAt > 48 && data.zip.charCodeAt < 57) {
                // good to go
                return true
            }
            else {
                return false
            }
        }

    }
    useEffect(formValidator, [Object.keys(data).length])


    const submitForm = () => {

        // package data to send to api

        // const data = {
        //     firstName,
        //     lastName,
        //     username,
        //     email,
        //     address,
        //     address2,
        //     zip
        // }

        // api call here to submit form
        // axios.post(data, url, etc.)

        console.log(data)
    }





    return (
        <div className="container">
            <main>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src="Checkout%20example%20%C2%B7%20Bootstrap%20v5.1_files/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h2>Checkout form</h2>
                    <p className="lead">
                        Below is an example form built entirely with
                        Bootstrap’s form controls. Each required form group has a validation
                        state that can be triggered by attempting to submit the form without completing it.
                    </p>
                </div>
                <div className="row g-5">

                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" noValidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        // name="firstName"
                                        placeholder=""
                                        required=""
                                        value={data.firstName || ""}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder=""
                                        required=""
                                        value={data.lastName || ""}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            placeholder="Username"
                                            required=""
                                            value={data.username || ""}
                                            onChange={handleChange}
                                        />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="you@example.com"
                                        value={data.email || ""}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        placeholder="1234 Main St"
                                        required=""
                                        value={data.address || ""}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address2"
                                        placeholder="Apartment or suite"
                                        value={data.address2 || ""}
                                        onChange={handleChange}
                                    />
                                </div>


                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="zip"
                                        placeholder=""
                                        required=""
                                        value={data.zip || ""}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </main>
            <button onClick={submitForm}>submit me!</button>


        </div>
    )
}
