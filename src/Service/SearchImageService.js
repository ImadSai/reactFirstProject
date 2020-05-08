import axios from "axios";
import { myConfig } from '../Config/Config';

export default class SearchImageService {

    constructor() {
        this.imagesApi = myConfig.imageSearchApi;
    }

    // Recupérer les Images
    getImages = (target, page, perPage)  => {
        return axios.get(this.imagesApi + "&per_page=" + perPage + "&page=" + page + "&q=" + target);
    }

}