import React, {useState} from 'react'

export default function TextForm(props) {

    const[text,setText] = useState("");

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase", "success");
    }

    const sentence = ()=>{

      let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      setText(newText);
      props.showAlert("Sentence casing is done", "success");
    }

    const clear = ()=>{
      let newText = "";
      setText(newText);
      props.showAlert("Text cleared", "success");
    }

    // const capitalized = ()=>{

    //   handleLoClick();
    //   let newText = '';

      
    //   newText = newText + text.charAt(0).toUpperCase();
    //   for(let index = 1; index < text.length; index++){
    //     if(text[index]===' ' && index < text.length-1){
    //       text.charAt(index+1).toUpperCase();
    //       //index++;
    //     }
    //     newText = newText + text.charAt(index);
    //   }
    //   setText(newText);
    // }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = ()=>{
      //Selecting the text area
      let copyText = document.getElementById("myBox");

      // Selecting the text
      copyText.select();

      //Copying the whole text
      navigator.clipboard.writeText(copyText.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to clipboard", "success");
    }

    const handleSpaces = ()=>{
      let regexPattern = /\s+/g;
      setText(text.replace(regexPattern, " "));
      props.showAlert("Extra spaces cleared", "success");
    }



  return (
    <>
    <div>
        <h1 className='container mb-4' style={{color: props.mode==='light'? 'black':'white'}}>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control" style={{backgroundColor : props.mode==='light'?'white':'rgb(66 92 126)', 
        color: props.mode==='light'? 'black':'white'}} id="myBox" placeholder='Type your text here' value={text} onChange= {handleOnChange} rows="8"></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={clear}>Clear</button>
        {/* <button className="btn btn-primary mx-1" onClick={capitalized}>Capitalized casing</button> */}
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={sentence}>Sentence casing</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'? 'black':'white'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Nothing to preview!'}</p>
      
    </div>
    </>
  )
}
