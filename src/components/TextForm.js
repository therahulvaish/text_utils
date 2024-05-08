import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    // console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const lowerCase = () => {
    // console.log("Upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const clearText = () => {
    // console.log("Upper case was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const copy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // alert("Text copied to clipboard");
        props.showAlert("Copied to Clipboard", "success");
        // You can provide feedback to the user here if needed
      })
      .catch((error) => {
        alert.error("Failed to copy text: ", error);
        // Handle error or provide feedback to the user
      });
  };

  // Function to paste last copied text
  const handlePasteFromClipboard = () => {
    navigator.clipboard
      .readText()
      .then((copiedText) => {
        setText(copiedText);
        setLastCopiedText(copiedText);
        props.showAlert("Paste", "success");
      })
      .catch((error) => {
        alert.error("Failed to read text from clipboard: ", error);
        // Handle error or provide feedback to the user
      });
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const [lastCopiedText, setLastCopiedText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.split(/\s+/).length;
  const characterCount = text.length;

  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>Enter text below to analyse</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="textForm"
            rows="3"
            style={{backgroundColor: props.mode === "light" ? "white" : "#343a40", color: props.mode === "light" ? "black" : "white", transition : "0.5s"}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={upperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={lowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={clearText}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={copy}>
          Copy to clipboard
        </button>
        <button className="btn btn-primary" onClick={handlePasteFromClipboard}>
          Paste
        </button>
      </div>

      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h3>Text summary</h3>
        <p>
          {wordCount} Words and {characterCount} Characters
        </p>
        <p> {0.008 * wordCount} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
