import React, { useContext } from "react";
import { Text } from "./Text";
import { NavItem } from "./NavItem";
import { Home, User, Info, Lock } from "lucide-react";
import { Authcontext } from "../auth/Authcontext";

export function Navbar() {
  const [userData, , logout] = useContext(Authcontext); 

  return (
    <nav className="fixed left-0 top-0 h-screen w-30 text-white flex flex-col justify-between items-center py-6 shadow-lg shadow-gray-700">

      <div className="mb-8">
        <Text variant="subheading" className="text-md text-white font-bold">
          Nilam420
        </Text>
      </div>

      <ul className="flex flex-col gap-6 w-full text-left pl-6">
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
    </nav>
  );
}




