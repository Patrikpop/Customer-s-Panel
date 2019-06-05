import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <footer className="footer-bottom">
            <div className="container">
                <div className="footer-bottom__left">
                    Stworzone przez Patrik Popek
                </div>
                <div className="footer-bottom__right">
                    Copyright © 2019 Patrik Popek Wszystkie prawa zastrzeżone.
                </div>
            </div>
        </footer>
        );
    }
}
 
export default Footer;