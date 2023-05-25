import React, { useState } from 'react'
import Styles from './signup.module.css'
import { FiUserPlus } from "react-icons/fi"
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });
    //console.log(inpvalue);
    const [data, setData] = useState([]);
    const getdata = (e) => {
        
        const { value, name } = e.target;
        //console.log(value,name);

        setInput(() => {
            return {
                ...input,
                [name]: value
            }
        })
    }
    const addData = (e) => {
        localStorage.setItem("users", JSON.stringify([...data, input]));
        navigate('/');
    }

    return (
        <>
            <div className={Styles.registration_form}>
                <form>
                    <div className={Styles.form_icon}>
                        <span><FiUserPlus /></span>
                    </div>
                    <div className={`form-group`}>
                        <input type="text" className={`form-control ${Styles.item}`} id="name" placeholder="Name" onChange={getdata} name='name' />
                    </div>
                    <div className={`form-group`}>
                        <input type="text" className={`form-control ${Styles.item}`} id="username" placeholder="UserName" onChange={getdata} name='username' />
                    </div>
                    <div className={`form-group`}>
                        <input type="text" className={`form-control ${Styles.item}`} id="email" placeholder="Email" onChange={getdata} name='email' />
                    </div>
                    <div className={`form-group`}>
                        <input type="password" className={`form-control ${Styles.item}`} id="password" placeholder="Password" onChange={getdata} name='password' />
                    </div>
                    <div className={`form-group`}>
                        <button type="button" className={`btn btn-block ${Styles.btn}`} onClick={() => addData()}>Create Account</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp;