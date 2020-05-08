import React, { Component } from "react";
import UploadFilesService from '../Service/UploadFilesService';
import { convertOctetsToMo } from '../Utils/format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

// Send File Component 
class SendFileComponent extends Component {

    constructor(props) {
        super(props);
        this.uploadApi = new UploadFilesService();
    }

    // Supprimer un fichier de l'Upload List
    deleteFileToUpload = (index) => {
        let newArray = [...this.props.files];
        newArray.splice(index, 1)
        this.props.updateListFunction(newArray);
    }

    // Send files to backend
    sendFiles = () => {
        this.uploadApi.uploadFiles(this.props.files);
    };

    render() {
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
                            this.props.files.map((actual, index) =>
                                <li key={index} className="list-group-item">
                                    <div className="row">
                                        <div className="col-lg-11 col-md-11 col-sm-10" style={{ wordWrap: 'break-word' }}>
                                            <div> {actual.name} <b>({convertOctetsToMo(actual.size).toFixed(2)} Mo) </b> </div>
                                        </div>
                                        <div className="col-lg-1 col-md-1 col-sm-2 text-center">
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
    }
}

export default SendFileComponent;