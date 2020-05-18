import React, { Component } from "react";
import ConnexionComponent from '../Components/ConnexionComponent';

class Connexion extends Component {

    render() {
        return (
            <div className="row mt-5">

                <div className="col-lg-4 col-md-6 col-sm-12 ">
                    <div className="container d-flex justify-content-center ">
                        <img src="images/cloudServeur.png" style={{ width: '350px', height: '300px' }} />
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 ">
                    <div className="container  justify-content-center " style={{display: 'inline'}}>
                        <div className="w-100">
                            <h1 style={{ fontFamily: "Brush Script MT", fontSize: "70px" }}> Drag and Drop </h1>
                        </div>
                        <div className="w-100">
                            <p> All your files, ready when you are. </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12 ">
                    <div className="container d-flex justify-content-center ">
                        <ConnexionComponent />
                    </div>
                </div>

            </div>
        );
    }
}

export default Connexion;