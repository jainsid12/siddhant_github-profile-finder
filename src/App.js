import SearchBox from './Components/SearchBox'
import UserListView from './Components/UserListView';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userList: []
    }
  }

  handleAdd = user =>{
    this.setState({userList: user});
  }

  render(){
    return (
      <div>
        <div className = "header">
         <h1>Github User profile finder</h1>
        </div>

        <div className = "contain">
          <div className= "search">
            <SearchBox onUserAdd = {this.handleAdd}/>
          </div>
          <div className = "userlist">
            <UserListView userBox = {this.state.userList}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
