import React, { Component } from 'react'
import TabBar from '@/components/tabBar/tabBar'
import './css/index.css'
import TodoList from "./component/todoList";
import { connect } from 'dva'

@connect(state => {
    //es7方法修饰符调用
    return state.questions;
})
class RoleManagement extends Component {
    state = {
        identity: '',
        intId: [],
        active: 0
    }

    IDentityss = (id) => {
        this.props.dispatch({
            type: 'questions/getIDentity', payload: {
                identity_id: id
            }
        }).then(res => {
            console.log(res.data)
        })
       
    }
    
    check_title_index = (index) => {
        return index === this.state.active ? "activ" : ""
    }
    componentDidMount() {
        this.props.dispatch({ type: 'questions/getJurisdiction' }).then(res => {
            this.setState({
                identity: res.data
            })
        })
    }
    render() {
        const { identity, intId } = this.state
        return (
            <div className="consantes">
                <div className="role-list">
                    {identity && identity.map((item, index) => <ul key={index}>
                        <li
                            onClick={() => { this.setState({ active: index }) }}
                            className={this.check_title_index(index)}
                        >
                            <div onClick={() => {
                                this.IDentityss(item.identity_id)
                            }}>
                                <h3>{item.identity_text}</h3>
                                <p>{item.identity_id}</p>
                            </div>
                            <div className="tool">
                                <a href="javascript:;">删除</a>
                            </div>
                        </li>


                    </ul>)}
                    <ul>
                        <TodoList />
                    </ul>

                </div>
                <div className="role-right">

                    <TabBar msg={this.state.intId} />

                </div>
            </div>
        )
    }
}
export default RoleManagement