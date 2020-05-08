import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import EventListener from 'react-event-listener';
import '../Styles/uploadFile.css'

// Drag and Drop zone 
class DragAndDropZoneComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadStyle: 'btnUploadDefault'
        };
    }

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

    // Set Files on change
    setFiles = (event) => {
        this.props.updateListFunction(Array.from(event.target.files));
    };

    render() {
        return (
            <div onMouseOver={this.handleDragEnterOrOverEnter}
                onDragEnter={this.handleDragEnterOrOverEnter}
                onMouseLeave={this.handleDragLeaveOrOverLeave}
                onDragLeave={this.handleDragLeaveOrOverLeave}
                className="upload-btn-wrapper" id="btn-wrapper">
                <button className={this.state.uploadStyle} id="btn-upload" >
                    <div className="col-12">
                        <FontAwesomeIcon icon={faCloudUploadAlt} size="4x" />
                        <EventListener target="btn-wrapper" onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} />
                        <h2> <p> Drag and drop or Click </p></h2>
                    </div>
                </button>
                <input type="file" name="myfile" onChange={this.setFiles} multiple />
            </div>
        );
    }

}

export default DragAndDropZoneComponent;