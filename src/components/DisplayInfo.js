import React, { useState } from 'react';
import './DisplayInfor.scss'
import logo from './../logo.svg'

// class DisplayInfor extends React.Component {
//   // constructor(props) {
//   //   console.log(">>> call constructor : 1")
//   //   super(props);
//   //   this.state = {
//   //     isShowListUser: true,
//   //   };
//   // }

//   // componentDidMount() {
//   //   console.log('>>> call me component Did Mount');
//   //   setTimeout(() => {
//   //     document.title = "học react js"
//   //   }, 3000);
//   // }
  
//   // componentDidUpdate(prevProps, prevState, snapshot) {
//   //   console.log('>>> call me component Did Update', prevProps, prevState, snapshot);
//   //   if(this.props.listUsers !== prevProps.listUsers){
//   //     if(this.props.listUsers.length === 5){
//   //       alert('you got 5 users');
//   //     }
//   //   }
//   // }

//   // handleShowHide = () => {
//   //   this.setState({
//   //     isShowListUser: !this.state.isShowListUser
//   //   })
//   // };
    
//   render() {
//     // props => viết tắt properties
//     console.log('>>>> call me render: ');
//     // destructuring array
//     const {listUsers} = this.props
//     // console.log(listUsers)
    
//     return(
//         <div className='display-infor-container'>
//           {/* <img src={logo} className="App-logo" alt="logo" />
//           <div>
//             <span onClick={() => {this.handleShowHide()}}>
//               {this.state.isShowListUser === true ? "Hide List User" : "Show List User" }
//             </span>
//           </div> */}
//           {/* {this.state.isShowListUser &&  */}
//           {true && 
//             <div>
//               {listUsers.map((user,index) => {
//                 return (
//                   <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name : {user.name}</div>
//                   <div>My Age : {user.age}</div>
//                   <div>
//                     <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                   </div>
//                   <hr/>
//                   </div>
//                 )
//               })}
//             </div>
//           }
//         </div>
//     )
//   }
// }

const DisplayInfor = (props) => {
  const {listUsers} = props;
  
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  // useState =(event) => {}
  
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  }


  return(
    <div className='display-infor-container'>
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide List Users" : "Show List Users"}
          </span>
      </div>
      {isShowHideListUser && 
        <div>
          {listUsers.map((user,index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
              <div>My name : {user.name}</div>
              <div>My Age : {user.age}</div>
              <div>
                <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
              </div>
              <hr/>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
  
};

export default DisplayInfor