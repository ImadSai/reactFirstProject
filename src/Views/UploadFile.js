import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import '../styles/uploadFile.css'

class UploadFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
    }

    // Element a afficher si un fichier est pret a l'Upload
    showBtnUpload = () => {
        return (
            <button className="btnSend justify-content-center" onClick={() => this.sendFiles()}>
                <FontAwesomeIcon icon={faPlayCircle} size="3x" />  <b className="ml-2">Upload File</b>
            </button>
        );
    };

    // Icone a afficher par default
    showDefaultIcon = () => {
        return (
            <div className="upload-btn-wrapper" id="btn-wrapper">
                <button className="btnUpload" >
                    <div>
                        <FontAwesomeIcon icon={faCloudUploadAlt} size="6x" />
                        <h2> <p> Upload File </p></h2>
                    </div>
                </button>
                <input type="file" name="myfile" onChange={this.setFiles} />
            </div>
        );
    };

    // Set Files on change
    setFiles = (event) => {
        this.setState({
            files: event.target.files
        });
    };

    // Send files to backend
    sendFiles = () => {
        console.log(this.state.files);
    };

    // Display Upload
    getUpload = () => {
        if (this.state.files.length === 0) {
            return (this.showDefaultIcon());
        } else {
            return (this.showBtnUpload());
        }
    }

    // Render 
    render() {
        return (
            <div className="container d-flex justify-content-center mt-4"> {
                this.getUpload()} 
            </div>
        );
    }
}

export default UploadFile;