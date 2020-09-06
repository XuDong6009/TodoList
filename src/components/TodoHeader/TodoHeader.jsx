import React, {Component} from "react";
import {Input} from 'antd';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTodo} from '../../redux/actions'

class TodoHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    static propTypes = {
        list:PropTypes.object,
        addTodo: PropTypes.func.isRequired
    }
    //添加todo
    handleEnter = (e) => {
        const title = e.currentTarget.value.trim()
        if(!title) {
            this.$msg.error('输入不能为空')
            this.setState({value: ''})
            return false
        }else {
            this.props.addTodo({title, complete: false})
            this.setState({value: ''})
            setTimeout(() => {
                this.$msg.success('添加成功')
            },)
        }

    }

    handleChange = (e) => {
        this.setState({value: e.currentTarget.value});
    }

    render() {
        const {value} = this.state
        return (
            <div>
                <h2 style={{fontWeight: 700}}>添加任务</h2>
                <Input placeholder="输入待办事项, 按下Enter键添加"
                       value={value}
                       onChange={this.handleChange}
                       onPressEnter={this.handleEnter}
                />
            </div>
        );
    }
}

export default connect(
    state => ({list: state}),
    {addTodo}
)(TodoHeader)