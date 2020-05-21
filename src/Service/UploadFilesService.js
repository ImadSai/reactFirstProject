import { myConfig } from '../Config/Config';
import axios from 'axios';

// Service pour l'Upload des fichier
export default class UploadFilesService {

    constructor() {
        this.apiUrl = myConfig.apiUrl + '/files';
    }

    // Envoyer un file au serveur
    uploadFiles = (files) => {
        const formData = new FormData();
        for (var file in files) {
            formData.append('file', files[file]);
        }
        axios.post(this.apiUrl + '/uploadFile', formData).then((res) => {
            console.log(res);
        });
    };

    // Récupérer les fichiers 
    getFiles = (userId, page, perPage) => {
        return axios.get(this.apiUrl + '/getfiles', { params: {userId: userId, page: page, perPage: perPage} });
    }
}