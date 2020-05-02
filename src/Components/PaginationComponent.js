import React, { Component } from "react";


class PaginationComponent extends Component {

    constructor(props) {
        super(props);
    };

    goPage = (page) => {
        console.log(page);
        this.props.funtionToCall(page);
    }

    previousPage = () => {
        if (this.props.actualPage > 1) {
            this.props.funtionToCall(this.props.actualPage - 1);
        }
    };

    nextPage = () => {
        let nombreElements = this.props.totalElements == null ? 0 : this.props.totalElements;
        let indexLastPage = Math.round(nombreElements / this.props.perPage)
        if (this.props.actualPage < indexLastPage) {
            this.props.funtionToCall(this.props.actualPage + 1);
        }
    };

    getLastPage = () => {
        let nombreElements = this.props.totalElements == null ? 0 : this.props.totalElements;
        let indexLastPage = Math.round(nombreElements / this.props.perPage)
        if (indexLastPage !== this.props.actualPage && nombreElements > 0) {
            this.goPage(indexLastPage);
        }
    };

    getFirstPage = () => {
        let nombreElements = this.props.totalElements == null ? 0 : this.props.totalElements;
        if (this.props.actualPage !== 1 && nombreElements > 0) {
            this.goPage(1);
        }
    };

    getListPagination = () => {
        let nombreElements = this.props.totalElements == null ? 0 : this.props.totalElements;
        let pages = Math.round(nombreElements / this.props.perPage);
        let actualPage = this.props.actualPage;
        if (isNaN(pages)) {
            return [];
        } else {
            let tabPagination = [];
            if ((actualPage - 3) > 0 && (actualPage + 4) <= pages) {
                for (let i = (actualPage - 3); i < (actualPage + 4); i++) {
                    tabPagination.push(i);
                }
            } else if ((actualPage - 3) <= 0) {
                let fin = (actualPage + 6) > pages ? pages : 6;
                for (let i = 1; i <= fin; i++) {
                    tabPagination.push(i);
                }
            } else if ((actualPage + 3) >= pages) {
                let debut = (pages - 6) < 1 ? 1 : (pages - 6);
                for (let i = debut; i <= pages; i++) {
                    tabPagination.push(i);
                }
            }
            return tabPagination;
        }
    };

    render() {
        if(this.props.totalElements > 0 ) {
            return (
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item"><button className="btn page-link" onClick={() => this.getFirstPage()}>First</button></li>
                        <li className="page-item"><button className="btn page-link" onClick={() => this.previousPage()}> &#60; </button></li>
                        {
                            this.getListPagination().map((actual) =>
                                <li className="page-item"><button className="btn page-link" style={{ backgroundColor: (actual === this.props.actualPage) ? 'rgb(212, 212, 212)' : 'transparent' }} onClick={() => this.goPage(actual)}>{actual}</button></li>
                            )
                        }
                        <li className="page-item"><button className="btn page-link" onClick={() => this.nextPage()}> &#62; </button></li>
                        <li className="page-item"><button className="btn page-link" onClick={() => this.getLastPage()}>Last</button></li>
                    </ul>
                </nav>
            );
        } else {
            return null;
        }
    }
}

export default PaginationComponent;