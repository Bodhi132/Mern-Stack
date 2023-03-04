import './App.css'
import Layout from './components/Layout'
import IndexPage from './components/IndexPage'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import UserContext from './UserContext'
// import Posts from './components/Posts'


axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContext>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </UserContext>
  )
}

export default App
