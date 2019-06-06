import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import '../scss/custom.scss'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Content />
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

