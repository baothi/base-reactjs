import React from 'react';

class DisplayInfor extends React.Component {
    
    render() {
        // props => viết tắt properties
        
        // destructuring array
        const {listUsers} = this.props
        console.log(listUsers)
        return(
            <div>
                {listUsers.map((user) => { 
                  return (
                    <div key={user.id}>
                      <div>My name : {user.name}</div>
                      <div>My Age : {user.age}</div>
                    </div>
                    
                  )
                })}
                {/* <div>My name is {name}</div>
                <div>My age is {age}</div>
                <hr />
                 <div>My name is {name}</div>
                <div>My age is {age}</div>
                <hr />
                <div>My name is {name}</div>
                <div>My age is {age}</div> */}
            </div>
        )
    }
}

export default DisplayInfor