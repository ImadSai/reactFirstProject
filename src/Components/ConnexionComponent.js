import React, { Component } from "react";
import '../Styles/connexion.css'

class ConnexionComponent extends Component {

    render() {
        return (
            <div className="container-connexion">

                {/* Login input */}
                <div className="form-group">
                    <input type="text" className="input-text" placeholder="User" />
                </div>

                {/* Password input */}
                <div className="form-group">
                    <input type="password" className="input-text" placeholder="Password" />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-connexion"> Login </button>
                </div>

            </div>
        );
    }

}

export default ConnexionComponent;