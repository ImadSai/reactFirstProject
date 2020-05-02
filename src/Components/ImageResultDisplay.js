import React, { Component } from "react";
import ImageResultDetail from "./ImageResultDetail";

class ImageResultDisplay extends Component {

    constructor(props) {
        super(props);
    
        this.state = { isDetailOpen: false };
      }

    // Ouvrir les details d'une image
    toggleModal = () => {
        this.setState({
            isDetailOpen: !this.state.isDetailOpen
          });
    }

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
                    <button onClick={() => this.toggleModal()}> Detail </button>
                </div>

                <ImageResultDetail show={this.state.isDetailOpen} onClose={this.toggleModal} imageInfos={this.props.image}/>

            </div>
        )
    }
}

export default ImageResultDisplay;