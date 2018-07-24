import React,{Fragment} from 'react'

import TodoListDocss from '@/css/TodoListDo.scss'
import TodoListDone from './TodoListDone'
class TodoListDo extends React.Component {
    constructor () {
        
        super();
        this.state = {
            list: [
                
            ],
            done: ''
            
        }
    }

    delectList = (index) => {
        let list = this.state.list    //使用中间变量改变state，不建议直接改变state
        list.splice(index,1)
        this.setState({list})
    }

    boxClick = (e,index) => {
        e.target.checked = false
        let value = this.state.list[index]
        this.delectList(index)
        this.setState({
            done: value
        })
    }

    getDoneChangeValue = (value) => {
        this.setState({
            list: [...this.state.list,value]
        })
    }

    render() {
        return (
            <Fragment>
            <div className = { TodoListDocss.main}>
                <h2 className = { TodoListDocss.title } >
                正在进行
                <span>{this.state.list.length}</span>
                </h2>
                <ul> 
                    { this.state.list.map( (item,index) => {return <li key = {index}>
                        <input type = 'checkbox' defaultChecked = {false} onClick = { (e) => this.boxClick(e,index) } />
                        {[...item]}
                        <a href='javascript:void(0)' 
                        onClick = { () => this.delectList(index) }
                        >-</a>
                    </li>}) 
                    }  
                </ul>
            </div>
            <TodoListDone getDoneChangeValue = { (value) => this.getDoneChangeValue(value) } donevalue = {this.state.done} />
            </Fragment>
        )
    }

    componentWillReceiveProps(nextProps) {   //组件生命周期函数，componentWillReceiveProps（nextProps），
//组件接收到新的props触发这个函数，我们用它来给list添加值
        if (nextProps.value !== '' && nextProps.value !== '添加ToDo'){
            this.setState({
                list: [nextProps.value,...this.state.list]
            })
        }
    }

}

export default TodoListDo