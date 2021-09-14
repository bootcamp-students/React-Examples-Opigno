import React from 'react'
import GreatGrandChild from "./GreatGrandChild"

export default function GrandChild() {
    return (
        <div className="border border-warning m-auto p-2">
            This is the GrandChild
            <GreatGrandChild />
        </div>
    )
}
