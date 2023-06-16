import Navbar from "./components/navbar/Navbar";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
