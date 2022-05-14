import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= () => {
        // console.log("Uppercase was clicked");
        let newTest=text.toUpperCase();
        setText(newTest);
    }
    const handleOnChange= (event) => {
        // console.log("On change");
        //  (update text(value))
        setText(event.target.value);
    }

    const handleLowerClick = () => {
        setText(text.toLowerCase());
    }

    const noofChars = () =>{
        return(text.length);
    }
     
     
    const[text, setText]=useState('');
    // cant directly text="dsdfd"; but use fn
    let noofchar=noofChars();
    const val = "No of characters is "+noofchar;
    return (
        <>
        <div style={{color: props.mode==='dark'?'white':'grey'}}>
            <div className="mb-3">
                <label for="My box" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'?'light':'grey', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>

                <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button type="button" class="btn btn-secondary" onClick={handleLowerClick}>Convert to lowercase</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'#071e41'}}>
            <h2>Your text summary</h2>
            <p>{val}</p>
            <p>{text.split(" ").length} words</p>
            <p>Time to read {0.8*text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
