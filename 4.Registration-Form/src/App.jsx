import { useState } from "react";
import './index.css'

function App () {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleFirstNameInputChange = (e) =>{
        setValues((values) => ({
            ...values,
            firstName:e.target.value,
        }))
    };
    const handleLastNameInputChange = (e) =>{
        setValues((values) => ({
            ...values,
            lastName:e.target.value,
        }))
    };
    const handleEmailInputChange = (e) => {
          setValues((values) => ({
            ...values,
            email: e.target.value,
          }));
      };      

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.firstName && values.lastName && values.email) {
            setValid(true);
        }
        setSubmitted(true);
        }
    
    return(
        <div>
            <div className="form-container">
            {submitted && valid && <div class='success-message'>Success! Thank you for registering</div>}
                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                    id="first-name"
                    className="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleFirstNameInputChange}
                    />
                    {submitted && !values.firstName && <span id='first-name-error'>Please enter a first name</span>}
                    <input
                    id="last-name"
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleLastNameInputChange}
                    />
                    {submitted && !values.lastName && <span id='last-name-error'>Please enter a last name</span>}
                    <input
                        id="email"
                        className="form-field"
                        type="email"  
                        placeholder="EMAIL"
                        name="email"
                        value={values.email}
                        onChange={handleEmailInputChange}
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                    />
                    {submitted && !values.email && <span id='email-error'>Please enter an email address</span>}

                    <button className="form-field" >REGISTER</button>
                </form>
            </div>
        </div>
    )
}
export default App