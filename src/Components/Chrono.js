import React, { Component } from 'react';

/* Classe Chrono */
class Chrono extends Component {

    // Constructeur de notre component
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            time: 0,
            millis: 0,
            seconds: 0,
            minutes: 0,
            hours: 0,
            result: []
        };
    }

    // Update Format 
    setFormat = (n) => {
        return n < 10 ? '0' + n : n;
    }

    // Start Chrono
    startChrono = () => {
        if (this.timerId == null) {
            this.timerId = setInterval(() => {
                this.setState({
                    time: (this.state.time + 1)
                }, () => this.updateChrono());
            }, 10);
        }
    }

    // Pause Chrono
    pauseChrono = () => {
        clearInterval(this.timerId);
        this.timerId = null;
        if (this.state.time > 0) {
            let newLine = (this.setFormat(this.state.hours) + " : " + this.setFormat(this.state.minutes) + " : " + this.setFormat(this.state.seconds) + " , " + this.setFormat(this.state.millis));
            this.setState({
                result: [...this.state.result, newLine]
            });
        }

    };

    // Reset Chrono
    resetChrono = () => {
        this.setState({
            time: 0,
            millis: 0,
            seconds: 0,
            minutes: 0,
            hours: 0,
            result: []
        });
    }

    // Update Chrono 
    updateChrono = () => {
        this.setState({
            millis: Math.floor((this.state.time) % 60),
            seconds: Math.floor((this.state.time / 100) % 60),
            minutes: Math.floor((this.state.time / 6000) % 60),
            hours: Math.floor((this.state.time / 360000) % 60)
        });
    };

    // Le rendu
    render() {
        return (
            <div>
                <div className="container-fluid d-flex justify-content-center">

                    {/* Chronometre */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card border-primary mb-3" style={{ minWidth: '300px' }}>
                                <div className="card-header d-flex justify-content-center"> Chronometer </div>

                                {/* Value */}
                                <div className="card-body text-primary d-flex justify-content-center">
                                    <span className="text-center" style={{ width: '45px' }}><h4> {this.setFormat(this.state.hours)} :</h4></span>
                                    <span className="text-center" style={{ width: '45px' }}><h4> {this.setFormat(this.state.minutes)} :</h4></span>
                                    <span className="text-center" style={{ width: '45px' }}><h4> {this.setFormat(this.state.seconds)} ,</h4></span>
                                    <span className="text-center" style={{ width: '30px' }}><h4> {this.setFormat(this.state.millis)} </h4></span>
                                </div>

                                {/* Footer */}
                                <div className="card-footer d-flex justify-content-center">
                                    <button className="btn btn-outline-success m-1" onClick={() => this.startChrono()}> Start </button>
                                    <button className="btn btn-outline-warning m-1" onClick={() => this.pauseChrono()}> Pause </button>
                                    <button className="btn btn-outline-danger m-1" onClick={() => this.resetChrono()}> Reset </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    {/* Memo */}
                    <div className="row">
                        <div className="col-12">
                            <ul class="list-group" style={{ minWidth: '300px'}}>
                                <li class="list-group-item active text-center"> Result </li>
                                {
                                    this.state.result.map( (actual) => 
                                        <li class="list-group-item text-center"> {actual} </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Chrono;