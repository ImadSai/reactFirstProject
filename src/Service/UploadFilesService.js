import { myConfig } from '../Config/Config';
import axios from 'axios';

// Service pour l'Upload des fichier
export default class UploadFilesService {

    constructor() {
        this.apiUrl = myConfig.apiUrl + '/files';
    }

    uploadFiles = (files) => {
        console.log(this.apiUrl);
        const formData = new FormData();
        for( var file in files ) {
            formData.append('file',files[file]);
        }
        axios.post(this.apiUrl + '/uploadFile', formData).then((res) => {
            console.log(res);
        });
    };

}