import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from "react-redux";


function Main(props) {
    let arr=[]

    const dispatch=useDispatch();
    const {users,users2}=useSelector(state => state.shop);
    const [users1,setUsers1]=useState();

    useEffect(()=>{
        fetch('http://localhost:7070/api/users')
            .then(res=>res.json())
                .then(json=>dispatch({type:"json users",
                    payload:(json.users.map(item=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                        ))
                    )}))

    },[]);

    useEffect(()=>{
        fetch('http://localhost:7070/api/users').
        then(res=>res.json())
            .then(json=>json.users.forEach(item=>arr.push(item)))
    },[]);

    useEffect(()=>{
        fetch('http://localhost:7070/api/users').
        then(res=>res.json())
            .then(json=>setUsers1(json.users))
    },[]);

    useEffect(()=>{
        fetch('http://localhost:7070/api/users').
        then(res=>res.json())
            .then(json=>dispatch({type:"json users2",payload:json.users}))
    },[])

    console.log(arr.length+" arr[]");
    console.log(users1+" useState");
    console.log(users.length+" redux");
    console.log(users2.length+" redux2");


    return (
        <div>
            <table>

                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                </tr>
                </thead>

                <tbody>
                {users}
                </tbody>

            </table>

            <p>arr length</p>
            {arr.length}

            {users2.length>0 ? users2.map(item=>(
                <div>
                    <span>{item.id}</span>
                    <span>{item.name}</span>
                    <span>{item.email}</span>
                </div>
            ))
                :<p>Problem users</p>
            }



        </div>
    );
}

export default Main;