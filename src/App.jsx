import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/Login";
import About from "./pages/about";
import "./App.css";
import Admin from "./pages/admin";
import AuctionForm from "./components/AuctionForm";
import Auctionpage from "./pages/auctionpage";
import Players from "./pages/players";
import PlayerDetails from "./pages/playerdetails";
import User from "./pages/user";
import Usersignup from "./pages/Usersignup";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { Authcontext } from "./auth/Authcontext";
import { useEffect, useContext,useState} from "react";
import CreateSquad from "./pages/CreateSquad";
import { Squad } from "./pages/Squad";

function App() {
  const [role, setRole] = useState({ role: localStorage.getItem("role")});

  const [userdata, login, logout] = useContext(Authcontext);

  return (
    <div className="flex flex-col md:flex-row md:justify-between min-h-screen bg-gradient-to-t from-[#1D5AD0] to-[#0c368a]">
      <div className='fixed inset-0 bg-[url("/png.png")] bg-no-repeat bg-cover opacity-60'></div>
      <div className="w-full md:w-32">
        <Navbar />
      </div>
      <div className="flex-1 h-screen md:block flex justify-center items-center overflow-y-scroll ">
        <Routes>
          <Route 
            path="/" 
            element={
              role.role === "admin" ? <Admin /> :
              role.role === "user" ? <User /> :
              <Home />
            } 
          />
          <Route path="/login" element={<Login />} />
          <Route path="/login/:usersignup" element={<Usersignup />} />
          <Route path="/about" element={<About />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/:playerId" element={<PlayerDetails />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/auctionform"
            element={
              <ProtectedRoute requiredRole="admin">
                <AuctionForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/auctionpage"
            element={
              <ProtectedRoute requiredRole="admin">
                <Auctionpage />
              </ProtectedRoute>
            }
          />



          <Route path="/user" element={
            <ProtectedRoute requiredRole="user">
              <User />
            </ProtectedRoute> 
          } />
           <Route path="/Createsquad" element={
            <ProtectedRoute requiredRole="user">
              <CreateSquad />
            </ProtectedRoute> 
          } />
          <Route path="/Createsquad/Squad" element={
            <ProtectedRoute requiredRole="user">
              <Squad />
            </ProtectedRoute> 
          } />

        </Routes>
      </div>
    </div>
  );
}

export default App;



