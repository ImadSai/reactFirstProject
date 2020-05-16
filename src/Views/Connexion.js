import React, { Component } from "react";
import ConnexionComponent from '../Components/ConnexionComponent';

class Connexion extends Component {

    render() {
        return (
            <div className="row">

                <div className="col-lg-8 col-md-8 col-sm-12 p-3">
                    <h1> Drag and Drop </h1>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                    <div className="container d-flex justify-content-center mt-2">
                        <ConnexionComponent />
                    </div>

                </div>

            </div>
        );
    }

}

export default Connexion;