import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Mod() {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleConvert = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleConvert2 = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleConvert3 = () => {
    let newText = "";
    setText(newText);
  };

  return (
    <>
      <div className="container col-md-5 my-4">
        <h1>Word Counter</h1>

        <div className="form-group ">
          <textarea
            placeholder="Please Enter your words"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button className="btn btn-primary p-2 my-2" onClick={handleConvert}>
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary p-2 my-2 mx-4 "
          onClick={handleConvert2}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary p-2 my-2 "
          onClick={handleConvert3}
        >
          Clear Text
        </button>
      </div>
      <div>
        <h2 className="text-left my-4">Text Summary</h2>
        <h6>
          
          Number of words : {text.length != 0 ? text.split(" ").length : 0} &
          Number Of Characters : {text.length}
        </h6>
      </div>
      <h5 className="my-5">
        Whole entered line will read in
        {text.length != 0 ? text.split(" ").length : 0 * 0.008} sec
      </h5>
    </>
  );
}
