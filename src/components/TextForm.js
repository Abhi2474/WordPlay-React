import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        console.log("Button is clicked " + newtext);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        console.log("Button is clicked " + newtext);
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleonchange = (event) => {
        console.log("on changed");
        setText(event.target.value)
    }
    
    const handleCopy =()=>{
       let newtext = document.getElementById("myBox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Copied to Clipboard", "success")
    }
    const handleExtaSpaces=()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces has been removed", "success")

    }
    const handleClear =()=>{
        setText("")
        props.showAlert("Text Area has been Cleared", "success")

    }

    return (
        <div>
        <div className="mb-3" style={{color: props.mode === "dark"? "white": "#161616"}}>
            <h1>{props.heading} </h1>
            <label htmlFor="myBox" className="form-label">Write Here</label>
            <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === "dark"? "#161616": "white", color: props.mode === "dark"? "white": "#161616", color: props.mode === "light"? "#161616": "white"}} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary my-3" onClick={handleUpClick} >Convert to Upper Case</button>
            <button className="btn btn-dark my-3 mx-2" onClick={handleLoClick} >Convert to Lower Case</button>
            <button className="btn btn-success my-3 mx-2" onClick={handleCopy} >Copy to clipboard</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleExtaSpaces} >Reduce Exta Spaces</button>
            <button className="btn btn-danger my-3 mx-2" onClick={handleClear} >Clear</button>
        </div>
        <div className="container my-4" style={{color:props.mode === "light"? "#161616":"white"}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters in the Upper Text </p>
            <p>{0.008*text.split(" ").length } minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Write above to preview"}</p>
        </div>
        </div>
    )
}
