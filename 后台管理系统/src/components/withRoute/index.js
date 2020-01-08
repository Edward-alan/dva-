import React, { Component } from "./node_modules/react";
import { routesJSON } from "@/router/routerSting";
import { withRouter } from "dva/router";

const WithRoute = WraooedComponent => {
  @withRouter
  class MatchRoute extends Component {
      get matchRoute (){
          const pathname = this.props.location.pathname
          return route
      } 
    render() {
        const route = this.matchRoute;
      return(
          <WraooedComponent {...this,props} route = {route}/>
      )
    }
  }
  return MatchRoute
};

export default WithRoute;
