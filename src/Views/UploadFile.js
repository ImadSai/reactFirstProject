import React, { Component } from "react";
import DragAndDropZoneComponent from '../Components/DragAndDropZoneComponent';
import SendFileComponent from '../Components/SendFileComponent';
import ListFilesComponent from '../Components/ListFilesComponent'

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

    // Render 
    render() {
        if (this.state.filesToUpload.length === 0) {
            return (
                <div>
                    <div className="container w-75 mt-3">
                        <DragAndDropZoneComponent updateListFunction={this.updateFile} />
                    </div>
                    <div className="container w-75 mt-3">
                        <ListFilesComponent />
                    </div>
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
}

export default UploadFile;