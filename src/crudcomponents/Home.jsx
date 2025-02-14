import React, { useEffect } from 'react'
import "./home.css"
import axios from 'axios';
import { data, useState } from 'react-router-dom';

const Home = () => {
    const[users, setUsers]=useState([]);

    useEffect(()=>
    {
        axios.get("")
        .then(res=>{
            console.log(res.data);
        })
    },{})
  return (
    <section id="homeBlock">
        <article>
            <h1>List of Users</h1>
            
            <div className="createBtn">
                

            </div>
            <table>
                <thead>
                    <tr>
                        <th>S1.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i)=>{
                            return(
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            )
                        })
                    }
                </tbody>
            </table>
        </article>


    </section>
  )
}

export default Home