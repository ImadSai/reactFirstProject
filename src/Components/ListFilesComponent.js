import React, { Component } from "react";
import UploadFilesService from '../Service/UploadFilesService';
import '../Styles/listFiles.css';

class ListFilesComponent extends Component {

    constructor(props) {
        super(props);
        this.uploadApi = new UploadFilesService();
        this.state = {
            files: [],
            page: 1,
            perPage: 10,
        };
    };

    // Récupérer la liste des fichiers 
    getFiles = (userId, page, perPage) => {
        this.uploadApi.getFiles(userId, page, perPage).then( (res) => {
            console.log(res);
        });
    }

    componentDidMount = () => {
        let user = JSON.parse(localStorage.getItem('user'));
        this.getFiles(user._id, this.state.page, this.state.perPage);
    }

    render() {
        return (
            <div className="container-files"> 
                
                files 
            
            </div>
        );
    }
}

export default ListFilesComponent;