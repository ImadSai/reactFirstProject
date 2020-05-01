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
            oldRechercheTarget: '',
            page: 1,
            perPage: 12
        }
    }

    // Get Images from web service
    lancerRecherche = () => {
        this.setState({
                page: 1,
                oldRechercheTarget: this.state.rechercheTarget,
            }, () => this.getImages()); 
    };

    // Get Images Avec pagination et Target
    getImages = () => {
        console.log(this.state.page);
        axios.get(this.urlPics + "&per_page=" + this.state.perPage + "&page=" + this.state.page + "&q=" + this.state.oldRechercheTarget)
            .then(response => {
                this.setState({
                    res: response.data,
                    listeImages: response.data.hits
                });
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
            this.lancerRecherche();
        }
    };

    // Ouvrir une image dans un nouvel onglet
    openImage = (url) => {
        window.open(url);
    };

    /******** PAGINATION *********/

    previousPage = () => {
        if (this.state.page > 1) {
            let targetPage = this.state.page - 1;
            this.setState({
                page: targetPage
            }, () => this.getImages());
        }
    };

    nextPage = () => {
        if( this.state.page < this.getLastPage()  ) {
            this.setState({
                page: this.state.page + 1,
            }, () => this.getImages());
        }
        
    };

    getLastPage = () => {
        let nombreElements = this.state.res.totalHits == null ? 0 : this.state.res.totalHits;
        return Math.round(nombreElements / this.state.perPage);
    };

    getListPagination = () => {
        let nombreElements = this.state.res.totalHits == null ? 0 : this.state.res.totalHits;
        let pages = Math.round(nombreElements / this.state.perPage);
        let actualPage = this.state.page;
        if(isNaN(pages)) {
            return [];
        } else {
            let tabPagination = [];
            if ((actualPage - 3) > 0 && (actualPage + 4) <= pages) {
                for ( let i = (actualPage - 3) ; i < (actualPage + 4); i++) {
                    tabPagination.push(i);
                }
            } else if ( (actualPage - 3) <= 0 ) {
                let fin = (actualPage + 6) > pages ? pages : 6;
                for ( let i = 1; i <= fin; i++) {
                    tabPagination.push(i);
                }
            } else if ( (actualPage + 3) >= pages ) {
                let debut = (pages - 6) < 1 ? 1 : (pages-6);
                for ( let i = debut; i <= pages; i++) {
                    tabPagination.push(i);
                }
            }
            return tabPagination;
        }
    };

    setPage = (page) => {
        this.setState({
            page: page,
        }, () => this.getImages());
    }

    /******** PAGINATION *********/

    // Render 
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
                                <button onClick={() => this.lancerRecherche()}> Search ! </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-3"></div>
                </div>

                {/* Resultat Recherche */}
                <div className="row">
                    {
                        this.state.listeImages.map((actual) =>
                            <div className="col-lg-3 col-md-4 col-sm-6 p-3">

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
                        <li className="page-item"><a className="btn page-link" onClick={() => this.setPage(1)}>First</a></li>
                        <li className="page-item"><a className="btn page-link" onClick={() => this.previousPage()}> &#60; </a></li>
                        {
                            this.getListPagination().map( (actual) => 
                                <li className="page-item"><a className="btn page-link" style={{ backgroundColor: (actual == this.state.page) ? 'red' : 'transparent'}} onClick={() => this.setPage(actual)}>{actual}</a></li>
                            )
                        }
                        <li className="page-item"><a className="btn page-link" onClick={() => this.nextPage()}> &#62; </a></li>
                        <li className="page-item"><a className="btn page-link" onClick={() => this.setPage(this.getLastPage())}>Last</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SearchImages;