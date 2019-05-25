import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../scss/custom.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Footer />
            </div>
        );
    }
}

//Nie zmieniaj tego kodu poniżej!
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

