import React, { useContext, useState } from "react";
import { Text } from "./Text";
import { NavItem } from "./NavItem";
import { Home, User, Info, Lock, Menu, X} from "lucide-react";
import { Authcontext } from "../auth/Authcontext";

export function Navbar() {
  const [userData, , logout] = useContext(Authcontext);
  const [mobilemenu, setmobilemenu] = useState(false);

  const toggleMenu = () => {
    setmobilemenu(prev => !prev);
    console.log("Mobile menu toggled");
  };

  

  return (

    <nav className="relative md:min-h-screen flex md:flex-col justify-between items-center text-white py-6 px-4">
      <Text variant="subheading" className="text-xl text-white font-semibold">
        Nilam420
      </Text>
      <div className="hidden md:block">
        <ul className="flex md:flex-col items-center  gap-6 w-full text-left">
          <NavItem label="Home" link="/" Icon={Home} />
          <NavItem label="Players" link="/players" Icon={User} />
          <NavItem label="About" link="/about" Icon={Info} />

          {userData.role && (
            <NavItem
              label="Logout"
              link="#"
              Icon={Lock}
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            />
          )}
        </ul>
      </div>
      <div className="md:hidden flex items-center">
         <button onClick={toggleMenu}>
          {mobilemenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {mobilemenu && (
          <div className="absolute top-12 right-0 backdrop-blur-xl bg-white/5 rounded-xl shadow-lg p-4 z-50">
            <ul className="flex flex-col items-center gap-4 text-left">
              <NavItem label="Home" link="/" Icon={Home} />
              <NavItem label="Players" link="/players" Icon={User} />
              <NavItem label="About" link="/about" Icon={Info} />
              {userData.role && (
                <NavItem
                  label="Logout"
                  link="#"
                  Icon={Lock}
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                  }}
                />
              )}
            </ul>
          </div>
        )}
      </div>

    </nav>
  );
}




