import React, { Component } from 'react';

class UserListView extends Component{

    render(){
        let user = this.props.userBox;
        
        return(
            <div className = "user-box-container">
               {user.map( (user) => {
                    <div>
                        <h6>{user.login}</h6>
                        <img src = {user.avatar_url} alt = "..."/>
                        <p>
                            followers : {user.followers_url.length}
                            following : {user.following_url.length}
                        </p>
                        <span>MORE</span> 
                        <span>X</span>  
                    </div>
                })}
            </div>
        )
    }
}

export default UserListView;