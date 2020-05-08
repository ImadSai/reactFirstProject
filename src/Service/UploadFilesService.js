// Service pour l'Upload des fichier
export default class UploadFilesService {

    constructor() {
        this.urlPics = "https://pixabay.com/api/?key=16278676-649c0d48e5ce6a59f81bcedff&image_type=photo&pretty=true";
    }

    uploadFiles = (files) => {
        console.log(files);
    };

}