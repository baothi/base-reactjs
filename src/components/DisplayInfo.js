import React from 'react';

class DisplayInfor extends React.Component {
  
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser
    })
  };
    
  render() {
    // props => viết tắt properties
    
    // destructuring array
    const {listUsers} = this.props
    console.log(listUsers)
    
    return(
        <div>
          <div>
            <span onClick={() => {this.handleShowHide()}}>
              {this.state.isShowListUser === true ? "Hide List User" : "Show List User" }
            </span>
          </div>
          {this.state.isShowListUser && 
            <div>
              {listUsers.map((user,index) => {
                return (
                  <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name : {user.name}</div>
                  <div>My Age : {user.age}</div>
                  </div>
                        
                )


                // if(+user.age > 18){ 
                //     return (
                //         <div key={user.id} className="green">
                //         <div>My name : {user.name}</div>
                //         <div>My Age : {user.age}</div>
                //         </div>
                        
                //     )
                // }else{
                //     return (
                //         <div key={user.id} className="red">
                //         <div>My name : {user.name}</div>
                //         <div>My Age : {user.age}</div>
                //         </div>
                    
                //     )
                // }
              })}
            </div>
          }
        </div>
    )
  }
}

export default DisplayInfor