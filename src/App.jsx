import './App.css';
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes> 
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      </Routes>

      </Router>
    </div>
  );
}

export default App;
