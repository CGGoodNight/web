import React, {Fragment} from 'react'

import TodoListHeader from './TodoListHeader'
import TodoListDo from './TodoListDo'

class TodoList extends React.Component {
    constructor () {
        super();
        this.state = {
            headerValue: '222',
            done: '66'
        }
    }

    getHeaderValue = (value) => {
        this.setState({
            headerValue: value
        })
    }

    render() {
        return (
            <Fragment>
                <TodoListHeader getValue = { (value) => {this.getHeaderValue(value)} } />
                <TodoListDo 
                value = {this.state.headerValue}    
                 />
            </Fragment>
        );
    }
}



export default TodoList