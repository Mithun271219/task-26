import React,{useState, useContext, useEffect} from "react";
import axios from 'axios'
import Contexts from "../Context/Contexts";
import { useNavigate, useParams } from "react-router-dom";

const StuStuList=()=>{

    let api=useContext(Contexts)
    let anvigate=useNavigate();
    let {index}= useParams();

    useEffect(()=>{
        api.getdata();
    },[])

    return(
        <div>
            <h2><p>All students data is listed here!.</p> </h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr className="table-dark">
                        <th># Id</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        api.students.map((ele)=>{
                            return(
                                <tr key={ele.id}>
                                    <th>{ele.id}</th>
                                    <td>{ele.name}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.website}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StuStuList;