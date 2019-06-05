import exportRates from './LCLexportrates'
import React from 'react';
import ReactAutocomplete from 'react-autocomplete'

class LCLCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            polvalue: "",
            podvalue: "",
            value: "",
            rate: "",
            length: "120",
            width: "80",
            height: "",
            endMsg: "",
            volume: "",
        }
    }

    lengthHandle = (e) => {
        if (Number(e.target.value) > 450 ) {
            return this.setState({
                length: e.target.value,
                endMsg: "Długość jest powyżej 450cm, skontaktuj się z nami, aby sprawdzić możliwość wysyłki"
            })
        } else {
            this.setState({
                length: e.target.value,
                endMsg: ""
            })
        }
    }

    widthHandle = (e) => {
        console.log(e.target.value)
        if (Number(e.target.value) > 230 ) {
            return this.setState({
                width: e.target.value,
                endMsg: "Szerokość jest powyżej 230cm, skontaktuj się z nami, aby sprawdzić możliwość wysyłki"
            })
        } else {
            this.setState({
                width: e.target.value,
                endMsg: ""
            })
        }
    }

    heighthHandle = (e) => {
        if (Number(e.target.value) > 220 ) {
            return this.setState({
                height: e.target.value,
                endMsg: "Wysokość jest powyżej 220cm, skontaktuj się z nami, aby sprawdzić możliwość wysyłki"
            })
        } else {
            this.setState({
                height: e.target.value,
                endMsg: ""
            })
        }
    }

    volumeCounter = () => { 
        const volume = Number(this.state.length)*Number(this.state.width)*Number(this.state.height);
        this.setState({
            volume: volume
        })
    }
    

    render() {
        return (
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
                    onSelect={value => this.setState({ polvalue : value })}
                />
                <p>Port Docelowy</p>
                <ReactAutocomplete
                    items={exportRates.map((value) => {
                        return { id: value.Destination, label: value.Destination, country: value.Country, rate: value.Rate, minimum: value.Minimum, transit: value.Transit }
                    }
                    )}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                        <div
                            key={item.id + item.country}
                            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                        >
                            {item.label + " " + item.rate}
                        </div>
                    }
                    value={this.state.podvalue}
                    onChange={e => this.setState({ podvalue: e.target.value })}
                    onSelect={(value, item) => this.setState({ 
                        podvalue : value,
                        rate: item.rate
                    })}
                />
                <p>Waga</p>
                <input type="text" placeholder="waga" value={this.state.weight} onChange={this.weighthHandle}/>
                <p>Ilość</p>
                <input type="text" placeholder="ilość" value={this.state.pieces} onChange={this.piecesHandle}/>
                <p>Wymiary [cm]</p>
                <input type="text" placeholder="długość" value={this.state.lenghth} onChange={this.lengthHandle}/>x 
                <input type="text" placeholder="szerokość" value={this.state.width} onChange={this.widthHandle}/>x 
                <input type="text" placeholder="wysokość" value={this.state.height} onChange={this.heighthHandle}/>cm
                <p className="endMsg">{this.state.endMsg}</p>
                <p>{Number(this.state.length)*Number(this.state.width)*Number(this.state.height)/1000000}m<sup>3</sup> {this.state.rate}</p>
            </form>
        );
    }
}

export default LCLCalculator;
