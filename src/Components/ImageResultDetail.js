import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";


class ImageResultDetail extends Component {

    // Ouvrir une image dans un nouvel onglet
    openImage = () => {
        window.open(this.props.imageInfos.largeImageURL);
    };

    // Lancer le telechargement
    downloadImage = () => {
        axios.get(this.props.imageInfos.largeImageURL, {
            responseType: 'blob',
          }).then((response) => {
            const a = document.createElement('a');
            var file = new Blob([response.data], { type: response.data.type });
            a.href = URL.createObjectURL(file);
            a.download = 'Download.' + response.data.type.split('/')[1];
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a); 
        }); 
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h6>Detail Image</h6></Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <img style={{ width: '100%', height: '100%' }} src={this.props.imageInfos.webformatURL}></img>

                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon icon={faDownload} /> Downloads
                            <span className="badge badge-primary badge-pill">{this.props.imageInfos.downloads}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon icon={faEye} /> Views
                            <span className="badge badge-primary badge-pill">{this.props.imageInfos.views}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon icon={faThumbsUp} /> Likes
                            <span className="badge badge-primary badge-pill">{this.props.imageInfos.likes}</span>
                        </li>
                    </ul>

                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-outline-primary m-1" onClick={this.openImage}> See HD </button>
                        <button className="btn btn-outline-primary m-1" onClick={this.downloadImage}> Download </button>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn btn-outline-secondary" onClick={this.props.onClose}>Close</button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ImageResultDetail;