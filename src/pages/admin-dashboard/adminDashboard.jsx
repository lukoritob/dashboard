import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/admin-navbar/navbar'
import Sidebar from '../../components/admin-sidebar/sidebar'
import Main from '../../components/admin-main/main'
import { Context } from '../../context/index'
import Marketing from '../../components/admin-marketing/marketing'
import { Route, Routes } from 'react-router-dom'

const AdminDashboard = () => {
    let { state, dispatch } = useContext(Context)
    let [size, setSize] = useState(1000)
    window.addEventListener('resize', (e) => {
        setSize(e.currentTarget.innerWidth)
    })
    useEffect(() => {
        size < 768 ? dispatch({ type: 'SET_TOGGLE_NAVBAR', payload: false }) : dispatch({ type: 'SET_TOGGLE_NAVBAR', payload: true })
    }, [size])
    return (
        <div className='bg-slate-50'>
            <div className=""><Navbar /></div>
            <div className="main max-w-[2300px] mt-[76px] flex flex-1 justify-between">
                <Sidebar />
                <div className={`main ${state.toggle ? ` ${state.toggleNavbar ? 'md:ml-[310px]' : 'ml-0'}` : ` ${state.toggleNavbar ? 'md:ml-[90px]' : 'ml-0'}`} overflow-auto w-full h-full z-10`}>
                    <Routes>
                        <Route path='/admin-dashboard/main' element={<Main />} />
                        <Route path='/admin-dashboard/marketing' element={<Marketing />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
