import React from 'react';

class AddUserInfor extends React.Component {
    state = {
        name: "John",
        age: 30,
        address: 'học react js từ đầu'
    };
    // handleClick = (event) => {
    //     console.log("random", Math.floor(Math.random() * 100) +1);
    //     this.setState({
    //         name: "bao hoc",
    //         age: Math.floor(Math.random() * 100) +1
    //     });
    //     // this.setState({age: Math.floor(Math.random() * 100) +1});
    // };

    // handleOnMoverOver(event){
    //     // console.log(event.pageX +' + '+ event.pageY);
    // }

    handleOnchangeInput =(event) => {
        this.setState({
            name: event.target.value
        });
    };

    handleOnchangeAge =(event) => {
        this.setState({
            age: event.target.value
        });
    };

    handleOnSubmit =(event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100)+1) + '-random',
            name: this.state.name,
            age: this.state.age,
        });
    };
    render() {
        return(
            <div>
                My name is {this.state.name} <br /> I am from {this.state.address} and {this.state.age} <br /> <br />
                {/* <button onClick={(event) => {this.handleClick(event)}}>click me</button><br /> <br /> */}
                {/* <button onMouseOver={this.handleOnMoverOver}>Hover me</button> */}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your Name</label><br /> <br />
                    <input 
                    type="text" 
                    value={this.state.name}
                    onChange={(event) => this.handleOnchangeInput(event)}
                    /><br /> <br />
                        <label>Your Age</label><br /> <br />
                    <input 
                    type="text" 
                    value={this.state.age}
                    onChange={(event) => this.handleOnchangeAge(event)}
                    /><br /> <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor