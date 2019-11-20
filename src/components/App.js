import React from 'react';
import '../App.css';
import { CATEGORIES } from '../data';
import { TasksContainer } from './TasksContainer';
import { CategoriesContainer } from './CategoriesContainer';

class App extends React.Component {

  state = {
    selectedCategory: 'All',
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ]
  }

  changeSelectedCategory = (category) => {
    this.setState({
      selectedCategory: category
    })
  }



  render() {
    console.log("filtered tasks:", this.filteredTasks)

    return (
      <div className="App">
        <h2>My tasks</h2>
          <CategoriesContainer categories={CATEGORIES} changeSelectedCategory={this.changeSelectedCategory} selectedCategory={this.state.selectedCategory} />
          <TasksContainer tasks={this.state.tasks} selectedCategory={this.state.selectedCategory} />
      </div>
    );
  }
}


export default App;
