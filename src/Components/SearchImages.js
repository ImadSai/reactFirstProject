import React, { Component } from "react";
import axios from "axios";
import ImageResultDisplay from './ImageResultDisplay';


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

    /******** PAGINATION *********/

    goPage = (page) => {
        this.setState({
            page: page,
        }, () => this.getImages());
    }

    previousPage = () => {
        if (this.state.page > 1) {
            let targetPage = this.state.page - 1;
            this.setState({
                page: targetPage
            }, () => this.getImages());
        }
    };

    nextPage = () => {
        let nombreElements = this.state.res.totalHits == null ? 0 : this.state.res.totalHits;
        let indexLastPage = Math.round(nombreElements / this.state.perPage)
        if( this.state.page < indexLastPage) {
            this.setState({
                page: this.state.page + 1,
            }, () => this.getImages());
        }
    };

    getLastPage = () => {
        console.log('Last page called');
        let nombreElements = this.state.res.totalHits == null ? 0 : this.state.res.totalHits;
        let indexLastPage = Math.round(nombreElements / this.state.perPage)
        if (indexLastPage !== this.state.page && nombreElements > 0) {
            this.goPage(indexLastPage);
        }
    };

    getFirstPage = () => {
        let nombreElements = this.state.res.totalHits == null ? 0 : this.state.res.totalHits;
        if (this.state.page != 1 && nombreElements > 0) {
            this.goPage(1);
        }
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
                            <input type="text" 
                                style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px'}}
                                className="form-control"
                                placeholder="Description"
                                value={this.state.rechercheTarget} onChange={this.changeTarget}
                                onKeyPress={this.keyPressed} />
                            <div className="input-group-append">
                                <button className="btn btn-primary" style={{borderTopRightRadius: '15px', borderBottomRightRadius: '15px'}} onClick={() => this.lancerRecherche()}> Search </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 p-3"></div>
                </div>

                {/* Resultat Recherche */}
                <div className="row">
                    {
                        this.state.listeImages.map((img) =>
                            <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                                <ImageResultDisplay image={img}/>
                            </div>
                        )
                    }
                </div>

                {/* Pagination */}
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item"><button className="btn page-link" onClick={() => this.getFirstPage()}>First</button></li>
                        <li className="page-item"><button className="btn page-link" onClick={() => this.previousPage()}> &#60; </button></li>
                        {
                            this.getListPagination().map( (actual) => 
                                <li className="page-item"><button className="btn page-link" style={{ backgroundColor: (actual === this.state.page) ? 'rgb(212, 212, 212)' : 'transparent'}} onClick={() => this.goPage(actual)}>{actual}</button></li>
                            )
                        }
                        <li className="page-item"><button className="btn page-link" onClick={() => this.nextPage()}> &#62; </button></li>
                        <li className="page-item"><button className="btn page-link" onClick={() => this.getLastPage()}>Last</button></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SearchImages;