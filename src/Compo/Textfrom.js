// import React from 'react'
import React, { useState } from 'react';

export default function Textfrom(props) {
    const [text, setText] = useState("");
    const handelclick=()=>{
        console.log("hello"+text);
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const lower=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handchang=(event)=>{
        console.log("text")
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-3">
                <div className="mb-3">
                    <h1>{props.heding}</h1>
                    <textarea className="form-control" value={text} onChange={handchang}id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button onClick={handelclick}  type="button" class="btn btn-warning my-3">Uppercase</button>
                    <button onClick={lower}type="button" class="btn btn-danger mx-3">Lowercase</button>
                </div>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split('').length} words and {text.length}Character</p>
                <p>{0.008 * text.split('').length}Minute</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </>
    )
}
