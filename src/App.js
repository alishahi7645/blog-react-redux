import Navbar from "./components/navbar/Navbar";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import axios from 'axios';
import Create from "./components/blog/Create";
import Home from "./pages/home/Home";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = ['applicaition/json'];
axios.defaults.headers.post['Accept'] = ['applicaition/json'];
axios.defaults.withCredentials = true;
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
