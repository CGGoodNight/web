import React from 'react'

import TodoListHcss from '@/css/TodoListHeader.scss'

class TodoListHeader extends React.Component {
    constructor () {
        super()
        this.state = {
            inputValue: '添加ToDo'
        }
    }

    

    inputOnfocus = (e) => {         //获得焦点时，清空input中的字符串
        if(e.target.value === '添加ToDo') {
            e.target.value = ''
            this.setState({
                inputValue: e.target.value
            })
        }
    }

    inputOnblur = (e) => {       //失去焦点判断是否为空字符串
        if(e.target.value === '') {
            e.target.value = '添加ToDo'
            this.setState({
                inputValue: e.target.value
            })
        }
    }

    inputOnchange = (e) => {        //value值改变是触发事件，
        this.setState({
            inputValue: e.target.value
        })
    }

    btnClick = () => {
        // 将value值传给父元素,调用父组件传过来的方法然后调用，父组件接受
        // this.props.getValue(this.state.inputValue)
        this.props.getValue(this.state.inputValue)  //调用从父组件调用过来的函数进行传值

        this.setState({
            inputValue: '添加ToDo'
        },() => {
            document.getElementsByTagName('input')[0].value = this.state.inputValue
        })  
    }

    inputKeydown = (e) => {
        if (e.keyCode === 13) {
            this.btnClick()
        }
        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <div className={TodoListHcss.header}>
                <div className={TodoListHcss.w}>
                    <label htmlFor='title' className={TodoListHcss.label}>ToDoList</label>
                    <button 
                    className={TodoListHcss.btn}
                    onClick = { () => this.btnClick() }
                    >+</button>

                    <input 
                    className={TodoListHcss.input} 
                    name='title' 
                    id='title'
                    defaultValue = {this.state.inputValue}    //value与state上的值绑定
                    onFocus={ e => this.inputOnfocus(e) }
                    onBlur={ e => this.inputOnblur(e) }
                    onChange = { e => this.inputOnchange(e) }
                    onKeyDown = { e => this.inputKeydown(e) }
                    />
                    
                </div>
            </div>
        );
    }
}

export default TodoListHeader