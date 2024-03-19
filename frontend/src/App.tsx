import { Navigate, Route, Routes } from "react-router-dom"
import { Home, Login, Signup } from "./pages"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./hooks/auth/useAuthContext"

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className='p-4 h-screen flex item-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' /> } />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App
