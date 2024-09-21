import React from "react";

export default class CounterApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            name:this.props.name
        }
    }
    handleIncrement=()=> {
        this.setState({count: this.state.count+this.props.data});
    }
    handleDecrement=()=>{
        this.setState({count: this.state.count-this.props.data});
    }
    render(){
        return(
            <div>
                <h1>Counter App {this.state.name}</h1>
                <h3>Count : {this.state.count}</h3>
                <button onClick={this.handleIncrement}>+ {this.props.data}</button>
                <button onClick={this.handleDecrement}>- {this.props.data}</button>
            </div>
        )
    }
}