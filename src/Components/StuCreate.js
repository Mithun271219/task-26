import axios from 'axios'
import React,{useState, useContext, useEffect} from 'react'
import Contexts from '../Context/Contexts'
import { useNavigate } from 'react-router-dom'

function StuCreate(props) {

    const api=useContext(Contexts);
    const navigate= useNavigate();

    const [stuData, setStuData] = useState({
        name:'',
        username:'',
        email:'',
        website:''
    })

    const {name, username, email, website} = stuData

    const handelOnChange=(e)=>{
        setStuData({...stuData, [e.target.name]: e.target.value})
    }

    const UploadData=async(e)=>{
        e.preventDefault();
        console.table(stuData);
        setStuData({name:'',  username:'',  email:'', website:''})
        await axios.post(api.link, stuData )
        navigate('/students')
    }

    useEffect(()=>{
        api.getdata();
    })

  return (
    <>
            <h2>Kindly enter the below detail to update the student details</h2>
        <form onSubmit={UploadData}>
            <div>
                <label htmlFor="name">Name:&nbsp;</label>
                <input type="text" name="name" id="name" value={name||''} onChange={handelOnChange} />
            </div><br />
            <div>
                <label htmlFor="username">User Name:&nbsp;</label>
                <input type="text" name="username" id="username" value={username||''} onChange={handelOnChange}  />
            </div><br />
            <div>
                <label htmlFor="eamil">Email:&nbsp;</label>
                <input type="email" name="email" id="eamil" value={email||''} onChange={handelOnChange}  />
            </div><br />
            <div>
                <label htmlFor="website">Website:&nbsp;</label>
                <input type="text" name="website" id="website" value={website||''} onChange={handelOnChange}  />
            </div><br />
            <div>
                <button className='btn btn-primary' type='submit' >Submit</button>
            </div>
            
        </form>
    </>
  )
}

export default StuCreate;