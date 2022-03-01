import './App.scss';
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import PostDetail from "./components/Home/Posts/PostDetail/PostDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/post/:_id" element={<PostDetail />} />
      <Route path="/admin" element={<Admin />} />
      </Routes>

      </Router>
    </div>

  );
}

export default App;
