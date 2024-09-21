import React from "react";

export default class ControlledForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:""
        }
    }

    handleChange = (e)=>{
        this.setState({name:e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("name :",this.state.name);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name :</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <button type="submit">Submit</button>
                </form>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}