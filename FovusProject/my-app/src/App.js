import React, { useState } from "react";
import "./App.css";
import { nanoid } from 'nanoid';

import AWS from 'aws-sdk';




function App() {

  

  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const id = nanoid();
  
    // Read file as base64 encoded string
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const fileData = reader.result.split(',')[1];
  
      const url = 'https://hfbgqah274.execute-api.us-east-1.amazonaws.com/Prod/save';
      const payload = {
        id,
        text,
        file: {
          data: fileData, // Pass file data as base64 encoded string
          name: file.name // Pass file name
        } // Pass file as base64 encoded string
      };
   
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        console.log("Response:", response);
        alert('Data sent successfully.');
      } catch (err) {
        console.error(err);
        alert('Error sending data.');
      }
    };
  };

  return (
<div className="App">
  <h1>Full Stack Development Project using React JS, IAM, API Gateway, AWS Lambda, DynamoDB and EC2</h1>
  <div className="container">
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="text-input">Input Text:</label>
        <input
          type="text"
          id="text-input"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="file-input">Input File:</label>
        <input 
          type="file" 
          id="file-input" 
          onChange={handleFileChange} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <h1>Architecture</h1>
</div>





  );
}

export default App;
