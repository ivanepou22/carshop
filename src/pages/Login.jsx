import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import './Login.css'
import {credentials} from "../apis/api";

function Login({getDetails}) {
    let history = useHistory();
    const [details, setDetails] = useState({email : "", password : ""});
    const [error, setError] = useState("");
    const onSubmitHandler = e => {
        e.preventDefault();

        if((credentials.email === details.email) && (credentials.password === details.password)) {
            getDetails(details);
            history.push('/home');
        } else {
            setError('Details do not match, Try Again !!')
        }
    }

    return (
        <div className="login-form-container">
            <form onSubmit={onSubmitHandler} className="form-container">
                <h3>user login</h3>
                {
                    (error !== "") ? ( <div className="error-container">{error}</div> ): ""
                }
                <input type="email" placeholder="email" className="box"  onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                <input type="password" placeholder="password" className="box" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                <p> forget your password <a href="/#">click here</a> </p>
                <div>
                    <input  type="submit" value="login" className="btn" />
                    {/* onClick={() => history.push('/home')} */}
                </div>
                <p>or login with</p>
                <div className="buttons">
                    <a href="/#" className="btn"> google </a>
                    <a href="/#" className="btn"> facebook </a>
                </div>
                <p> don't have an account <a href="/#">create one</a> </p>
            </form>
        </div>
    )
}

export default Login
