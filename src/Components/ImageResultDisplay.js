import React, { Component } from "react";

class ImageResultDisplay extends Component {

    componentDidMount() {
        console.log('Component Image Did Mount ');
    }

    componentDidUpdate() {
        console.log('Component Image Did Update ');
    }

    // Ouvrir une image dans un nouvel onglet
    openImage = (url) => {
        window.open(url);
    };

    render() {
        return (
            <div className="card">

                <div className="card-header">
                    {this.props.image.tags.split(",")[0]}
                </div>

                <div className="card-body" >
                    <img style={{ width: '100%', height: '100%' }} src={this.props.image.webformatURL} />
                </div>

                <div className="card-footer d-flex justify-content-center">
                    <button onClick={() => this.openImage(this.props.image.largeImageURL)}> Download </button>
                </div>

            </div>
        )
    }
}

export default ImageResultDisplay;