import React from 'react'
import { useSelector } from "react-redux"
function Data() {
    const amount = useSelector((state) => state.upAndDown.count);
    console.log(amount)

    return (
        <>
            <div> <h1>{amount}</h1></div>

        </>
    )
}

export default Data