import React,{ useContext} from "react";
import Contexts from "../Context/Contexts";

const AuthPage=(props)=>{

    let checkAut= useContext(Contexts)

    return(
        <div className="container"> 
           <main >
                <form>
                    <p>Kindly select whether you are student or teacher</p>
                    <div>
                        {/* Button trigger modal */}
                        <p>Click the below button to get the access as Student or Teacher</p>
                        <button type="button" className="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Get the Access
                        </button>
                        {/* Modal */}
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Select whether you are student or theacher</h1>
                                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                            </div>
                            <div className="modal-body">
                            <div>
                                <ul>
                                    <li>Student has access only to upload their details at once and can view their data in list</li>    
                                    <li>Teacher has the access to Update, Create or Delete the Student Database from the server</li>
                                </ul>  
                                <p style={{color:'red'}}> * Selecting student or teacher is mandate. </p>  
                            </div>
                            </div>
                            <div className="modal-header">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={checkAut.AuthenticateStudent} >Student</button>
                                <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={checkAut.AuthenticateTeacher}>Teacher</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </form>
            </main> 
        </div>
    )
}

export default AuthPage;