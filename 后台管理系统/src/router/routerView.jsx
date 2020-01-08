import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

function routerView(props){
    let {routes} = props;
    let routeArr = routes.filter(item => !item.redirect);
    let redirectArr = routes.filter(item => item.redirect);
    return <Switch>
        {/* {routeArr.map((item,index)=><Route key={index} path={item.path} component={item.component}/>)} */}

        {routeArr.map((item,index)=><Route key={index} render = {(props)=>{
            return <item.component routes = {item.children} {...props}></item.component>
        }} path={item.path}/>)}

        {redirectArr.map((item,index)=><Redirect key={index} from={item.path} to={item.redirect}/>)}
    </Switch>
}

export default routerView
