// import React from 'react'
import React , {useState} from 'react';
export default function Textfrom(props) {
    const handelclick=()=>{
         console.log("to upper case"+text)
         let newtext=text.toUpperCase();
         setText(newtext)
    }
    const handellower=()=>{
        let newtext=text.toLocaleLowerCase();
        setText(newtext)
    }
    const handelchang=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const Alertbtn=()=>{
        alert("Please enter the write address");
    }
    
    const [text, setText] = useState("");
    return (
        <>
        <div>
            <h1 className='my-2'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelchang} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handelclick}>Convert text to uppearcase</button>
            <button onClick={Alertbtn} type="button" class="btn btn-danger mx-3">Alert</button>
            <button type="button" class="btn btn-warning" onClick={handellower}>Lowercase</button>
        </div>
        <div className='container my-3 '>
        <h1>Calculate character</h1>
         <p> {text.length} and character</p>
        </div>
        </>
    )
}
