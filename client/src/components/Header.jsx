import React, { useContext } from 'react';
import { useState } from 'react'
// import OutsideClickHandler from 'react-outside-click-handler'
import ClickAwayListener from 'react-click-away-listener';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Header = () => {

    const [popup, setPopup] = useState(false)
    const {user}=useContext(UserContext)
    // useEffect(() => {
    //     axios.get('/uploadgetData').then(response => {
    //         setPosts(response.data)
    //         console.log(response);
    //     })
    // }, [])

    const takeTo = (ev) => {
        ev.prevetDefault()
            axios.get('/uploadgetData').then(response => {
                const {id}=response._id
            })
    }

    return (
        <nav className='bg-slate-200 drop-shadow-lg shadow-slate-500 flex flex-row gap-x-4 justify-around'>
            <a className='flex flex-row p-3 items-center'>
                <img src='../src/assets/logo.jpeg ' className='w-12 h-12 mx-3 hover:cursor-pointer' />
                <span className='ml-2 text-slate-500 hover:cursor-pointer'>BodhiSocial</span>
            </a>
            <div className='flex flex-row items-center justify-between '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h- mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input placeholder='search' className='bg-gray-100 rounded-full p-1 px-8' />
            </div>
            <div className='flex justify-between items-center '>
                <a className='pr-3 mr-2 text-slate-500 hover:cursor-pointer'>HomePage</a>
                <a className='pr-3 ml-2 text-slate-500 hover:cursor-pointer'>TimeLine</a>
            </div>
            <div className='flex flex-row items-center relative'>
                <button className='mx-2' onClick={() => setPopup(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                {popup && (
                    <ClickAwayListener onClickAway={() => setPopup(false)}>
                        <div className='absolute top-6 right-6 rounded shadow-md mt-6 mr-5 pt-4 pr-3 bg-slate-400 h-64 w-48 flex flex-col hover:bg-sky-900' onClickAway={() => setPopup(false)}>
                            <div className='flex flex-row p-5 text-slate-100 ml-1 items-center hover:bg-orange-900'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                                <Link className='text-slate-200 ml-3' to={'/login'}>Login</Link>
                            </div>

                            <div className='flex flex-row p-5 text-slate-100 ml-1 items-center hover:bg-orange-900'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>

                                <Link className='text-slate-200 ml-3' to={'/signup'}>Sign Up</Link>
                            </div>
                            <div className='flex flex-row p-5 text-slate-100 ml-1 items-center hover:bg-orange-900'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                                <span className='text-slate-200 ml-3'>SignOut</span>
                            </div>
                        </div>
                    </ClickAwayListener>
                )}
                <Link className='border rounded-full bg-slate-400  hover:cursor-pointer hover:bg-slate-500 p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white" to={'/signup'}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </Link>
            </div>

        </nav>
    )
}

export default Header
