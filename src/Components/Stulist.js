import React, {useContext} from 'react'
import Contexts from '../Context/Contexts'
import StuStuList from './StuStuList'
import TechStuList from './TechStuList'

function Stulist(props) {

    let context= useContext(Contexts)
  return (
    <>
        {
            context.IsTeacher===true ?
            <TechStuList />:
            <StuStuList  />
        }
    </>
  )
}

export default Stulist;