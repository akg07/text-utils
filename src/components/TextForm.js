import React, {useState} from 'react'


export default function TextForm(props) {

    // button click function
    const handleUpClick = () => {
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
        props.showAlert("converted to upper case", "success");
    }

    const handleLoClick = () => {
        let upperCaseText = text.toLowerCase();
        setText(upperCaseText);
    }

    // change text in textarea.
    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    // use hooks for handling variable states.
    // const [text, setText] = useState('Enter text here...');
    const [text, setText] = useState('');
    
    return (
        <>
        <div className='container' style={ {color: props.mode === 'dark' ? 'white' : 'black'} }>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={ {backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'} } ></textarea>
            </div>

            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lower Case</button>
        </div>
        <div className="container my-3" style={ {color: props.mode === 'dark' ? 'white' : 'black'} }> 
            <h1>Your Text summary</h1>
            <p> {text.split(" ").length} words & {text.length} charaters</p>
            <p> {0.008 * text.split(" ").length} Minutes Read</p>

            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>
        </div>
        </>
    )
}
