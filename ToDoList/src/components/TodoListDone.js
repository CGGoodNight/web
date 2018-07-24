import React from 'react'

import TodoListDonecss from '@/css/TodoListDo.scss'

class TodoListDone extends React.Component {
    constructor () {
        super();
        this.state = {
            list: [
                
            ]
        }
    }

    delectListDone = (index) => {
        let list = this.state.list    //使用中间变量改变state，不建议直接改变state
        list.splice(index,1)
        this.setState({list})
    }

    boxClickDoneChangeDo = (e,index) => {
        e.target.checked = true
        var dele = this.state.list[index]
        this.delectListDone(index)
        // this.props.getDoneChangeValue(dele)
        
    }

    render() {
        return (
            <div className = { TodoListDonecss.main}>
                <h2 className = { TodoListDonecss.title } >
                正在进行
                <span>{this.state.list.length}</span>
                </h2>
                <ul> 
                    { this.state.list.map( (item,index) => {return <li key = {index} className = { TodoListDonecss.todoListDone } >
                        <input type = 'checkbox' defaultChecked='checked' onClick = { (e) => this.boxClickDoneChangeDo(e,index) } />
                        {[...item]}
                        <a href='javascript:void(0)' 
                        onClick = { () => this.delectListDone(index) }
                        >-</a>
                    </li>}) 
                    }  
                </ul>
            </div>
        );
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.donevalue !== '')
        {
            this.setState({
                list: [...this.state.list,nextProps.donevalue]
            })
        }
    }
}

export default TodoListDone