import React, { Component } from 'react';
import './SearchResult.css'
class SearchResult extends Component{
    
    render(){
        let {id, userName, followers, following, imgSrc, user} = this.props;
        return(
            <div className="container"  key = {id}>
                <div className="user-info">
                    <h6>{userName}</h6>
                    <p>followers: {followers}</p>
                    <p>following: {following}</p>    
                </div>
                <div className = "img-container">
                    <img src = {imgSrc} alt = "loading..."/>
                </div>
            </div>
        )
    }
}

export default SearchResult;