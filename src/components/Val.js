import React from 'react'
import "./Val.css";
import { increment, decrement } from "../redux/actions"
import { useDispatch } from "react-redux";

function Val() {
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(decrement())} >-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </>
    )
}

export default Val