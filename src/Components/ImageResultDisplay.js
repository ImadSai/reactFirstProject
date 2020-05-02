import React, { Component } from "react";


class ImageResultDisplay extends Component {

    constructor(props) {
        super(props);
    }

    // Set l'etat du header
    setHeader() {
        if (this.props.showHeader) {
            return (<div className="card-header">
                {this.props.image.tags.split(",")[0]}
            </div>);
        }
    }

    // Set l'etat du footer
    setFooter() {
        if (this.props.showFooter) {
            return (<div className="card-footer d-flex justify-content-center">
            <button className="btn btn-dark btn-block p-0" style={{borderRadius: '10px', borderWidth: '0px'}} onClick={() => this.props.actionDisplayDetails(this.props.image)}> 
                <span> <i style={{fontSize: '13px'}}> Detail </i> </span>
            </button>
        </div>);
        }
    }

    render() {
        return (
            <div className="card">

                {/* Header */}
                {this.setHeader()}

                {/* Body */}
                <div className="card-body" >
                    <img style={{ width: '100%', height: '100%' }} src={this.props.image.webformatURL} />
                </div>

                {/* Footer*/}
                {this.setFooter()}

            </div>
        )
    }
}

export default ImageResultDisplay;