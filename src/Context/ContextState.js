import React,{ useState, useEffect } from 'react';
import axios from 'axios'
import Contexts from './Contexts';

const ContextState=(props)=>{

    const [IsTeacher, setIsTeacher] = useState(false)
    const [IsStudent, setIsStudent] = useState(false)
    const [students, setStudents] = useState([])

    let link='http://localhost:3001/students'

    let getdata= async()=>{
        let result = await axios.get(link);
        setStudents(result.data)
    }

    // getdata();

    const AuthenticateStudent=()=>{
        setIsTeacher(false)
        setIsStudent(true)
    }

    const AuthenticateTeacher=()=>{
        setIsTeacher(true)
        setIsStudent(false)
    }

    return(
        <Contexts.Provider value={{IsTeacher, AuthenticateTeacher,AuthenticateStudent,link, students,getdata}}>
            {props.children}
        </Contexts.Provider>
    )
}

export default ContextState;