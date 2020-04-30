import React, { Component } from "react";
import axios from "axios";


class SearchImages extends Component {

    constructor() {
        super();
        this.urlPics = "https://pixabay.com/api/?key=16278676-649c0d48e5ce6a59f81bcedff&image_type=photo&pretty=true";
        this.state = {
            res: [],
            listeImages: [],
            rechercheTarget: '',
        }
    }

    // Get Images from web service
    getImages = () => {
        axios.get(this.urlPics + "&q=" + this.state.rechercheTarget)
            .then(response => {
                this.setState({
                    res: response.data,
                    listeImages: response.data.hits
                });
                console.log(this.state.res);
            })
            .catch(err => {
                console.error(err);
            });
    };

    // Update Target to search
    changeTarget = (event) => {
        this.setState({
            rechercheTarget: event.target.value,
        });
    };

    // Get Image on Press Enter
    keyPressed = (event) => {
        if (event.key === "Enter") {
            this.getImages();
        }
    };

    // Ouvrir une image dans un nouvel onglet
    openImage = (url) => {
        window.open(url);
    };

    render() {

        return (
            <div className="m-5">

                {/* Bar de recherche  */}
                <div className="row">
                    <div className="col-md-4 p-3"></div>

                    <div className="col-md-4 p-3">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control"
                                placeholder="Description"
                                value={this.state.rechercheTarget} onChange={this.changeTarget}
                                onKeyPress={this.keyPressed} />
                            <div className="input-group-append">
                                <button onClick={() => this.getImages()}> Search ! </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-3"></div>
                </div>

                {/* Resultat Recherche */}
                <div className="row">
                    {
                        this.state.listeImages.map((actual) =>
                            <div className="col-lg-3 col-md-4 col-sm-4 p-3">

                                <div className="card">

                                    <div className="card-header">
                                        {actual.tags.split(",")[0]}
                                    </div>

                                    <div className="card-body" >
                                        <img style={{ width: '100%', height: '100%' }} src={actual.webformatURL} />
                                    </div>

                                    <div className="card-footer d-flex justify-content-center">
                                        <button onClick={() => this.openImage(actual.largeImageURL)}> Download </button>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>

                {/* Pagination */}
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SearchImages;