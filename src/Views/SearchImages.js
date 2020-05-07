import React, { Component } from "react";
import axios from "axios";
import InputTextSearchComponent from '../Components/InputTextSearchComponent';
import ImageResultDisplayComponent from '../Components/ImageResultDisplayComponent';
import PaginationComponentComponent from '../Components/PaginationComponent';
import ImageResultDetailComponent from "../Components/ImageResultDetailComponent";

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
            perPage: 12,
            isDetailOpen: false,
            selectedImage: null
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

    // Ouvrir les details d'une image
    toggleModal = (image) => {
        this.setState({
            isDetailOpen: !this.state.isDetailOpen,
            selectedImage: image,
        }, () => {
            this.showModalDetail();
        });
    };

    // Afficher modal Detail
    showModalDetail = () => {
        if (this.state.isDetailOpen) {
            return <ImageResultDetailComponent show={this.state.isDetailOpen} onClose={this.toggleModal} imageInfos={this.state.selectedImage} />
        } else {
            return;
        }
    }

    // Render 
    render() {
        return (
            <div className="m-5">

                {/* Bar de recherche  */}
                <div className="row justify-content-center" ref={this.refSearchText}>
                    <div className="col-lg-6 col-md-8 col-sm-10 p-3">
                        <InputTextSearchComponent rechercheFunction={this.lancerRecherche} />
                    </div>
                </div>

                {/* Resultat Recherche */}
                <div className="row">
                    {
                        this.state.listeImages.map((img) =>
                            <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                                <ImageResultDisplayComponent showHeader={false} showFooter={true} image={img} actionDisplayDetails={this.toggleModal} />
                            </div>
                        )
                    }
                </div>

                {/* Detail */}
                {this.showModalDetail()}

                {/* Pagination */}
                <PaginationComponentComponent totalElements={this.state.res.totalHits} actualPage={this.state.page} perPage={this.state.perPage} funtionToCall={this.getImages} />

            </div>
        );
    }

}

export default SearchImages;