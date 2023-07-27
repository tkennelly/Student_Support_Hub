LoginForm = ({ onSubmit, onChange, formState })=>{

    return (
        <form className="loginform" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email"> Email Address</label>
            <div className="input">
              <input id="email" name="email" type="email" autoComplete="email" required onChange={onChange} value={formState.email}/>
            </div>
          </div>
    
          <div>
            <div className="password">
              <label htmlFor="password"> Password </label>
            </div>
            <div className="passwordinput">
              <input id="password" name="password" type="password" autoComplete="current-password" required onChange={onChange} value={formState.password}/>
            </div>
          </div>
    
          <div>
            <button type="submit"> Sign In </button>
          </div>
        </form>
      )
    }
  
  export default LoginForm