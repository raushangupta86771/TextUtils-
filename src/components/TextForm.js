import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
    };

    const clearText = () => {
        setText("");
    }

    const boldText = () => {
        document.getElementById('myBox').style.fontWeight = 'bold';
    }

    const firstCapital = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
    }

    const coptText = () => {
        const text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const spaceRemove = () => {
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "));
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState("");
    //   text("This is my new text"); //this is wrong method to change
    //   setText("This is my new text"); //this is correct method to change
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#767676' : 'white', color: props.mode === 'dark' ? 'black' : 'black' }}
                        // used double curly braces because 1 is for javaScript and another is for object
                        placeholder="Enter Text Here"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Covert Into UpperCase
                </button>
                <button className="btn btn-primary mx-1" onClick={clearText}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-1" onClick={boldText}>
                    Bold Text
                </button>
                <button className="btn btn-primary mx-1" onClick={firstCapital}>
                    Make First Word Capital
                </button>
                <button className="btn btn-primary mx-1" onClick={coptText}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-1" onClick={spaceRemove}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className="container">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length - 1} WORDS , {text.length} Characters</p>
                {/* counting no. of lenghts and words */}

                <p>{0.008 * text.split(" ").length} Minutes Read Time</p>
                {/* // counting time required to read all words */}

                <h2>Summary</h2>
                <p>{text.length<=0 ? "Enter something to preview here" : text}</p>
            </div>
        </>
    );
}
