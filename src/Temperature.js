import React, {useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";
import './App.css'

export const Temp = () => {
    const [temp,setTemp] = useState(0);

    const plusTemp = () => {
        setTemp(temp + 1)
    }

    const minusTemp = () => {
        setTemp(temp - 1)
    }

    return (
        <div className="mainDiv">
            <div className="tempCircle">
                <p>{temp} C</p>
            </div>
            <div className="navigation">
                <div className="addTemp" onClick={plusTemp}>
                    <p>+</p>
                </div>
                <div className="removeTemp" onClick={minusTemp}>
                    <p>-</p>
                </div>
            </div>
        </div>
    )
}

export default Temp;