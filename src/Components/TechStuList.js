import axios from 'axios'
import React,{ useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Contexts from '../Context/Contexts'

function TechStuList() {

  let {index}=useParams();
  let api=useContext(Contexts)
  let navigate=useNavigate();

  let handeldeletemodel=async(indexs)=>{
    let res=await axios.delete(`${api.link}/${indexs}`)
    api.getdata();
  }

  useEffect(()=>{
    api.getdata();
},[])

  return (
    <div>
          <h2><p>All students data is listed here!.</p> </h2>
          <table className="table table-striped table-hover">
              <thead>
                  <tr className='table-dark'>
                      <th># Id</th>
                      <th>Name</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Website</th>
                      <th>Edit</th>
                      <th>Delete</th>
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
                            <td><button className='btn btn-warning' onClick={()=>{navigate(`/students/edit/${ele.id}`)}}> Edit</button></td>
                            <td><button className='btn btn-danger' onClick={()=>{handeldeletemodel(ele.id)}} > Delete</button></td>
                          </tr>
                        )
                      })
                  }
              </tbody>
          </table>
      </div>
  )
}

export default TechStuList