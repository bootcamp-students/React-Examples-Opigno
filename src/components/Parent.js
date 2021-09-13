import React from 'react'
import Child from './Child'

export default function Parent() {
    return (
        <div className="border border-secondary m-auto p-2">
            This is the Parent
            <Child />
        </div>
    )
}
