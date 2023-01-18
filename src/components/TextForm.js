import React, {useState} from 'react'

export default function TextForm(props) {

    const[text,setText] = useState("Type your text here");

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        console.log("Button clicked");
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
        console.log ("text changed");
    }



  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange= {handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
