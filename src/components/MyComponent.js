import React from "react";
import DisplayInfor from "./DisplayInfo";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "John Doe", age: 30 },
            { id: 2, name: "learn Doe", age: 31 },
            { id: 3, name: "react js Doe", age: 32 }
        ]
    }
    
    // JSX
    render() {
        // const myInfor = ['abc', 'def', 'ghi']
        // DRY : don't repeat yourself
        return(
            <div>    
                <br />
                <UserInfor />
                <br />
                <br />
                <DisplayInfor 
                  listUsers = {this.state.listUsers}
                />
                {/* <DisplayInfor name={"My name is Học lập trình reactjs"} age={30} myInfor={myInfor} /> */}
            </div>
        );
    }
}

export default MyComponent;