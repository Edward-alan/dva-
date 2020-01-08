// import React, { Component } from "react";
// import { Route, Switch } from "dva/router";

// export class RouterView extends Component {
//   render() {
//     return (
//       <Switch>
//         {this.props.routes.map(item => {
//           return (
//             <Route
//               path={item.path}
//               key={item.path}
//               render={props => {
//                 if (item.component) {
//                   return (
//                     <item.component {...props}>
//                       <RouterView routes={item.children} />
//                     </item.component>
//                   );
//                 } else {
//                   return <RouterView routes={item.children} />;
//                 }
//               }}
//             />
//           );
//         })}
//       </Switch>
//     );
//   }
// }

// export default RouterView;
