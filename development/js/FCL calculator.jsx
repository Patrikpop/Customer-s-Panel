import exportRates from './LCLexportrates'
import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

class FCLCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            polvalue: "",
            podvalue: "",
            value: "",
            rate: "",
            length: "",
            width: "",
            height: "",
            endMsg: "",
            volume: "",
            pieces: "",
            currency: "",
            eurvalue: "",
            usdvalue: ""
        }
    }

    lengthHandle = (e) => {
        if (Number(e.target.value) > 450) {
            return this.setState({
                length: e.target.value,
                endMsg: "Długość jest powyżej 450cm, skontaktuj się z nami, aby sprawdzić możliwość wysyłki",
                volume: Number(this.state.pieces) * Number(this.state.length) * Number(this.state.width) * Number(this.state.height) / 100000
            })
        } else {
            this.setState({
                length: e.target.value,
                endMsg: "",
                volume: Number(this.state.pieces) * Number(this.state.length) * Number(this.state.width) * Number(this.state.height) / 100000
            })
        }
    }

    widthHandle = (e) => {
        if (Number(e.target.value) > 230) {
            return this.setState({
                width: e.target.value,
                endMsg: "Szerokość jest powyżej 230cm, skontaktuj się z nami, aby sprawdzić możliwość wysyłki",
                volume: Number(this.state.pieces) * Number(this.state.length) * Number(this.state.width) * Number(this.state.height) / 100000
            })
        } else {
            this.setState({
                width: e.target.value,
                endMsg: "",
                volume: Number(this.state.pieces) * Number(this.state.length) * Number(this.state.width) * Number(this.state.height) / 100000
            })
        }
    }

    heighthHandle = (e) => {
        if (Number(e.target.value) > 220) {
            return this.setState({
                volume: Number(this.state.pieces) * Number(this.state.length) * Number(this.state.width) * Number(this.state.height) / 100000,
                height: e.target.value,
                endMsg: "Wysokość jest powyżej 220cm, skontaktuj się z nami, aby sprawdzić możliwość wysyłki"
            })
        } else {
            this.setState({
                height: e.target.value,
                endMsg: "",
                volume: Number(this.state.pieces) * Number(this.state.length) * Number(this.state.width) * Number(this.state.height) / 100000
            })
        }
    }

    piecesHandle = (e) => {
        this.setState({
            pieces: e.target.value,
            volume: Number(this.state.pieces) * Number(this.state.length) * Number(this.state.width) * Number(this.state.height) / 100000
        })
    }



    priceCounter = () => {
        if (this.state.rate === "" || this.state.volume === "" || this.state.length === "" || this.state.width === "" || this.state.height === "") {
            return false
        } else if (this.state.currency === "USD") {
            let doc = 20;
            let vgm = 30;
            let customs = 60;
            let result = this.state.rate * this.state.volume + (doc + vgm + customs);
            let profit = 0;
            let checkProfit = result * (3 / 10);
            if (checkProfit < 100) {
                profit = 100;
            } else {
                profit = 3 / 10;
            }
            let currencySell = (this.state.rate * this.state.volume + (doc + vgm + customs)) + profit;
            let plnSell = currencySell * this.state.usdvalue;
            return <div className="sell"><span className="currency-sell">{currencySell.toFixed(2)} {this.state.currency}
            </span>
                <span className="pln-sell">~{plnSell.toFixed(2)} PLN</span></div>
        } else if (this.state.currency === "EUR") {
            let doc = 20;
            let vgm = 25;
            let customs = 55;
            let result = this.state.rate * this.state.volume + (doc + vgm + customs);
            let profit = 0;
            let checkProfit = result * (3 / 10);
            if (checkProfit < 100) {
                profit = 100;
            } else {
                profit = 3 / 10;
            }
            let currencySell = (this.state.rate * this.state.volume + (doc + vgm + customs)) + profit;
            let plnSell = currencySell * this.state.eurvalue;
            return <div className="sell"><span className="currency-sell">{currencySell.toFixed(2)} {this.state.currency}
            </span>
                <span className="pln-sell">~{plnSell.toFixed(2)} PLN</span></div>
        }
    }

    componentDidMount() {
        let url = `http://api.nbp.pl/api/exchangerates/tables/A/today/`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    usdvalue: data[0].rates[1].mid,
                    eurvalue: data[0].rates[7].mid
                })
            });

    }

    render() {
        return (
        <div className="container--flex">
            <div className="left-lcl-calc">
            <h1>Kalkulator FCL</h1>
            <form>
                <p>Miejsce załadunku</p>
                <ReactAutocomplete
                    items={[
                        { id: 'Warszawa', label: 'Warszawa' },
                        { id: 'Gdynia', label: 'Gdynia' },
                        { id: 'Poznań', label: 'Poznań' },
                        { id: 'Kraków', label: 'Kraków' },
                        { id: 'Wrocław', label: 'Wrocław' },
                    ]}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                        <div
                            key={item.id + item.country}
                            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                        >
                            {item.label}
                        </div>
                    }
                    value={this.state.polvalue}
                    onChange={e => this.setState({ polvalue: e.target.value })}
                    onSelect={value => this.setState({ polvalue: value })}
                />
                <p>Port Docelowy</p>
                <ReactAutocomplete
                    items={exportRates.map((value) => {
                        return { id: value.Destination, label: value.Destination, country: value.Country, rate: value.Rate, minimum: value.Minimum, transit: value.Transit, currency: value.Currency }
                    }
                    )}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                        <div
                            key={item.id + item.country}
                            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                        >
                            {item.label}
                        </div>
                    }
                    value={this.state.podvalue}
                    onChange={e => this.setState({ podvalue: e.target.value })}
                    onSelect={(value, item) => this.setState({
                        podvalue: value,
                        rate: item.rate,
                        currency: item.currency
                    })}
                />
                <p>Łączna waga</p>
                <input type="text" placeholder="kg" value={this.state.weight} onChange={this.weighthHandle} />
                <p>Ilość</p>
                <input type="text" placeholder="" value={this.state.pieces} onChange={this.piecesHandle} />
                <p>Wymiary [cm]</p>
                <input type="text" placeholder="długość" value={this.state.lenghth} onChange={this.lengthHandle} />x
                <input type="text" placeholder="szerokość" value={this.state.width} onChange={this.widthHandle} />x
                <input type="text" placeholder="wysokość" value={this.state.height} onChange={this.heighthHandle} />cm
                <p className="endMsg">{this.state.endMsg}</p>
                <p className="result-volume">Łączna objętość wynosi {this.state.volume}m<sup>3</sup></p>
                <div className="sell-rate"><span>Fracht wynosi: </span>{this.priceCounter()}</div>
            </form>
            </div>
            <div className="right-lcl-calc">
            <object type="image/svg+xml" data="./images/container.svg" className="container-svg" />
            </div>
        </div>
       );
    }
}
    
export default FCLCalculator;
