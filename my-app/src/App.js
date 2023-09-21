import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Header'
import Dashboard from './pages/Dashboard';
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/about" element={<About/>}></Route>
       </Routes>
       </BrowserRouter>
       </>
  );
}

export default App;