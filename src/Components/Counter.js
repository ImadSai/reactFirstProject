import React, { Component } from 'react';

/* Classe Counter */
class Counter extends Component {

    // Constructeur de notre component
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.infos.value,
            listImages: new Array(this.props.value).fill(0),
            message: ''
        };
    }

    inc = () => {
        let newValue = this.state.counter + 1;
        this.setState({
            counter: newValue,
            listImages: new Array(newValue >= 0 ? newValue : 0).fill(0)
        });
    }

    dec = () => {
        let newValue = this.state.counter > 0 ? this.state.counter - 1 : 0;
        this.setState({
            counter: newValue,
            listImages: new Array(newValue >= 0 ? newValue : 0 ).fill(0)
        });
    }

    // Permet de changer le skill dans l'input
    changeSkill = (event) => {
        this.setState({
            message: event.target.value
        });
    }
    
    // Le rendu
    render() {
        return (
            <div className="card m-3"> 

                <div className="card-header"> 
                    <strong> {this.props.infos.titre} </strong> ===> {this.state.counter}
                </div>

                <div className="m-2">
                    <button className="btn btn-primary m-1" onClick={() => this.inc()} > + </button>
                    <button className="btn btn-primary m-1" onClick={() => this.dec()} > - </button>
                </div>

                <div className="input-group mb-3">
                    <input type="text" 
                        name="skill"
                        className="form-control" 
                        placeholder="Ecris ton message ici"     
                        value={this.state.message} onChange={this.changeSkill}/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick={() => alert(this.state.message)} > Show </button>
                    </div>
                </div>

                <div className="card-body">
                    {
                        this.state.listImages.map( (value) => 
                            <img width={100} src={this.props.image} alt="this is an Description"></img>
                        )
                    }
                </div>

            </div>
        );
    }
}

export default Counter;