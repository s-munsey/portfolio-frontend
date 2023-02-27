import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Bookshelf from "./pages/Bookshelf/Bookshelf";
import Home from "./pages/AboutMe/AboutMe";
import Login from "./pages/Login/Login";
import Blog from "./pages/Blog/Blog";
import UserContext from "./pages/Login/UserContext";

function App() {
  const user = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={user}>
          <Header />
          <Routes>
            <Route path="/bookshelf" element={<Bookshelf />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
