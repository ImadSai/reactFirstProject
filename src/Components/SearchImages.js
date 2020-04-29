import React, { Component } from "react";
import axios from "axios";


class SearchImages extends Component {

    constructor() {
        super();
        this.urlPics = "https://pixabay.com/api/?key=16278676-649c0d48e5ce6a59f81bcedff&image_type=photo&pretty=true";
        this.state = {  
            res : [],
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

    render() {

        var divStyle = {height: 200};

        return (
            <div className="m-5">

                {/* Bar de recherche  */}
                <div className="input-group mb-3"> 
                    <input type="text" className="form-control" 
                    placeholder="Description"
                    value={this.state.rechercheTarget} onChange={this.changeTarget} 
                    onKeyPress={this.keyPressed}/>
                    <div className="input-group-append">
                        <button onClick={() => this.getImages()}> Search ! </button>
                    </div>
                </div>

                {/* Resultat Recherche */}
                <div className="row">
                    {
                        this.state.listeImages.map((actual) =>
                            <div className="column w-25 p-3">

                                <div className="card" style={divStyle}>

                                    <div className="card-header">
                                        {actual.tags}
                                    </div>

                                    <div className="card-body">
                                        <img width={actual.previewWidth} src={actual.previewURL}/>
                                    </div>

                                </div>

                            </div>
                        )
                    }

                </div>



            </div>
        );
    }

}

export default SearchImages;