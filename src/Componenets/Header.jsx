import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from '../Context/ThemeContext';

function Header() {

    const [toggle, setToggle] = useState(true)
    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(() =>{
        console.log("theme", theme)
    })

  return (
    <div className='flex items-center p-3'>
      <img src={logo} alt='logo' className='w-[60px] h-[60px]'/>
      <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
        <HiOutlineMagnifyingGlass/>
        <input type='text' placeholder='search games' className='px-2 bg-transparent outline-none'/>
      </div>
      <div>
        {theme== 'light' ? (<HiMoon className='text-[35px] bg-slate-200 text-black rounded-full p-1' onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}/>) : (<HiSun className='text-[35px] bg-slate-200 text-black rounded-full p-1' onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}/>)}
      </div>
    </div>
  )
}

export default Header
