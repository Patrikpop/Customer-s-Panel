
import React from 'react';
import ReactDOM from 'react-dom';

class Address extends React.Component {
    render() { 
        return (  
            <div>
                <h1>{(typeof this.props.name === "string" && this.props.name !== "") ? this.props.name : false } {(typeof this.props.lastname === "string" && this.props.lastname !== "") ? this.props.lastname : false }</h1>
                <p>{(typeof this.props.street === "string" && this.props.street !== "") ? this.props.street : false } {(typeof this.props.housenumber === "string" && this.props.housenumber !== "") ? this.props.housenumber : false }</p>
                <p>{(typeof this.props.postcode === 5 || this.props.postcode > 6) ? this.props.postcode : false } {(typeof this.props.city === "string" && this.props.city !== "") ? this.props.city : false }</p>
            </div>
        );
    }
}

class App extends React.Component {
    render(){
        return (
            <Address name="Patrik" lastname="Popek" street="Wilcza"
            housenumber="10" postcode="02-022" city="Warsaw" />
        )
    }
}


//Nie zmieniaj tego kodu poniżej!
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});

export {Address}