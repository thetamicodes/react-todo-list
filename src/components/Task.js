import React from 'react';


export default class Task extends React.Component {
    render() {
        return (
            <div className="task">
                    <div className="label">{this.props.label}</div>
                    <div className="text">{this.props.text}</div>
            </div>
        )
    }
}