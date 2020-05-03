import React, { Component } from 'react';
import TimerComponent from './TimerComponent';
import ChronoComponent from './ChronoComponent';

/* Classe Chrono Minuteur */
class ChronoMinuteur extends Component {

    render() {
        return (
            <div className="container w-75">
                <div className="row">

                    {/* Timer Component */}
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                        <TimerComponent />
                    </div>

                    {/* Timer */}
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                        <ChronoComponent />
                    </div>

                </div>
            </div >
        );
    }
}

export default ChronoMinuteur;