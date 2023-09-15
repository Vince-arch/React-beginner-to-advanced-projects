

function App(){
  return(
    <div>
    <div className = "form-container">
      <div className="login-form">
        <input
          id="firstName"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          //value={}
        />
        <input
          id="lastName"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          //value={}
        />
        <input
          id="email"
          className="form-field"
          type="email"
          placeholder="EMAIL"
          name="email"
          //value={}
        />
      </div>
    </div>
    </div>
  )
}

export default App