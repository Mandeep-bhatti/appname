import React from 'react'
import "./PopUp.css"
import { useDispatch, useSelector } from "react-redux";
import { restart } from "../../redux/actions"
function PopUp() {
    const state = useSelector((state) => state.xandy)
    const dispatch = useDispatch();

    return (
        <div className="containers">
            <div className="inner-container">
                {
                    state.result === "draw"
                        ? <p>Match has Draw !</p>
                        : <p>{state.result} has won the match !</p>
                }
                <button onClick={() => dispatch(restart(new Array(9).fill("")))}>restart</button>
            </div>

        </div>
    )
}

export default PopUp