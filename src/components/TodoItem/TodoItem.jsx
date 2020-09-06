import React, {Component} from "react";
import {Checkbox, Popconfirm, Modal, Input} from "antd";
import {connect} from "react-redux";
import {updateCheck, updateText,deleteTodo} from '../../redux/actions'
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import './TodoItem.css'
import PropTypes from "prop-types";

class TodoItem extends Component {
    state = {
        visible: false,
        text:''
    }
    static propTypes = {
        list:PropTypes.object,
        index: PropTypes.number.isRequired,
        todo: PropTypes.object.isRequired,
        updateCheck: PropTypes.func.isRequired,
        updateText: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    }

    handleCheck = () => {
        const index = this.props.index;
        this.props.updateCheck(index)
    }

    handleDelete = () => {
        const index = this.props.index;
        this.props.deleteTodo(index)
        setTimeout(() => {
            this.$msg.success('删除成功')
        }, 200)
    }

    handleChange = (e) => {
        this.setState({text: e.currentTarget.value});
    }

    showModal = () => {
        this.setState({text:'',visible:true})
    };

    handleOk = () => {
        const {text} = this.state
        const {index} = this.props
        this.props.updateText({text,index})
        this.setState({
            visible: false,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const {todo, index} = this.props
        return (
            <li key={index}>
                <Checkbox
                    onChange={this.handleCheck}
                    checked={todo.complete}>{todo.title}
                </Checkbox>

                <span onClick={this.showModal}><EditOutlined/></span>

                <Popconfirm
                    title="Are you sure delete this task?"
                    onConfirm={this.handleDelete}
                    okText="Yes"
                    cancelText="No"
                >
                    <span><DeleteOutlined/></span>
                </Popconfirm>

                <Modal
                    title="任务修改"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Input placeholder="请输入任务名称"
                           value={this.state.text}
                           autoFocus={true}
                           onChange={this.handleChange}
                           onPressEnter={this.handleOk}
                    />
                </Modal>
            </li>
        );
    }
}

export default connect(
    state => ({list: state}),
    {updateCheck, updateText,deleteTodo}
)(TodoItem)
