import React from 'react';
import ReactDOM from 'react-dom';
import LCLCalculator from './LCL Calculator.jsx'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class Main extends React.Component {
    render() {
        return <h1>Hello, World!</h1>;
    }
}
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <HashRouter>
                    <div>
                        <div className="Menu">
                            <Link to="/fclcalc">Wyceń transport kontenerowy</Link>
                            <Link to="/lclcalc">Wyceń transport dla drobnicy morskiej</Link>
                            <Link to="/activebookings">Aktualne Zlecenia</Link>
                            <Link to="/donebookings">Zakończone zlecenia</Link>
                        </div>
                        <div className="activeContent">
                            <Route exact path='/' component={Main} />
                            {/* <Route path='/fclcalc' component={FCLCalculator} /> */}
                            <Route path='/lclcalc' component={LCLCalculator} />
                            {/* <Route path='/activebookings' component={ActiveBookings} />
                        <Route path='/donebookings' component={DoneBookings} /> */}
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default Content;