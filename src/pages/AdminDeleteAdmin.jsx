import '../styles/AdminManageUsers.css';
import React, {useState} from "react";
import UserService from '../services/UserService';
import {toast} from "react-toastify";

function AdminDeleteAdmin () 
{

    const [userId, setUserId] = useState("");

    const handleDeleteAdmin = (event) => {
        event.preventDefault();
        
        UserService.deleteAdmin(userId);
    
        toast.success('Admin deleted!', {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    
        setTimeout(() => {
        }, 1000);
    };
  

    return (
        <>
            <div className='background-color-adminManageUsers'>
                
                <div className="content">
                
                <div className='adminManageUsers-heading'>
                        <h1 className='remove-margin'>DELETE ADMIN</h1>
                    </div>

                <div className='warning-text'>
                    <h1>WARNING! DELETING AN ADMIN CANNOT BE UNDONE! IF AN ADMIN IS DELETED ON ACCIDENT, A NEW ACCOUNT SHOULD BE CREATED!</h1>
                </div>
               
                <form onSubmit={handleDeleteAdmin}>
                        <div className='banUser-grid'>
                            <div className='grid-item'>
                                <div className='banUser-validation-text'>
                                    <h1 className='remove-margin-manager-properties'>USER ID: </h1>
                                </div>
                                <div className='banUser-container'>
                                    <input
                                        type="text"
                                        name="userId"
                                        className="banUser-input"
                                        placeholder=""
                                        required
                                        value={userId} 
                                        onChange={(e) => setUserId(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <input type="submit" className="button-deleteAdmin" value="DELETE ADMIN" />
                    </form>


                </div>
                
            </div>
        </>
    )

}


export default AdminDeleteAdmin;