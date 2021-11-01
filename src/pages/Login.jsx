import { useState } from "react";
import { useAuth } from "../Context/ContextApi";
import { useHistory } from "react-router-dom";
import './Login.css'
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

function Login({ getDetails }) {
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const { login, loading, error, setError } = useAuth();
    const history = useHistory();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault();
        setError("")
        login(data);

        //Get the user Logged in.
        const currentUser = JSON.parse(localStorage.getItem("user"));
        if (!currentUser) {
            return error
        } else {
            history.push('/')
        }
    };

    return (
        <div className="login-container">
            <div className="container-main" id="container">
                <div className="form-container log-in-container">
                    <form className="login-form" onSubmit={submit}>
                        <h1 className="login-title">Login</h1>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className="social-container">
                            <a href="/#" className="social login-anchor"><FaFacebookF /></a>
                            <a href="/#" className="social login-anchor"> <FaTwitter /></a>
                        </div>
                        <span className="login-span">or use your account</span>
                        <input
                            type="text"
                            placeholder="Username"
                            className="login-input"
                            name="username"
                            value={data.username}
                            onChange={handleChange}
                            required />
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                        <a href="/#" className="login-anchor">Forgot your password?</a>
                        <input type="submit" className="login-button" value={loading ? "loging in..." : "Login"} />
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1 className="login-title">WalkerAuto Limited</h1>
                            <p className="login-para">
                                Welcome To WalkerAuto Limited the Automobile
                                in Town.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
