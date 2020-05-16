import React, { Component } from "react";
import DragAndDropZoneComponent from '../Components/DragAndDropZoneComponent';
import SendFileComponent from '../Components/SendFileComponent';
import ConnexionComponent from '../Components/ConnexionComponent';

class UploadFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filesToUpload: new Array()
        };
    }

    // Set Files
    updateFile = (files) => {
        this.setState({
            filesToUpload: files
        });
    };

    uploadFileView = () => {
        if (this.state.filesToUpload.length === 0) {
            return (
                <div className="container w-75 mt-3">
                    <DragAndDropZoneComponent updateListFunction={this.updateFile} />
                </div>
            );
        } else {
            return (
                <div className="container w-50 mt-3">
                    <SendFileComponent updateListFunction={this.updateFile} files={this.state.filesToUpload} />
                </div>
            );
        }
    }

    // Render 
    render() {

        return this.uploadFileView()
        
    }
}

export default UploadFile;