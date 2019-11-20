import React from 'react';
import Task from './Task';

export class TasksContainer extends React.Component {
    
    render() {
        console.log('selected', this.props.selectedCategory)
        const filteredTasks = (this.props.selectedCategory === 'All')
            ? this.props.tasks
            : this.props.tasks.filter(task => {
                return task.category === this.props.selectedCategory
            })
        const mappedTasks = filteredTasks.map(task => <Task text={task.text} label={task.category}/>)
        console.log('mapped', mappedTasks)
        return (
            <div className="tasks">
            <h5>Tasks</h5>
            <div>
                {mappedTasks}
            </div>
            </div>
        );
    }
}