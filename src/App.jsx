// // import React from 'react';
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Navbar from './Navbar';
// // import Dashbord from './Dashbord';
// // import Classroom from './Classroom';
// // import Store from './Store';
// // import Calender from './Calender';
// // import Assessment from './Assessment';
// // import Blog from './Blog';
// // import PageNotFound from "./pages/PageNotFound";
// // import Profile from './Profile';
// // import MyAccount from './MyAccount';
// // import MySettings from './MySettings';

// // const App = () => {
// //   return (
// //     <BrowserRouter>
// //         <Navbar/>
// //         <Routes>
// // <Route path='/' element={<Dashbord/>}/>
// //         <Route path='/classroom' element={<Classroom/>}/>
// //         <Route path='/assessment' element={<Assessment/>}/>
// //         <Route path='/store' element={<Store/>}/>
// //         <Route path='/calender' element={<Calender/>}/>
// //         <Route path='/news' element={<News/>} />
// //         <Route path='/blog' element={<Blog/>} />
// //         <Route path='*' element={<PageNotFound/>}/>
// //         <Route path='/profile' element={<Profile/>} />
// //         <Route path='/profile/myaccount' element={<MyAccount/>} />
// //         <Route path='/profile/mysettings' element={<MySettings/>} />
// //         </Route>
// //         </Routes>
// //     </BrowserRouter>
// //   )
// // }

// // export default App




// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './Navbar';
// import Dashbord from './Dashbord';
// import Classroom from './Classroom';
// import Store from './Store';
// import Calender from './Calender';
// import Assessment from './Assessment';
// import Blog from './Blog';
// import PageNotFound from "./PageNotFound";
// import Profile from './Profile';
// import MyAccount from './MyAccount';
// import MySettings from './MySettings';
// import News from './News';

// const App = () => {
//   return (
//     <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Dashbord />} />
//           <Route path='/classroom' element={<Classroom />} />
//           <Route path='/assessment' element={<Assessment />} />
//           <Route path='/store' element={<Store />} />
//           <Route path='/calender' element={<Calender />} />
//           <Route path='/news' element={<News />} />
//           <Route path='/blog' element={<Blog />} />
//           <Route path='*' element={<PageNotFound />} />
//           <Route path='/profile' element={<Profile />} />
//           <Route path='/profile/myaccount' element={<MyAccount />} />
//           <Route path='/profile/mysettings' element={<MySettings />} />
//         </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './crudcomponents/Home'
import Create from './crudcomponents/Create'
import Edit from './crudcomponents/Edit'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Create/>}/>
      <Route path='/' element={<Edit/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App