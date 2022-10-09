import React, { useState } from 'react';

// class AddUserInfor extends React.Component {
//     state = {
//         name: "",
//         age: '',
//         address: 'học react js từ đầu'
//     };
//     // handleClick = (event) => {
//     //     console.log("random", Math.floor(Math.random() * 100) +1);
//     //     this.setState({
//     //         name: "bao hoc",
//     //         age: Math.floor(Math.random() * 100) +1
//     //     });
//     //     // this.setState({age: Math.floor(Math.random() * 100) +1});
//     // };

//     // handleOnMoverOver(event){
//     //     // console.log(event.pageX +' + '+ event.pageY);
//     // }

//     handleOnchangeInput =(event) => {
//         this.setState({
//             name: event.target.value
//         });
//     };

//     handleOnchangeAge =(event) => {
//         this.setState({
//             age: event.target.value
//         });
//     };

//     handleOnSubmit =(event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100)+1) + '-random',
//             name: this.state.name,
//             age: this.state.age,
//         });
//     };
//     render() {
//         return(
//             <div>
//                 My name is {this.state.name} <br /> I am from {this.state.address} and {this.state.age} <br /> <br />
//                 {/* <button onClick={(event) => {this.handleClick(event)}}>click me</button><br /> <br /> */}
//                 {/* <button onMouseOver={this.handleOnMoverOver}>Hover me</button> */}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your Name</label><br /> <br />
//                     <input 
//                     type="text" 
//                     value={this.state.name}
//                     onChange={(event) => this.handleOnchangeInput(event)}
//                     /><br /> <br />
//                         <label>Your Age</label><br /> <br />
//                     <input 
//                     type="text" 
//                     value={this.state.age}
//                     onChange={(event) => this.handleOnchangeAge(event)}
//                     /><br /> <br />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfor = (props) => {
    // state = {
    //     name: "",
    //     age: '',
    //     address: 'học react js từ đầu'
    // };

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('học react js từ đầu');

    const handleOnchangeInput =(event) => {
       setName(event.target.value);
       
        // this.setState({
        //     name: event.target.value
        // });
    };

    const handleOnchangeAge =(event) => {
        setAge(event.target.value);
        // this.setState({
        //     age: event.target.value
        // });
    };

    const handleOnSubmit =(event) => {
        event.preventDefault();
        
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100)+1) + '-random',
            name: name,
            age: age,
        });
    };
    return(
            <div>
                My name is {name} <br /> I am from {address} and {age} <br /> <br />
                {/* <button onClick={(event) => {this.handleClick(event)}}>click me</button><br /> <br /> */}
                {/* <button onMouseOver={this.handleOnMoverOver}>Hover me</button> */}
                <form onSubmit={(event) => handleOnSubmit(event)}>
                    <label>Your Name</label><br /> <br />
                    <input 
                    type="text" 
                    value={name}
                    onChange={(event) => handleOnchangeInput(event)}
                    /><br /> <br />
                        <label>Your Age</label><br /> <br />
                    <input 
                    type="text" 
                    value={age}
                    onChange={(event) => handleOnchangeAge(event)}
                    /><br /> <br />
                    <button>Submit</button>
                </form>
            </div>
        )
};

export default AddUserInfor