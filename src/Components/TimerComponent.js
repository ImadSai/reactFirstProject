import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

class TimerComponent extends Component {

    // Constructeur de notre component
    constructor(props) {
        super(props);
        this.state = {
            timeTimer: 0,
            secondsTimer: 0,
            minutesTimer: 0,
            hoursTimer: 0,
        };
    }

    // Update Format 
    setFormat = (n) => {
        return n < 10 ? '0' + n : n;
    }

    // Start Timer
    startTimer = () => {
        if (this.timerId == null) {
            // Calcul du timeTimer
            this.setState({
                timeTimer: (this.state.hoursTimer * 3600000) + (this.state.minutesTimer * 60000) + (this.state.secondsTimer * 1000)
            }, () => this.setIntervalForTimer());
        }
    }

    setIntervalForTimer = () => {
        // Set interval
        this.timerId = setInterval(() => {
            this.setState({
                timeTimer: (this.state.timeTimer - 1000)
            }, () => this.updateTimer());
        }, 1000);
    }

    // Pause Timer
    resetTimer = () => {
        clearInterval(this.timerId);
        this.timerId = null;
        this.setState({
            timeTimer: 0,
            secondsTimer: 0,
            minutesTimer: 0,
            hoursTimer: 0
        });
    };

    // Update Timer 
    updateTimer = () => {
        this.setState({
            secondsTimer: Math.floor((this.state.timeTimer / 1000) % 60),
            minutesTimer: Math.floor((this.state.timeTimer / 60000) % 60),
            hoursTimer: Math.floor((this.state.timeTimer / 3600000) % 60)
        }, () => {
            if (this.state.timeTimer < 0) {
                alert('Timer Done !');
                this.resetTimer();
            }
        });
    };

    // Incrementer heure
    incH = () => {
        this.setState({
            hoursTimer: this.state.hoursTimer + 1
        });
    }

    // Decrementer heure
    decH = () => {
        if (this.state.hoursTimer > 0) {
            this.setState({
                hoursTimer: this.state.hoursTimer - 1
            });
        }
    }

    // Incrementer minute
    incM = () => {
        this.setState({
            minutesTimer: this.state.minutesTimer + 1
        });
    }

    // Decrementer minute
    decM = () => {
        if (this.state.minutesTimer > 0) {
            this.setState({
                minutesTimer: this.state.minutesTimer - 1
            });
        }
    }

    // Incrementer seconde
    incS = () => {
        this.setState({
            secondsTimer: this.state.secondsTimer + 1
        });
    }

    // Decrementer seconde
    decS = () => {
        if (this.state.secondsTimer > 0) {
            this.setState({
                secondsTimer: this.state.secondsTimer - 1
            });
        }
    }

    render() {
        return (
            <div className="row w-100">

                {/* View */}
                <div className="col-12">
                    <div className="card border-primary mb-3" >
                        <div className="card-header d-flex justify-content-center"> Timer </div>

                        {/* Value */}
                        <div className="card-body text-primary">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <FontAwesomeIcon onClick={() => this.incH()} style={{ cursor: 'pointer' }} className="ml-3 mr-3 fa-lg" icon={faSortUp} />
                                    <FontAwesomeIcon onClick={() => this.incM()} style={{ cursor: 'pointer' }} className="ml-3 mr-3 fa-lg" icon={faSortUp} />
                                    <FontAwesomeIcon onClick={() => this.incS()} style={{ cursor: 'pointer' }} className="ml-3 mr-3 fa-lg" icon={faSortUp} />
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <h4 className="m-0"> {this.setFormat(this.state.hoursTimer)} : {this.setFormat(this.state.minutesTimer)} : {this.setFormat(this.state.secondsTimer)} </h4>
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <FontAwesomeIcon onClick={() => this.decH()} style={{ cursor: 'pointer' }} className="ml-3 mr-3 fa-lg" icon={faSortDown} />
                                    <FontAwesomeIcon onClick={() => this.decM()} style={{ cursor: 'pointer' }} className="ml-3 mr-3 fa-lg" icon={faSortDown} />
                                    <FontAwesomeIcon onClick={() => this.decS()} style={{ cursor: 'pointer' }} className="ml-3 mr-3 fa-lg" icon={faSortDown} />
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="card-footer d-flex justify-content-center">
                            <button className="btn btn-outline-success m-1" onClick={() => this.startTimer()}> Start </button>
                            <button className="btn btn-outline-danger  m-1" onClick={() => this.resetTimer()}> Reset </button>
                        </div>
                    </div>
                </div>

                <div className="col-12"></div>

            </div>
        )
    }
}

export default TimerComponent;