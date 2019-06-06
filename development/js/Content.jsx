import React from 'react';
import ReactDOM from 'react-dom';
import LCLCalculator from './LCL Calculator.jsx';
import FCLCalculator from './FCL calculator.jsx';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Header extends React.Component {
    state = {}
    render() {
        return (
            <header>
                    <HashRouter>
                        <Link to="/" className="a"><span className="header__panel">Panel</span> <span className="header__customer">Klienta</span></Link>
                    </HashRouter>
            </header>
        );
    }
}

class StartContent extends React.Component {
    render() {
        return <div className="container--flex">
            <div className="start-content-left">
                <h1>Witaj w panelu klienta</h1>
                <span>Zapraszmay do skorzystania z panelu klienta.
                    Sprawdź stawkę za frach morski w imporcie / eksporcie zarówno dla kontenerów jak i drobnicy.
                    Złóż zlecenie online, sprawdź aktualne zlecenia wiele więcej...</span>
                    <div className="decor-line"></div>
                    <object type="image/svg+xml" data="./images/world.svg" className="world-svg" />
            </div>
            <div className="start-conent-right">
            <object type="image/svg+xml" data="./images/ship.svg" className="ship-svg" />
            </div>
        </div>;
    }
}
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div><div className="container">
            <Header /><HashRouter><div className="hashRouter"><ul className="Menu">
                <li><NavLink activeClassName="active-link" to="/fclcalc" className="a">Wyceń transport kontenerowy</NavLink></li>
                <li><NavLink activeClassName="active-link" to="/lclcalc" className="a">Wyceń transport dla drobnicy morskiej</NavLink></li>
                <li><NavLink activeClassName="active-link" to="/activebookings" className="a">Aktualne zlecenia</NavLink></li>
                <li><NavLink activeClassName="active-link" to="/donebookings" className="a">Zakończone zlecenia</NavLink></li>
            </ul>
                <div className="container activeContent">
                    <Route exact path='/' component={StartContent} />
                    <Route path='/fclcalc' component={FCLCalculator} />
                    <Route path='/lclcalc' component={LCLCalculator} />
                    {/* <Route path='/activebookings' component={ActiveBookings} />
                <Route path='/donebookings' component={DoneBookings} /> */}
                </div>
            </div>
            </HashRouter>
        </div>
        </div>
        );
    }
}

export default Content;