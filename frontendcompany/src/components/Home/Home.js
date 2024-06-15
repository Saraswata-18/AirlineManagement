import React from 'react'
import add from './addfilght.png'
import update from './upadateflight.jpg'
import user from './checkuser2.jpg'
import api from '../API/api'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
const Home = () => {
    const navigate=useNavigate()
    const check=()=>{
        const token = localStorage.getItem('token')
        if (!token) {
          navigate("/")
        } else {
          api.get('/logged/company/staff', {
            headers: {
              Authorization: token
            }
          }).then(res => {
           
            if (res.data.success) {
              
              
                
    
            } else {
              localStorage.removeItem('token')
              navigate("/")
    
            }
          }).catch((err) => {
            localStorage.removeItem('token')
            navigate("/")
    
          })
        }
      }
      useEffect(() => check(), [])
  return (
    <>
    <Navbar/>
    <div className='h-[4.2rem]'></div>
    <div className='bg-gradient-to-r justify-center items-center from-yellow-400 to-orange-400 flex flex-row w-screen h-screen'>
     <Link to='/addf'><div className='w-96 h-[55vh] rounded-lg bg-white m-10 hover:scale-105 hover:brightness-90 cursor-pointer p-8 transition-all duration-300 ease-in-out'><img src={add} className='w-80 rounded-lg h-[35vh]'/><div className='flex flex-row justify-center mt-10 items-center text-2xl font font-semibold'>Add Flight</div></div></Link> 
     <Link to='/updatef'><div className='w-96 h-[55vh] bg-white rounded-lg m-10 hover:scale-105 hover:brightness-90 cursor-pointer p-8 transition-all duration-300 ease-in-out'><img src={update} className='w-80 rounded-lg h-[35vh]'/><div className='flex flex-row justify-center mt-10 items-center text-2xl font font-semibold'>Flight Updates</div></div></Link>
     <Link to='/usercheck'><div className='w-96 h-[55vh] bg-white rounded-lg m-10 hover:scale-105 hover:brightness-90 cursor-pointer p-8 transition-all duration-300 ease-in-out'><img src={user} className='w-80 rounded-lg h-[35vh]'/><div className='flex flex-row justify-center mt-10 items-center text-2xl font font-semibold'>Check User</div></div></Link>
    </div>
    </>
  )
}

export default Home
