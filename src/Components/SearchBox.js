import React, { Component } from 'react';
import axios from 'axios';
import SearchResult from './SearchResult';
import './SearchBox.css'

class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            query:"",
            searchData: [],
            userList:[]
        }
    }

    handleChange = async (e) => {
        this.setState ({query: e.target.value});
        try{
            await axios.get(`https://api.github.com/search/users?q=${e.target.value}`)
                .then(res => this.setState({searchData: res.data.items}))
        } catch (error){
            if(error.response) console.log(error.response.data);
            else console.log(error.request);
        }
        if(this.state.query == "")
            this.setState({searchData: []});
    }

    // handle bug in userList update
    handleClick = user =>{
        this.setState({userList: [...this.state.userList, user]});
        this.props.onUserAdd(this.state.userList);
    }

    render(){
        
        const {query, searchData} = this.state;
        const searchResult = searchData.map( user =>
            <div onClick = {this.handleClick.bind(this, user)}>
                <SearchResult
                    id = {user.id}
                    userName = {user.login}
                    followers =  {user.followers_url.length}
                    following = {user.following_url.length}
                    imgSrc = {user.avatar_url}
                    user = {user}
                />
            </div>
        );
        // console.log(searchData);
        return(
            <div className = "search-box">
                <form>
                    <label>
                        Search   
                        <input 
                            type ="text"
                            value = {query}
                            placeholder = "Search github user"
                            onChange = {this.handleChange}
                        />
                    </label>
                </form>
                {searchResult}
            </div>
        )
    }
}

export default SearchBox;