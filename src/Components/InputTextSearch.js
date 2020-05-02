import React, { Component } from "react";

// Class Input Recherche 
class InputTextSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    // Lancer recherche
    lancerRecherche = () => {
        this.props.rechercheFunction(this.state.value);
    };

    // Get Image on Press Enter
    keyPressed = (event) => {
        if (event.key === "Enter") {
            this.lancerRecherche();
        }
    };

    // Update Target to search
    changeTarget = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    render() {
        return (
            <div className="input-group">
                <input type="text"
                    style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }}
                    className="form-control"
                    placeholder="Description"
                    value={this.rechercheTarget} onChange={this.changeTarget}
                    onKeyPress={this.keyPressed} />

                <div className="input-group-append">
                    <button className="btn btn-primary"
                        style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}
                        onClick={() => this.lancerRecherche()}> Search </button>
                </div>
            </div>
        );
    }
}

export default InputTextSearch;