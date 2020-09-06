import React, {Component} from "react";
import './TodoList.css'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {
    static propTypes = {
        list:PropTypes.object.isRequired,
    }
    render() {
        const {todoList}= this.props.list
        let count = 0; //完成数量
        todoList.forEach(item => item.complete ? count++ : '')
        return (
            <div className='todoMain'>
                <div className="noComplete">
                    {
                        todoList.length ? <h2 className='title'>待完成({todoList.length-count})</h2> : null
                    }
                    <ul className="noCompleteList">
                        {
                            // eslint-disable-next-line array-callback-return
                            todoList.map((item, index) => {
                                if (!item.complete) {
                                    return <TodoItem index={index} key={index} todo={item}/>
                                }

                            })
                        }
                    </ul>
                </div>
                <div className="completeList">
                    {
                        todoList.length&&count ? <h2 className='title'>已完成({count})</h2> : null
                    }
                    <ul className="doneList">
                        {
                            // eslint-disable-next-line array-callback-return
                            todoList.map((item, index) => {
                                if (item.complete) {
                                    return <TodoItem index={index} key={index} todo={item}/>
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({list: state}),
)(TodoList)


