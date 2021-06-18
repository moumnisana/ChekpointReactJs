import logo from './logo.svg';
import './App.css';
import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




function App() {
  return (
    <div style={{ display: 'block', 
    width: 700, 
    padding: 30 }}>

<Form>
<h4 style={{color:'white',textAlign:'center'}}>Register Form</h4>
<Form.Group>
<Form.Label style={{color:'white'}}>Enter your full name:</Form.Label>
<Form.Control type="text" 
          placeholder="Enter your full name" />
</Form.Group>
<Form.Group>
<Form.Label style={{color:'white'}}>Enter your email address:</Form.Label>
<Form.Control type="email" 
          placeholder="Enter your your email address" />
</Form.Group>

<Form.Group controlId="formBasicPassword">
    <Form.Label style={{color:'white'}}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check  style={{color:'white'}} type="checkbox" label="I agree to the terms and conditions" />
  </Form.Group>
  
<Button variant="primary" type="submit">
Sign Up
</Button>
<p className="forgot-password text-right">
                  <span style={{color:'white'}}>Already registered</span>   <a href="#">sign in?</a>
                </p>
</Form>
</div>
);
    
  
}

export default App;
