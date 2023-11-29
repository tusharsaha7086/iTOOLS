import React, { useState } from 'react'


export default function TextForm(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to Uppercase","success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to Lowercase","success")
    }
    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("Extra Spaces Removed","success")
    }
    const handleSCClick = () => {
        let newSentence2 ="";
        let firstchar =""
        let newSentence = text.split(".");
        // console.log(newSentence)
        newSentence.forEach((element) => {
            if(element.charAt(0) === " "){
                firstchar = element.charAt(1)
                newSentence = firstchar.toUpperCase() + element.slice(2) + ". ";
            }
            else{
                firstchar = element.charAt(0)
                newSentence = firstchar.toUpperCase() + element.slice(1) + ". ";
            }
            newSentence2 = newSentence2 + newSentence;
        })
        // setText(updatedSentence)
        // const str2 = newSentence.join(" ");
        const str3 = newSentence2.slice(0,newSentence2.length-2);
        setText(str3)
        props.showalert("Converted to SentenceCase","success")
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showalert("Text Cleared","success")
    }
    const handleCopyClick = () => {
        var copyText = document.getElementById("exampleFormControlTextarea1");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showalert("Text Copied","success")
    }
    const handleonchange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className={`container my-4 text-${props.mode === "light" ? "black":"white"}`}>
                <h1>ENTER YOUR TEXT TO ANALYZE</h1>
                {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea className={`form-control my-4 border border-danger border-4 text-${props.mode === "light" ? "black":"white"} bg-${props.mode === "light" ? "light":"dark"}`} value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="10" placeholder="Enter Your Text Here"></textarea>
                <button disabled={text.length === 0} className="btn btn-outline-danger mx-1 my-1" onClick={handleUpClick}>Upper Case</button>
                <button disabled={text.length === 0} className="btn btn-outline-danger mx-1 my-1" onClick={handleLowClick}>Lower Case</button>
                <button disabled={text.length === 0} className="btn btn-outline-danger mx-1 my-1" onClick={handleSCClick}>Sentance Case</button>
                <button disabled={text.length === 0} className="btn btn-outline-danger mx-1 my-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-outline-danger mx-1 my-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className={`container my-3 text-${props.mode === "light" ? "black":"white"}`}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} characters.</p>
                <h2>Preview</h2>
                <button disabled={text.length === 0} className="btn btn-outline-secondary m-0 p-0" onClick={handleCopyClick}>copy</button>
                
            </div>
            <div className={`container text-${props.mode === "light" ? "black":"white"}`}>
                <p>{text.length>0?text:"Nothing To Preview"}</p>
            </div>

        </>
    )
}
