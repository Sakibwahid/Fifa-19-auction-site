import React, { useEffect, useState,useContext } from "react";
import { LockKeyhole , Mail} from "lucide-react";
import { Text } from "../components/Text";
import { Input } from "../components/Input";
import { PasswordInput } from "../components/Password";
import { Button } from "../components/Button";
import { Anchor } from "../components/Anchor";
import { useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../auth/Authcontext";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorlength,setLengthError] = useState(false );
  
  const userEmail = localStorage.getItem("userEmail");
  const userPassword = localStorage.getItem("userpassword");
  const userName = localStorage.getItem("username");
 
  const [userdata]=useContext(Authcontext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctEmail = "admin@gmail.com";
    const correctPassword = "admin";

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem("role", "admin");
      window.location.href = "/admin"; // Redirect to the next page
    } 
    else if((email===userEmail|| email===userName)&& password===userPassword){
      localStorage.setItem("role", "user");
      window.location.href = "/user"
    }
    else{
      setError("Invalid email or password");
    }
  };

  const navigate = useNavigate()
  const handlePlayer = (e) => {
    e.preventDefault();
    console.log("clicked");
    navigate(`/login/usersignup`)
  }

  return (
    <div className="p-2 md:h-full flex justify-center items-center">
      <div className="w-full max-w-md flex flex-col gap-6 justify-center items-center 
        backdrop-blur-xl bg-white/5  border-white/20 shadow-lg 
        rounded-2xl px-6 py-10">
        
        {/* Title Section */}
        <div className="text-center">
          <Text variant="heading" className="text-white text-3xl font-semibold">
            Welcome Back
          </Text>
          <Text className="mt-2 text-gray-200 text-sm">
            Please sign in to your account
          </Text>
        </div>

        {error && <Text className="text-red-500 text-sm">{error}</Text>}

        {/* Login Form */}
        <form className="w-[80%] flex flex-col gap-5" >
          <Input
            type="email"
            placeholder="Enter your email"
            icon={ <Mail  size={18} color="white"/> }
            className="placeholder-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            placeholder="Enter your password"
            icon={ <LockKeyhole size={18} color="white" />}
            error={errorlength && "Password must be at least 6 characters"} 
            className="placeholder-gray-300"
            value={password}
            onChange={(e) => {
              if (e.target.value.length < 6) {
                setLengthError(true);
              }
              else{
                setLengthError(false);
              }
              setPassword(e.target.value);
            }}
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-500 border-gray-400 rounded-full focus:ring-indigo-400"
              />
              Remember me
            </label>
            <Anchor to="#" className="text-indigo-300 hover:text-indigo-400">
              Forgot password?
            </Anchor>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-3"
            onClick={handleSubmit}
            
          >
            Log in
          </Button>
          <Button
            type="submit"
            className="w-full bg-transparent border border-white hover:bg-gray-500 text-white font-semibold rounded-lg py-3"
            onClick={handlePlayer}
          >
            Create a Player ID
          </Button>

        </form>
      </div>
    </div>
  );
};

export default Login;

