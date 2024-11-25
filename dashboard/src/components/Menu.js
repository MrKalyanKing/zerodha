import { useEffect, useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie'
import axios from 'axios'
import {toastContainer,toast} from 'react-toastify'
const Menu = () => {
   const [menuHandle,setMenuHandle]=useState(0);
   const [profileDropDown,setProfileDropDown]=useState(false);
   const [cookies, setCookie, removeCookie] = useCookies(['token']);
   const [menuList,setMenuList]=useState(false)


   const [username,setUsername]=useState('')
   const navigate=useNavigate()

   
  

    const menuClass='menu'
    const activeMenu=' active'
   const handleMenu=(index)=>{
      setMenuHandle(index)
   }
   const toggleMenu=()=>{
    setMenuList(!menuList)
   }
   const  handleProfile=(index)=>{
      setProfileDropDown(index)
   }
   useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        // navigate("/signup");
        return;
      }
      try {
        const { data } = await axios.post(
          'http://localhost:3002', // Assuming REACT_APP_API_URL is set in .env
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Verification error:", error);
        removeCookie("token");
        navigate("/login");
      }
    };
  
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  
  const Logout = () => {
    removeCookie("token");
    toast("Logged out successfully", { position: "top-right" });
    navigate("/signup");
  };
  
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "30px" } } />
      <div class="menu-icon-k">
             <i class="fa-solid fa-bars" onClick={toggleMenu}></i>
         
         </div>
      <div className={`menus ${menuList?'active':''}`}>
        <ul className="menu-listss ">
        <li>
          <Link style={{textDecoration:'none'}} to='/' onClick={()=>handleMenu(0)}>
            <p className={menuHandle ===0 ? activeMenu:menuClass}  >Dashboard</p>
          </Link>
          </li>
          <li>
            <Link onClick={()=>handleMenu(1)} style={{textDecoration:'none'}} to='/orders'>
            <p className={menuHandle ===1 ? activeMenu:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link onClick={()=>handleMenu(2)} style={{textDecoration:'none'}} to='/holdings'>
            <p className={menuHandle ===2? activeMenu:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link onClick={()=>handleMenu(3)} style={{textDecoration:'none'}} to='/positions'>
            <p className={menuHandle===3?activeMenu:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link onClick={()=>handleMenu(4)} style={{textDecoration:'none'}} to='/funds'>
            <p className={menuHandle===4?activeMenu:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link onClick={()=>handleMenu(5)} style={{textDecoration:'none'}} to='/apps'>
            <p className={menuHandle===5?activeMenu:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        </div>
        <div className="profile" >
          <div className="avatar"> <img src="logo.png"/> </div>
          {username?
          <p className="username" style={{color:'magenta'}}>{username}</p>
          :<p className="username" style={{color:'magenta'}}>Demo</p>
          }
        </div>
      
     
    </div>
  );
};

   
export default Menu;
