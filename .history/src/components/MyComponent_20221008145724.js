import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "John",
        age: 30,
        address: 'học react js từ đầu'
    };
    handleClick(event){
        console.log(event.target);
    };

    // JSX
    render() {
        return(
            <div>
                My name is {this.state.name} <br /> I am from {this.state.address} and {this.state.age} <br /> <br />
                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}

export default MyComponent;