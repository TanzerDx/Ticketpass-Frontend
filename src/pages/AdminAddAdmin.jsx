import '../styles/AdminManageUsers.css';
import React, {useState} from "react";
import UserService from '../services/UserService';
import {toast} from "react-toastify";

function AdminAddAdmin () 
{
  
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const updateFormData = event => {
        setFormData ({
            ...formData, [event.target.name]:event.target.value
        })
    }

    const handleAddAdmin = (event) => {
        event.preventDefault();
        
        if (formData.password === formData.confirmPassword)
        {

            UserService.addAdmin(formData)
            .then(() =>  {
                toast.success('Admin added successfully!', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            })
        }
        else {
            toast.error('Passwords do not match!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }

    }

    return (
        <>
            <div className='background-color-adminManageUsers'>
                
                <div className="content">

                <div className='adminManageUsers-heading'>
                        <h1 className='remove-margin'>ADD ADMIN</h1>
                    </div>

                <form onSubmit={handleAddAdmin}>
                <div className='content-box-addAdmin'>                   
                    <div className='textaddAdmin-info'>
                        <h1>EMAIL ADDRESS:</h1>
                    </div>

                    <div className='addAdmin-container'>
                        <input
                            type="email"
                            name="email"
                            className="addAdmin-input"
                            placeholder=""
                            required
                            onChange={updateFormData}
                        />  
                    </div>
                </div>

                <div className='content-box-addAdmin'>
                    <div className='textaddAdmin-info'>
                        <h1>PASSWORD:</h1>
                    </div>

                    <div className='addAdmin-container'>
                        <input
                            type="password"
                            name="password"
                            className="addAdmin-input"
                            placeholder=""
                            required
                            onChange={updateFormData}
                        />  
                    </div>
                </div>

                <div className='content-box-addAdmin'>
                    <div className='textaddAdmin-info'>
                        <h1>CONFIRM PASSWORD:</h1>
                    </div>

                    <div className='addAdmin-container'>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="addAdmin-input"
                            placeholder=""
                            required
                            onChange={updateFormData}
                        />  
                    </div>
                </div>

                <input type="submit" className='button-addAdmin' value="CREATE ADMIN" />
            </form>
                </div>
                
            </div>
        </>
    )

}


export default AdminAddAdmin;