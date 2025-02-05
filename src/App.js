// // // // // import logo from './logo.svg';
// // // // import './App.css';
// // // // import React from "react";

// // // // function App() {
// // // //   let username = "Shiva";
// // // //   return (
// // // //     <div>
// // // //       <h1>company</h1>
// // // //       <p>para</p>
// // // //       {username}
// // // //       {100*100}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;


// // // // import React from "react";

// // // // class App extends React.Component{
// // // //   render(){
// // // //     return(
// // // //       <div>
// // // //         <h1>Class Component</h1>
// // // //       </div>
// // // //     )
// // // //   }
// // // // }

// // // // export default App;



// // // import React from "react";
// // // import Navbar from "./components/navbar";
// // // import Main from "./components/main";
// // // import Sidebar1 from "./components/sidebar1";
// // // import Sidebar2 from "./components/sidebar2";
// // // import Footer from "./components/footer";


// // // class App extends React.Component{
// // //   render(){
// // //     return(
// // //      <div className="App">
// // //       <Navbar/>
// // //       <Main/>
// // //       <div className="side">
// // //         <Sidebar1/>
// // //         <Sidebar2/>
// // //       </div>
// // //       <Footer/>

// // //      </div>
   
// // //   )
// // //   }
// // // };

// // // export default App;




// // // props


// // import React, { Component } from 'react'
// // import CBCPropsEx1 from './propsexample/CBCPropsEx1'
// // import FBCPropEx1 from './propsexample/FBCPropex1'

// // class App extends Component {

// //   render() {
// //     return (
// //       // <div>App
// //       //   <CBCPropsEx1 
// //       //   username="Shiva"
// //       //   age={19}
// //       //   hobbies={["playing", "Eating", "sleeping"]}
// //       //   address={{city:"kamareddy"}}
// //       //   isMarried={false}
// //       //   sendFun={function(){alert("Hi Shiva")}}
// //       //   />
// //       // </div>
// //       <div>
// //         <FBCPropEx1
// //         username = "Shiva"
// //         IsLoggedIn={true}
// //         Profile={["instagram","snapchat","facebook","x"]}/>
// //       </div>
// //     )
// //   }
// // }


// // export default App;





// import React, { Component } from 'react'
// import PropsChildrenex from './propsexample/PropsChildrenex'
// import SubChildrenProps from './propsexample/SubChildrenProps'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <PropsChildrenex username="Shiva" company="Google">
//         <h1>This data is passing as a props to child components</h1>
//         <SubChildrenProps></SubChildrenProps>
//         </PropsChildrenex>
        
//       </div>
//     )
//   }
// }
//  export default App;


import React, { Component } from 'react'
import Child1 from './propsexample/Child1'
import Child2 from './propsexample/Child2'
import Child3 from './propsexample/Child3'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <hr>
        </hr>
        <Child1 university/>
        <Child2/>
        <Child3/>
      </div>
    )
  }
}
