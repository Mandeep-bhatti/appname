import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { blockClick, GameOver } from "../../redux/actions";
import PopUp from "./PopUp"
import "./Game.css";


function Game() {

    const dispatch = useDispatch();
    const dispatch2 = useDispatch();
    const [val, setVal] = React.useState("X")
    const s = useSelector((state) => state.xandy);
    const arr = s.arr;
    const result = s.result;
    console.log(s.result, ">>>>>>>>>>>>>>  ")

    return <>
        {(result === "X" || result === "O" || result === "draw") ? <PopUp /> : ""}

        <div className="mainBoard">
            {
                arr.map((elem, index) => {
                    return (
                        <button
                            style={{
                                color: elem === "X" ? "#f56505" : "#02b0fa",
                                textShadow: `2px 2px 4px ${elem === "X" ? 'rgba(245, 101, 5, 0.35)' : 'rgba(2,176,250,0.35)'}`
                            }}
                            onClick={() => {
                                if (val === "X") {
                                    setVal("O")
                                } else {
                                    setVal("X")
                                }
                                dispatch(blockClick(val, index))
                                dispatch2(GameOver(val))
                            }}
                            className="block"
                            key={index}
                        >{elem}</button>)
                })
            }
        </div>
    </>
}
export default Game