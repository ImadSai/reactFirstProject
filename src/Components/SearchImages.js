import React, { Component } from "react";
import axios from "axios";
import InputTextSearch from './InputTextSearch';
import ImageResultDisplay from './ImageResultDisplay';
import PaginationComponent from './PaginationComponent';

class SearchImages extends Component {

    constructor() {
        super();
        this.urlPics = "https://pixabay.com/api/?key=16278676-649c0d48e5ce6a59f81bcedff&image_type=photo&pretty=true";
        this.refSearchText = React.createRef()
        this.state = {
            res: [],
            listeImages: [],
            rechercheTarget: '',
            page: 1,
            perPage: 12
        }
    }

    // Get Images from web service
    lancerRecherche = (target) => {
        this.setState({
            page: 1,
            rechercheTarget: target,
        }, () => this.getImages(1));
    };

    // Get Images Avec pagination et Target
    getImages = (page) => {
        window.scrollTo({ top: this.refSearchText.current.offsetTop, behavior: 'smooth' });
        this.setState({
            page: page
        }, () =>
            axios.get(this.urlPics + "&per_page=" + this.state.perPage + "&page=" + this.state.page + "&q=" + this.state.rechercheTarget)
                .then(response => {
                    this.setState({
                        res: response.data,
                        listeImages: response.data.hits
                    });
                })
                .catch(err => {
                    console.error(err);
                }));
    };

    // Render 
    render() {
        return (
            <div className="m-5">

                {/* Bar de recherche  */}
                <div className="row justify-content-center" ref={this.refSearchText}>
                    <div className="col-lg-6 col-md-8 col-sm-10 p-3">
                        <InputTextSearch rechercheFunction={this.lancerRecherche} />
                    </div>
                </div>

                {/* Resultat Recherche */}
                <div className="row">
                    {
                        this.state.listeImages.map((img) =>
                            <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                                <ImageResultDisplay image={img} />
                            </div>
                        )
                    }
                </div>

                {/* Pagination */}
                <PaginationComponent totalElements={this.state.res.totalHits} actualPage={this.state.page} perPage={this.state.perPage} funtionToCall={this.getImages} />

            </div>
        );
    }
}

export default SearchImages;