import React from 'react'
import {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
}

const handleLoClick = ()=>{ 
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success");
}

const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
}

const handleOnChange = (event)=>{
    setText(event.target.value) 
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
}



const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
}
  const [text,setText]=useState('Enter text here');
  return (
    <>
   
    <div className="container" style={{color:props.mode==="light"?"black":props.mode==='yellow'?"black":"white"}}> 
            <h1 className='mb-4'>Enter The Text To Edit</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?"white":props.mode==="yellow"?"yellow":props.mode==='green'?'green':'#042743',color:props.mode==="light"?"black":"white"}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className ={`btn btn-${props.mode==="green"?"dark":"primary"} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==="green"?"dark":"primary"} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==="green"?"dark":"primary"} mx-1 my-1`} onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==="green"?"dark":"primary"} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==="green"?"dark":"primary"} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    <div className="container" style={{color:props.mode==="light"?"black":props.mode==='yellow'?"black":"white"}}>
      <h2>Your text summary</h2>
      <p>{text.split("").length} Words and Length {text.length} Characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something to preview it here"}</p>
    </div>
    </>
  )
}