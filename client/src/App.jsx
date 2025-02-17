import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About"
import Search from "./pages/Search"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header"
import Projects from "./pages/Projects"
import Footer from './components/Footer'


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/> 
        <Route path="/sign-in" element={<SignIn />}/> 
        <Route path="/sign-up" element={<SignUp />}/> 
        <Route path="/search" element={<Search />}/>  
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
