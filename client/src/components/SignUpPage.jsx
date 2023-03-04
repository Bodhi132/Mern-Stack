import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const SignUpPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function userSignup(ev) {
        ev.preventDefault()
        try {
            await axios.post('/signup', {
                name,
                email,
                password
            })
            alert('Sign Up Successful')
        }
        catch (e) {
            alert('Sign Up failed')
        }
    }

    return (
        <div className='p-4 flex'>
            <div className='ml-6 p-6 flex flex-col'>
                <h2 className='mb-4'>Sign Up</h2>
                <form className="w-80 h-[26rem] gap-3 flex flex-col border p-2 bg-slate-200 shadow-lg rounded-md" onSubmit={userSignup}>
                    <label className='pl-1'>Name</label>
                    <input type="text"
                        placeholder="Name"
                        value={name}
                        onChange={ev => setName(ev.target.value)}
                        className='bg-slate-300 p-3 rounded-md'
                    />
                    <label className='pl-1'>Email</label>
                    <input type="email"
                        placeholder="your@email.com"
                        onChange={ev => setEmail(ev.target.value)}
                        className='bg-slate-300 p-3 rounded-md'
                        value={email}
                    />
                    <label className='pl-1'>Password</label>
                    <input type="password"
                        placeholder="password"
                        onChange={ev => setPassword(ev.target.value)}
                        value={password}
                        className='bg-slate-300 p-3 rounded-md'
                    />
                    <button className="primary mt-3 rounded-full bg-gray-700 py-2 text-white hover:bg-slate-600">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
            <img src='../src/assets/signup.jpg' className='max-w-lg pl-3 ml-6' />
        </div>
    )
}

export default SignUpPage