import { Component } from "react";

export default class extends Component {

    state = {
        numero: this.props.valorInicial ?? 0
    }

    inc(){
        
    }

    render() {
        return(
            <div>
                <h1>Contador (usando classe)</h1>
                <h2>{this.props.valorInicial}</h2>
                <h2>{this.state.numero}</h2>
            </div>
        )
    }
}