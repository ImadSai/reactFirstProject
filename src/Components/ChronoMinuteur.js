import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

/* Classe Chrono */
class ChronoMinuteur extends Component {

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
            result: [],
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

    // Start Chrono
    startChrono = () => {
        if (this.timerChronoId == null) {
            this.timerChronoId = setInterval(() => {
                this.setState({
                    time: (this.state.time + 1)
                }, () => this.updateChrono());
            }, 10);
        }
    }

    // Pause Chrono
    pauseChrono = () => {
        clearInterval(this.timerChronoId);
        this.timerChronoId = null;
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
                alert('Timer fini !');
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

    // Le rendu
    render() {
        return (
            <div>
                <div className="container w-50">

                    {/* Timer */}
                    <div className="row m-5">

                        {/* View */}
                        <div className="col-12" style={{ width: '300px', height: '250px' }}>
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


                    {/* Chronometre */}
                    <div className="row m-5">

                        {/* View */}
                        <div className="col-12 ">
                            <div className="card border-primary mb-3">
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
                                    <button className="btn btn-outline-danger  m-1" onClick={() => this.resetChrono()}> Reset </button>
                                </div>
                            </div>
                        </div>

                        {/* Result */}
                        <div className="col-12 ">
                            <ul className="list-group">
                                <li className="list-group-item active text-center"> Result </li>
                                {
                                    this.state.result.map((actual) =>
                                        <li className="list-group-item text-center"> {actual} </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>


                </div>
            </div >
        );
    }
}

export default ChronoMinuteur;