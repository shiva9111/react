import React, { useEffect, useState } from 'react'

// const UserEffectEx = () => {
//     const[count , setcount]=useState(0);
    // const [users , setUsers] = useState([]);
    // console.log(users);
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com.com/users")
    //     .then(response=>response.json().then(data=>{
    //         setUsers(data)
    //     }))
    //     .catch(err=>console.log(Error))
    // },[])

    //     setTimeout(()=>{
    //         setcount(100);
    //     },4000)
    //     document.title="MRU";
    // },[count])
    
    // return (
    // <div className='parent'>
    //     UseEffectEx
    //     users.map((user , index)=>{
    //         return(
    //             <div key={index}>
    //                 <h1>{user.name}</h1>
    //                 <h1>{user.email}</h1>
    //                 </>
    //         )
               
    //     })
    // }
    
//     </div>
//   )
// }

// export default UserEffectEx

// import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
    // const[count,setCount]=React.useState(0);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(100);
    //     },4000)
    //     document.title="MRU";
    // },[count])
    const [users,setusers]=useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            response => response.json().then(data=>{
                setusers(data);
            })
        ).catch(err=>console.log(err))
    })
  return (
    // <div>UseEffect
    //     <h1>{count}</h1>
      
    // </div>
    <div className='parent'>
        {
            users.map((user,index)=>{
                return(
                    <div key={index}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                    </div>
                )})
        }
    </div>
    
  )
}

export default UseEffectEx