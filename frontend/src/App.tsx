import { BrowserRouter as Router } from "react-router-dom"
import { Home, Login, Signup } from "./pages"

function App() {

  return (
    <div className='p-4 h-screen flex item-center justify-center'>
      <Router>
        <Home />
      </Router>
    </div>
  )
}

export default App
