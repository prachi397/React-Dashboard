import React from "react";

export default class UncontrolledForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("name :",e.target.name.value);
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
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}