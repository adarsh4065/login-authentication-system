import React, { useEffect } from "react";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ' ',
            password: '',
            passwordShown: false,

        }
    }

    componentDidMount() {
        window.onbeforeunload = function () {
            return true;
        };
    }
    componenWillUnmount() {
        window.onbeforeunload = null;
    }

    handleUsernameChange = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }
    handlePassword = (event) => {
        this.setState(
            {
                password: "abcd" + event.target.value
            }
        )
    }
    togglePassword = (event) => {
        this.setState(
            {
                passwordShown: !(event.target.value)
            }
        )
        event.preventDefault()
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:5000/api/req', JSON.stringify(
            {
                username: this.state.username,
                password: this.state.password
            }
        ))
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        const { Name, username, password, passwordShown } = this.state
        return (
            <div>
                <nav className="navbar navbar-light bg-secondary">
                    <a id="home-link" className="navbar-brand" href="/" style={{ color: "white" }}   >
                        SIGNUP
                    </a>
                </nav>
                <form className="form-class" onSubmit={this.handleSubmit}>
                    <div className="username-class">
                        <label>username:</label>
                        <input type="text" value={username} onChange={this.handleUsernameChange}></input>
                    </div>
                    <div className="password-class">
                        <label>password:</label>
                        <input type={passwordShown ? "text" : "password"} onChange={this.handlePassword}></input>

                    </div>
                    <div className="button-class">
                        <button onClick={this.togglePassword} >show password</button>
                    </div>
                    <button type="submit" class="btn btn-secondary" >
                        Login
                    </button>
                </form>
            </div>
        )

    }

}




export default Form2;