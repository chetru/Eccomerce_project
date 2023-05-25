import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './login.module.css'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleEmail = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log("clicked")

    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then((res) => {
        console.log(res)
        res.json().then((resp) => {
          console.log(resp);
          localStorage.setItem('token', JSON.stringify(resp));
          navigate('/home')
        })
      })
  }

  const signup = () => {
    navigate('/signup')
  }

  return (
    <>
      <div className={Styles.login_div}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-md-6 mx-auto py-4 px-0`}>
              <div className={`card ${Styles.card}`}>
                <div className={`card-title text-center`}>
                  <h5 className={`mt-5`}>HEY, THERE</h5> <p className={Styles.para}>Login to your cool account below.</p>
                </div>
                <br />
                <form className={Styles.signup}>
                  <div className={`form-group`}><input type="text" className={`form-control ${Styles.form_control}`} placeholder="Username" onChange={handleEmail} value={username} /></div>
                  <div className="form-group"><input type="password" className={`form-control ${Styles.form_control}`}  placeholder="password" onChange={handlePassword} value={password} /></div>
                  <br /> <button type="button" className={`btn btn-primary ${Styles.btn}`}  onClick={() => handleApi()}>Login</button>
                  <br />
                  <div className="row">
                    <div className="col-6 col-sm-6">
                      <a href="#"><p className={`pt-2 ml-1 text-left ${Styles.text_left}`}>Create an Account</p></a>
                    </div>
                    <div className="col-6 col-sm-6">
                      <a href=""> <p className={ `pt-2 mr-1 text-right ${Styles.text_right}`} onClick={() => signup()}> Sign Up Now</p></a>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login;