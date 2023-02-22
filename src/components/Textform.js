import React, { useState } from 'react';

export default function Textform(props) 
{
   const handleonchange= (event) =>
  {
        console.log("Change handled")
        setText(event.target.value)
  }
  const handlescase = ()=>
  {
        console.log("Case handled")
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase","success")

  }
  const handlescase2 = ()=>
  {
        console.log("Case handled")
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase","success")

  }

  const clearonchange= (event) =>
  {
        console.log("Clear handled")
        setText("")
        props.showAlert("Reset completed","primary")
  }
  /*const divStyle =
  {
    font: 'cursive'
  }
  <button className="btn btn-warning mx-1" onClick={fontchange}>Convert to italics</button>
  const fontchange= (event) =>
  {
        console.log("Font handled")
        setText(<div style={divStyle}>event.target.value</div>)
  }*/
  const copytext= (event) =>
  {
      console.log("Text copied")
      var text=document.getElementById("mytext");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","success")
      
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className='container'>
     <div className="mb-3">
    <label htmlFor="mytext" className="form-label">{props.heading}</label>
    <textarea className="form-control" id="mytext" value={text} onChange={handleonchange} rows="6"></textarea>
  </div>
  <button className="btn btn-info mx-1" onClick={handlescase}>Convert to Uppercase</button>
  <button className="btn btn-success mx-1" onClick={handlescase2}>Convert to Lowercase</button> 
  <button className="btn btn-warning mx-1" onClick={copytext}>Copy Text</button>
  <button className="btn btn-danger mx-1" onClick={clearonchange}>Clear Text</button>
  
</div>
<div className="container my-4">
  <h2>Summary:</h2>
  <p>Words:{text===""?0:(text.trim()).split(" ").length}    Characters: {text.length}</p>
  <h2 className='my-2'>Preview:</h2>
  <p>{text.length>0?text:"Enter text to preview"}</p>
  <h6 className="my-3">Time taken: {0.008 * text.split(" ").length} minutes</h6>
</div>
</>
  )
}
