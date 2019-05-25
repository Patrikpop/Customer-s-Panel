import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list1: 'Sos pomidorowy, Ananas, Ananas, Kukurydza, Pomidor'.split(', '),
            list2: []
        }
    }

    elementClick = (el, index) => {
        console.log(this, el, index);

        let array = [...this.state.list1];
        let newElement = array.splice(index, 1);

        this.setState({
            list1: array,
            list2: [newElement, ...this.state.list2]
        });
    }

    render() {
        return (
            <div>
                <ul>
                    { this.state.list1.map((el, index) => <li onClick={(event) => this.elementClick(el, index)} key={el + index}>{ el }</li>) }
                </ul>

                <ul>
                    { this.state.list2.map((el, index) => <li key={ el + index }>{ el }</li>) }
                </ul>
            </div>
        );
    }
}
//Nie zmieniaj tego kodu poniżej!

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});