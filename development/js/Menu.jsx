import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    fclHandler = (e) => {

    }

    render() { 
        return (  
            <ul className="Menu">
                    <li><a href="#" onClick={this.fclHandler}>Kalkulator FCL</a></li>
                    <li><a href="#" onClick={this.lclHandler}>Kalkulator LCL</a></li>
                    <li><a href="#" onClick={this.activeBookingHandler}>Aktualne zlecenia</a></li>
                    <li><a href="#" onClick={this.doneBookingHandler}>Zakończone zlecenia</a></li>
                </ul>
        );
    }
}
 
export default Menu;