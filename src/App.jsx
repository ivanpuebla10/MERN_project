import './App.scss';
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import PostDetail from "./components/Home/Posts/PostDetail/PostDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import PrivateZone from "./guards/PrivateZone";
import AdminZone from "./guards/AdminZone";
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes> 
      <Route
            path="/"
            element={
              <PrivateZone>
                <Home />
              </PrivateZone>
            }
          />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route
            path="/profile"
            element={
              <PrivateZone>
                <Profile />
              </PrivateZone>
            }
          />
      <Route path="/post/:_id" element={<PostDetail />} />
      <Route path="/admin" element={ <AdminZone><Admin /></AdminZone> }/>
      <Route path="*" element={<NotFound />} />
      <Route path="/search/:postName" element={<Search />} />
      </Routes>

      </Router>
    </div>

  );
}

export default App;
