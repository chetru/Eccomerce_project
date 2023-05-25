import React from 'react'
import { useState } from 'react'
import { AiFillDelete, AiOutlineCloseCircle } from "react-icons/ai";
import {GrCart} from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { DLT } from '../../redux/actions/ProductAction';
import { FcRegisteredTrademark } from "react-icons/fc"
import { useNavigate } from 'react-router-dom';
import { Dropdown, Space } from 'antd';
import Styles from './navbar.module.css'
import { TfiUser } from "react-icons/tfi"

const Navbar = () => {

  const data = useSelector((state) => state.CartReducer.carts)
  console.log(data);

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id))
    let storageProducts = JSON.parse(localStorage.getItem('itemsInCart'));
    let productsrest = storageProducts.filter(product => product.id !== id);
    localStorage.setItem('itemsInCart', JSON.stringify(productsrest));
  }

  const items = [
    {
      label: (
        <p onClick={() => { logout() }} className={`mt-3`} style={{fontWeight:'600',fontSize:"14px",color:"red"}}>
          Log out 
        </p>
      ),
      key: '0',
    },
  ];

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/')
  }

  const log = () => {
    navigate('/')
  }


  return (
    <>

      <div className={Styles.navbar_container}>
        <p className={Styles.logo}>
          KKP Store
        </p>
        <div className={Styles.login_user}>
          {
            (localStorage.getItem('token')) ?
              (
                <div>
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <TfiUser
                          className={Styles.user_icon} />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              ) :
              (
                <button onClick={() => { log() }}
                  style={{ marginRight: "35px", marginTop: "4px" }} className= {` btn btn-primary ${Styles.nav_button}`}  >Log in</button>
              )
          }
        </div>
        <button className={Styles.cart_icon}>
          <Badge badgeContent={data.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <GrCart />
          </Badge>
        </button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            data.length ?
              <div className={Styles.card_details} style={{ width: "24rem", padding: 10 }}>
                {
                  data.map((e) => {
                    return (
                      <div className='row'>
                        <div className='col-md-4'>
                          <img src={e.image} style={{ width: "5rem", height: "5rem" }} alt="best" />
                        </div>
                        <div className='col-md-8'>
                          <p style={{ color: "#324d67", fontWeight: 600 }}>  {e.title}</p>
                          <p style={{ color: "black", }}>Price:<b> $ {e.price}</b></p>
                          <p style={{ color: "black", }}>Quantity:<b>  {e.quantity}</b></p>
                          <p style={{ color: "black", }}>Id:<b>  {e.id}</b></p>
                          <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                            <AiFillDelete className='fas fa-trash smalltrash' />
                          </p>
                        </div>
                      </div>
                    )
                  })
                }
              </div> :
              <div className={`card_details d-flex justify-content-center align-items-center`} style={{ width: "24rem", padding: 10, position: "relative" }}>
                <AiOutlineCloseCircle className={`fas fa-close smallclose`}
                  onClick={handleClose}
                  style={{ position: "absolute", top: 17, bottom: -20, right: 23, fontSize: 20, cursor: "pointer" }} />
                <p style={{ fontSize: 22 }}>Your carts is empty</p>
              </div>
          }
        </Menu>
      </div>
    </>
  )
}

export default Navbar;