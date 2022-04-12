import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }
   
    const handleCreateUser = event =>{
        event.preventDefault()
        if(password !== confirmPassword){
            setError('you two password not match')
            return;
        }
    }
    

    return (
        <div className="form-container">
        <div>
          <h2 className="form-title">SignUP</h2>
          <form>
             <div className="input-group">
                 <label htmlFor="email"> Email</label>
                 <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
  
             </div>
             <div className="input-group">
                 <label htmlFor="password">Password</label>
                 <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
  
             </div>
             <div className="input-group">
                 <label htmlFor="Confirm-password">Confirm-Password</label>
                 <input onBlur={handleConfirmPasswordBlur} type="password" name="Confirm-password" id="" required />
  
             </div>
             <p style= {{color:'red'}}>{error}</p>
             <input className="form-submit" type="submit" value="Sign UP" />
          </form>
          <p>Already have a account? <Link className="form-link" to='/signUp'>Login</Link> </p>
        </div>
      </div>
    );
};

export default SignUp;