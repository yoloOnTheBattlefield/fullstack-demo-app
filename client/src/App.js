import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import faker from 'faker'
import logo from './logo.svg';
import './App.css';
import { getTodos, addTodo } from './store/todos'
// import { GET_TODOS} from './index'

class App extends React.Component {
  state = {
    title: faker.internet.userName(),
    completed: false
  };

  handleClick = () => {
    this.props.dispatch(addTodo(this.state))
    this.setState({
      title: faker.internet.userName()
    })
  }

  async componentDidMount(){
    this.props.dispatch(getTodos());
  }
  render () {
    console.log(this.props.todos.data)
    return (
      <div className="App">
        <button onClick={this.handleClick} >ClickMe to add data to the DB</button>
        {
          this.props.todos.data.map(item => <li>{item.title}</li>)
        }
        
      </div>
    );
  }
}

const mapStateToProp = ({ todos }) => ({
  todos
});

export default connect(mapStateToProp)(App);
