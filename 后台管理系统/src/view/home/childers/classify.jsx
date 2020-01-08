import React, { Component } from 'react'
import TodoList from "@/models/todoList";
import { connect } from "react-redux"; //引入modux


@connect(state => {
    //es7方法修饰符调用
    return state.example;
})

export class Classify extends Component {
    render() {
        return (
            <div>
                <TodoList todos={this.props.todos} />
            </div>
        )
    }
}

export default Classify
