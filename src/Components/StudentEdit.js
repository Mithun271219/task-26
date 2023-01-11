import axios from 'axios';
import React,{useState, useContext, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import Contexts from '../Context/Contexts';

function StudentEdit() {

    let {index}=useParams();
    let navigate=useNavigate();

    let api=useContext(Contexts)

    const [stu, setTtu] = useState({
        name:'', username:'', email:'', website:""
    })

    const {name, username, email, website}= stu;

    let handelChange=(e)=>{
        setTtu({...stu,[e.target.name]: e.target.value})
    }

    let loaddata=async()=>{
        let res=await axios.get(`${api.link}/${index}`)
        setTtu(res.data)
    }

    useEffect(()=>{
        loaddata();
    },[])

    let handelUpdate=async(e)=>{
        e.preventDefault();
    }

    let handelmodelsubmit=async()=>{
        let res=await axios.put(`${api.link}/${index}`,stu)
        navigate('/students')
    }

  return (
    <>
        <h2>Kindly update the correct details in this form</h2>
        <div className='container'>
            <form onSubmit={handelUpdate}>
                <div>
                    <label htmlFor="name">Name&nbsp;</label>
                    <input type="text" name="name" id="name" value={name||''} onChange={handelChange} />
                </div><br />
                <div>
                    <label htmlFor="username">User Name&nbsp;</label>
                    <input type="text" name="username" id="username" value={username||''} onChange={handelChange}  />
                </div><br />
                <div>
                    <label htmlFor="email">Email&nbsp;</label>
                    <input type="email" name="email" id="email" value={email||''} onChange={handelChange}  />
                </div><br />
                <div>
                    <label htmlFor="website">Website&nbsp;</label>
                    <input type="text" name="website" id="website" value={website||''} onChange={handelChange}   />
                </div><br />
                <div>
                    <button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Submit</button>
                </div>
            </form>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Confirm whethe the data is correct or not</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr className='table-dark'>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{name} </td>
                                <td>{username} </td>
                                <td>{email} </td>
                                <td>{website} </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="modal-footer">
                    <button type="button" onClick={handelmodelsubmit} className="btn btn-secondary" data-bs-dismiss="modal">I confirm</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default StudentEdit