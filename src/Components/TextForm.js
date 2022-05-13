import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= () => {
        console.log("Uppercase was clicked");
        setText("Upper case clicked Hurray");
    }
    const handleOnChange= () => {
        console.log("On change");
    }
     
    const[text, setText]=useState('Enter text here');
    // cant directly text="dsdfd"; but use fn
    return (
        <div>
            <div className="mb-3">
                <label for="My box" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
    )
}
