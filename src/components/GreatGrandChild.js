import React, { useContext, useState } from 'react'
import { AppContext } from "../App"

export default function GreatGrandChild() {
    const allData = useContext(AppContext)
    const { coolState, newVariable } = useContext(AppContext)

    const [bool, setBool] = useState(false)

    return (
        <div className="border border-danger m-auto p-2">
            <p>
                This is the GreatGrandChild
            </p>
            <p>
                This is the prop:
                <span className="border border-info m-auto p-2">
                    {coolState}
                </span>
            </p>
        </div>
    )
}
