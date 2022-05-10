import React, { useState } from 'react'
import "./Header.css";
import { data } from "../menuData";
import { useDispatch } from "react-redux";
import { showPopUp } from "../../redux/actions"
function Header() {
    const [active, setActive] = useState(data[0]["name"])

    return (
        <div className='header'>
            <ul className='tabs-container'>
                {
                    data.map((elment, index) => {
                        return (
                            <Buttons
                                key={index}
                                name={elment.name}
                                activeState={active}
                                addActive={setActive}
                                description={elment.description}
                            />
                        )
                    })
                }

            </ul>
        </div>
    )
}

const Buttons = (props) => {
    const dispatch = useDispatch()
    const style = {
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingLeft: "30px",
        paddingRight: "30px",
        backgroundColor: props.name === props.activeState ? "black" : "white",
        color: props.name === props.activeState ? "white" : "black",
        borderRadius: "20px",
        fontSize: "15px",
        fontWeight: "600",
    }
    return (
        <li onClick={() => {
            props.addActive(props.name);
            dispatch(showPopUp(props.description))
        }} style={style}>{props.name}</li>
    )
}
export default Header