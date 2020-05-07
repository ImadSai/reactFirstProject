import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { convertOctetsToMo } from '../Utils/format';
import EventListener from 'react-event-listener';
import '../styles/uploadFile.css'

class UploadFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filesToUpload: new Array(),
            uploadStyle: 'btnUploadDefault'
        };
    }

    // Element a afficher si un fichier est pret a l'Upload
    showBtnUpload = () => {
        return (

            <div className="row">

                {/* Button Upload */}
                <div className="col-12 m-1">
                    <button className="btn btn-outline-success btnSend justify-content-center" onClick={() => this.sendFiles()}>
                        <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" />
                        <b className="ml-2">Upload Files</b>
                    </button>
                </div>

                {/* List files to Upload */}
                <div className="col-12 m-1">
                    <ul className="list-group">
                        <li className="list-group-item active text-center"> Files </li>
                        {
                            this.state.filesToUpload.map((actual, index) =>
                                <li key={index} className="list-group-item">
                                    <div className="row">
                                        <div className="col-11">
                                            <span> {actual.name}  <b>({convertOctetsToMo(actual.size).toFixed(2)} Mo) </b> </span>
                                        </div>
                                        <div className="col-1">
                                            <button type="button" className="btn btn-outline-danger" onClick={() => this.deleteFileToUpload(index)}>x</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>

            </div>
        );
    };

    handleDragEnterOrOverEnter = () => {
        this.setState({
            uploadStyle: 'btnUploadHover'
        });
    };

    handleDragLeaveOrOverLeave = () => {
        this.setState({
            uploadStyle: 'btnUploadDefault'
        });
    };

    // Supprimer un fichier de l'Upload List
    deleteFileToUpload = (index) => {
        let newArray = [...this.state.filesToUpload];
        newArray.splice(index, 1)
        this.setState({
            filesToUpload: newArray
        });
    }

    // Icone a afficher par default
    showDefaultIcon = () => {
        return (
            <div onMouseOver={this.handleDragEnterOrOverEnter}
                onDragEnter={this.handleDragEnterOrOverEnter}
                onMouseLeave={this.handleDragLeaveOrOverLeave}
                onDragLeave={this.handleDragLeaveOrOverLeave}
                className="upload-btn-wrapper" id="btn-wrapper">
                <button className={this.state.uploadStyle} id="btn-upload" >
                    <div className="col-12">
                        <FontAwesomeIcon icon={faCloudUploadAlt} size="6x" />
                        <EventListener target="btn-wrapper" onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} />
                        <h2> <p> Drag and drop or Click </p></h2>
                    </div>
                </button>
                <input type="file" name="myfile" onChange={this.setFiles} multiple />
            </div>
        );
    };

    // Set Files on change
    setFiles = (event) => {
        this.setState({
            filesToUpload: Array.from(event.target.files)
        });
    };

    // Send files to backend
    sendFiles = () => {
        console.log(this.state.filesToUpload);
    };

    // Display Upload
    getUpload = () => {
        if (this.state.filesToUpload.length === 0) {
            return (this.showDefaultIcon());
        } else {
            return (this.showBtnUpload());
        }
    }

    // Render 
    render() {
        return (
            <div className="container d-flex justify-content-center mt-4">
                {this.getUpload()}
            </div>
        );
    }
}

export default UploadFile;