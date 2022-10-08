import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "John",
        age: 30,
        address: 'học react js từ đầu'
    };
    handleClick = (event) => {
        console.log("random", Math.floor(Math.random() * 100) +1);
        this.setState({name: "bao hoc"});
         this.setState({age: Math.floor(Math.random() * 100) +1});
    };

    handleOnMoverOver(event){
        // console.log(event.pageX +' + '+ event.pageY);
    }

    // JSX
    render() {
        return(
            <div>
                My name is {this.state.name} <br /> I am from {this.state.address} and {this.state.age} <br /> <br />
                <button onClick={(event) => {this.handleClick(event)}}>click me</button><br /> <br />
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;