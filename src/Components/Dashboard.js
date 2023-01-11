import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard=()=>{

    let navigate=useNavigate();

    return (
        <div>
            <h3>hello </h3>
            <section>
                <main>
                    <p>this page performs operation admin DASHBOARD with CRUD operations for the STUDENT & TEACHER MANAGEMENT</p>
                    <div>
                        <p>Click the below button to get the access as teacher or student </p>
                        <button onClick={()=>{navigate('login')}} className='btn btn-secondary mx-3 ' >Authorize</button>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Dashboard;