import React, { useState } from "react";
// import Button from "../Button/Button";
import './Form.css'

const Form =()=>{
    const [subject,setSubject] = useState('')
    const [email,setEmail] = useState('')
    const [description,setDescription] = useState('')
    const [errors,setErrors] = useState({})
    
    const handleChangeInputSubject = (event)=>{
        setSubject(event.target.value)
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
    const handleChangeInputEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);

        if (validateEmail(newEmail)) {
            setErrors({
                ...errors,
                email: null,
            });
        } else {
            setErrors({
                ...errors,
                email: 'Email is not valid'
            });
        }
    }
    const handleChangeTextarea = (event)=>{
        setDescription(event.target.value)
    }
    const handleSubmit = ()=>{
        console.log('subject',subject);
        console.log('email',email);
        console.log('description',description);
        
        setSubject('');
        setEmail('');
        setDescription('');
        setErrors({});

        alert('Thanks for your opinion!')
    }
    const clearTextarea = () => {
        setDescription('');
    };
    return(
        <div className="form_container">
            <div class="input-group mb-3">
                <span className="input-group-text label" id="basic-addon1">Subject</span>
                <input type="text" className="form-control input" placeholder="Subject" value={subject} id="subject_input" onChange={handleChangeInputSubject} aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 input-group-email">
                <input type="email" value={email} onChange={handleChangeInputEmail}  className="form-control email_input input" placeholder="Email" aria-label="Recipient’s username" aria-describedby="basic-addon2" />
                <span className="input-group-text email_input label" id="basic-addon2">@example.com</span>
            </div>
            {errors.email &&<span className="error_txt">{errors.email}</span>}
            <div className="input-group">
                <span className="input-group-text label">Your Request</span>
                <textarea className="form-control input" aria-label="With textarea" onChange={handleChangeTextarea} placeholder="Your Request Here!" rows="5" cols="30" value={description} ></textarea>
            </div>
            <div className="formControl">
                <button type="button" className="btn btn-outline-warning form_btn" handleClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Form;