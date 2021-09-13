import React from 'react'
import GrandChild from "./GrandChild"

export default function Child() {
    return (
        <div className="border border-success m-auto p-2">
            This is the Child
            <GrandChild />
        </div>
    )
}
