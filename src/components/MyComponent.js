import React, { useState } from "react";
import DisplayInfor from "./DisplayInfo";
import AddUserInfor from "./AddUserInfor";

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "John Doe", age: "16" },
//             { id: 2, name: "learn Doe", age: "26" },
//             { id: 3, name: "react js Doe", age: "69" }
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         console.log(userObj);
//         //cách 1
//         this.setState({ 
//             listUsers: [userObj, ...this.state.listUsers,]
//          });
        
        
//         // cách 2 đây là cách không tốt nên dùng cách 1
//         // let ListUsersClone = this.state.listUsers;
//         // ListUsersClone.unshift(userObj);
//         // this.setState({ listUsers: ListUsersClone });
//     };

//     handleDeleteUser = (userId) => {
//         // let ListUsersClone = [...this.state.listUsers]
//         let ListUsersClone = this.state.listUsers;
//         ListUsersClone = ListUsersClone.filter(item => item.id !== userId);
//         this.setState({ listUsers: ListUsersClone });
//     };
    
//     // JSX
//     render() {
//         // const myInfor = ['abc', 'def', 'ghi']
//         // DRY : don't repeat yourself
//         return(
//             <>
//                 <div className="a">    
//                     <br />
//                     <AddUserInfor 
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br />
//                     <br />
//                     <DisplayInfor 
//                     listUsers = {this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                     />
//                     {/* <DisplayInfor name={"My name is Học lập trình reactjs"} age={30} myInfor={myInfor} /> */}
//                 </div>
//                 <div className="b"></div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "John Doe", age: "16" },
            { id: 2, name: "learn Doe", age: "26" },
            { id: 3, name: "react js Doe", age: "69" }
        ]
    );
    
    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers,])
        //cách 1
        // this.setState({ 
        //     listUsers: [userObj, ...this.state.listUsers,]
        //  });
        
        
        // cách 2 đây là cách không tốt nên dùng cách 1
        // let ListUsersClone = this.state.listUsers;
        // ListUsersClone.unshift(userObj);
        // this.setState({ listUsers: ListUsersClone });
    };

    const handleDeleteUser = (userId) => {
        // let ListUsersClone = [...this.state.listUsers]
        let ListUsersClone = listUsers;
        ListUsersClone = ListUsersClone.filter(item => item.id !== userId);
        setListUsers(ListUsersClone);
        // this.setState({ listUsers: ListUsersClone });
    };
    

    return(
            <>
                <div className="a">    
                    <br />
                    <AddUserInfor 
                        handleAddNewUser={handleAddNewUser}
                    />
                    <br />
                    <br />
                    <DisplayInfor 
                    listUsers = {listUsers}
                    handleDeleteUser={handleDeleteUser}
                    />
                    {/* <DisplayInfor name={"My name is Học lập trình reactjs"} age={30} myInfor={myInfor} /> */}
                </div>
                <div className="b"></div>
            </>
        );
};


export default MyComponent;