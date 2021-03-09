import React from 'react';
import '../App.css'

class Counter extends React.Component{
    constructor(){
        super()
        this.state ={
            Counter: 0
        }
    }
Increament = () => {
this.setState({
    Counter: this.state.Counter+1
})
}

Decreament = () => {
    this.setState({
        Counter: this.state.Counter-1
    })
}
    render(){
        return(
            <div>
                <br />
                <h1 className="head">✔️_➕ CounTer_AppliCation...! ➖_❌ </h1>
        <h3 className="CV" style={{textAlign:"center"}}>{this.state.Counter}</h3>
                <button className="button1" onClick={this.Increament}>+InCreamenT+</button>
                <button className="button2" onClick={this.Decreament}>-DeCreamenT-</button>
            </div>
        )
    }
}

export default Counter;