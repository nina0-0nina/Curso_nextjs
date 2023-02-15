import { Component } from "react";

export default class extends Component {

    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }

    inc(){
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    constructor(props){
        super(props)
        this.inc = this.inc.bind(this)
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    incDois(){
        this.setState({
            numero: this.state.numero + 2
        })
    }

    alterarPasso(){
        this.setState({passo: +ev.target.value})
    }

    renderForm(){
        return(
            <>
                <input type="number" min={1} max={1000} 
                    value={this.state.passo}
                    onChange={this.alterarPasso}/>
                <button onClick={() => this.incDois()}>+2</button>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </>
        )
    }

    render() {
        return(
            <div style = {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>

                <h1>Contador (usando classe)</h1>
                <h2 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50px',
                    width: '50px',
                    borderRadius: '25x',
                    backgroundColor: '#222',
                    color: '#fff',
                    fontSize: '2rem',
                    margin: '20px'
                }}>{this.state.numero}</h2>

                <div>
                    {this.renderForm()}
                </div>

            </div>
        )
    }
}