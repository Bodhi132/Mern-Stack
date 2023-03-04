import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useState,useContext } from 'react'
import { UserContext } from '../UserContext'
import axios from 'axios'

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const {setUser} = useContext(UserContext)

    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
          const {data} = await axios.post('/login', {email,password});
          setUser(data);
          alert('Login successful');
          setRedirect(true);
        } catch (e) {
          alert('Login failed');
        }
      }

      if(redirect)
      {
        return <Navigate to={'/'}/>
      }

    return (
        <div className='p-4 flex'>
            <div className='ml-6 p-6 flex flex-col'>
                <h2 className='mb-4'>Login</h2>
                <form className="w-80 h-[26rem] gap-3 flex flex-col border p-2 bg-slate-200 shadow-lg rounded-md" onSubmit={handleLoginSubmit}>
                    <label className='pl-1'>Email</label>
                    <input type="email"
                        placeholder="your@email.com"
                        className='bg-slate-300 p-3 rounded-md'
                     value={email}
                     onChange={ev => setEmail(ev.target.value)} 
                    />
                    <label className='pl-1'>Password</label>
                    <input type="password"
                        placeholder="password"
                     value={password}
                     onChange={ev => setPassword(ev.target.value)}
                    className='bg-slate-300 p-3 rounded-md'
                    />
                    <button className="primary mt-3">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        not a member? <Link className="underline text-black" to={'/signup'}>signup</Link>
                    </div>
                </form>
            </div>
            <img src='../src/assets/signup.jpg' className='max-w-lg pl-3 ml-6'/>
        </div>
    )
}

export default LoginPage