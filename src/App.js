import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthentication } from './hooks/useAuthentication';

//context
import { AuthProvider } from './context/AuthContext';


import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';
import Search from './pages/Search';
import Post from './pages/Post';
import EditPost from './pages/EditPost';
export default function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <AuthProvider value={{ user }}>
      <Router>
        <div className="app container">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/posts/:id' element={<Post />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path='/post/create' element={user ? <CreatePost /> : <Navigate to="/login" />} />
            <Route path='/posts/edit/:id' element={user ? <EditPost /> : <Navigate to="/login" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  )
}
