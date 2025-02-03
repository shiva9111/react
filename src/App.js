// // import logo from './logo.svg';
// import './App.css';
// import React from "react";

// function App() {
//   let username = "Shiva";
//   return (
//     <div>
//       <h1>company</h1>
//       <p>para</p>
//       {username}
//       {100*100}
//     </div>
//   );
// }

// export default App;


// import React from "react";

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Class Component</h1>
//       </div>
//     )
//   }
// }

// export default App;



import React from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Sidebar1 from "./components/sidebar1";
import Sidebar2 from "./components/sidebar2";
import Footer from "./components/footer";


class App extends React.Component{
  render(){
    return(
     <div className="App">
      <Navbar/>
      <Main/>
      <div className="side">
        <Sidebar1/>
        <Sidebar2/>
      </div>
      <Footer/>

     </div>
   
  )
  }
};

export default App;










