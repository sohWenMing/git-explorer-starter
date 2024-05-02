import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users"
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import UserProfile from "./components/userProfile"
import SearchUser from "./components/searchUser"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<Navbar />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path='/users' element={<Users />}></Route>
          <Route path='/users/user/:username' element={<UserProfile />}></Route>
          <Route path='/search' element={<SearchUser />} />
        </Route>
        <Route path="*" element={<NotFound />}>Not Found</Route>
        
      </Routes>
    </div>
  );
}

export default App;
 