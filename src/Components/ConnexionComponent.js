import React, { Component } from "react";
import UserService from '../Service/UserService';
import '../Styles/connexion.css';

class ConnexionComponent extends Component { 

    constructor(props) {
        super(props);
        this.api = new UserService();
        this.state = {
            user: '',
            password: '',
            error: false,
            errorMessage: ''
        }
    }

    
    // update user field
    changeUser = (event) => {
        this.setState({
            user: event.target.value,
        });
    }

    // update password field
    changePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    }

    // Login
    login = () => {

        this.setState({
            error: false
        });

        // Call login
        this.api.login(this.state.user, this.state.password).then( (rep) => {
            console.log(rep);
            localStorage.setItem('token', JSON.stringify(rep.data.token));
            localStorage.setItem('user', JSON.stringify(rep.data.user));
            this.props.redirectFunction();
        }, (error) => {
            console.log(error);
            if (error.response.status === 401) {
                this.setState({
                    error: true,
                    errorMessage: 'Username or Password is invalid',
                });
            }
        });
    }

    // Recupérer les informations du component
    getInformations = () => {
        if(this.state.error === true ) {
            return <div className="alert alert-danger p-1 text-center" > {this.state.errorMessage} </div>
        }
    }

    // Render
    render() {
        return (
            <div className="container-connexion">

                {/* Login input */}
                <div className="form-group">
                    <input type="text" className="input-text" placeholder="User" onChange={this.changeUser}/>
                </div>

                {/* Password input */}
                <div className="form-group">
                    <input type="password" className="input-text" placeholder="Password" onChange={this.changePassword}/>
                </div>

                { this.getInformations() }

                <div className="form-group">
                    <button className="btn btn-primary btn-connexion" onClick={() => this.login()}> Login </button>
                </div>

            </div>
        );
    }
}

export default ConnexionComponent;