import { createContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Authcontext = createContext();

export const AuthcontextProvider = ({ children }) => {
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const [userdata, setuserdata] = useState({
        email: localStorage.getItem("userEmail"),
        username: localStorage.getItem("username"),
        role: localStorage.getItem("role"),
    })

    const login = (email, username, role) => {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("username", username);
        localStorage.setItem("role", role);
        setuserdata({ email, username, role });
    }

    const logout = () => {
        localStorage.removeItem("role");
        setuserdata({ role: null })
        navigate("/login")
    }

    const signup=(useremail,username,userpassword,userteam,role)=>{
        localStorage.setItem("userEmail", useremail);
        localStorage.setItem("userpassword", userpassword);
        localStorage.setItem("username", username);
        localStorage.setItem("userteam", userteam);
        localStorage.setItem("role", role);
        navigate(`/user`)
    }

    //This is needed so that any change in the local storage is reflected in 
    // the UI, such as in different tab if the data are changed or logout 
    // it will affect all the data accros tabs. PLus any manual chnage in the
    //  local storage by any dev will automatically reflect in the UI too.
    useEffect(() => {
        const authcheck = () => {
            setuserdata({
                email: localStorage.getItem("userEmail"),
                username: localStorage.getItem("username"),
                role: localStorage.getItem("role"),
            })
        }
        window.addEventListener("storage", authcheck);
        return () => window.removeEventListener("storage", authcheck);
    },[])

    return (
        <Authcontext.Provider value={[userdata, login, logout,signup]}>
            {children}
        </Authcontext.Provider>
    )
}

