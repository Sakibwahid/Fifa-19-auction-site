import { User, LockKeyhole, Mail, TableCellsMerge } from "lucide-react";
import { Text } from "../components/Text";
import { Input } from "../components/Input";
import { PasswordInput } from "../components/Password";
import { Button } from "../components/Button";
import { Anchor } from "../components/Anchor";
import { useState, useContext } from "react";
import { Authcontext } from "../auth/Authcontext";
import { pre } from "framer-motion/client";

const Usersignup = () => {
    const [useremail, setUserEmail] = useState("");
    const [userpassword, setUserPassword] = useState("");
    const [username, setUsername] = useState("");
    const [userteam, setUserTeam] = useState("");
    const [errorlength, setLengthError] = useState(false);
    const [error, setError] = useState("");

    const [userdata, , , signup] = useContext(Authcontext);
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form reload
        if (useremail === "" || userpassword === "" || username === "" || userteam === "") {
            setError("Please fill all the fields!!");
        }
        else { signup(useremail, username, userpassword, userteam, "user"); }
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-md flex flex-col gap-6 justify-center items-center 
                backdrop-blur-xl bg-white/5 border border-white/20 shadow-lg 
                 rounded-2xl px-2 py-10">

                {/* Title Section */}
                <div className="text-center flex flex-col items-center">
                    <Text variant="heading" className="text-white text-3xl font-semibold">
                        Welcome
                    </Text>
                    <Text className="mt-2 text-gray-200 text-sm">
                        Fill up the information to create an acccount
                    </Text>
                </div>

                {error && <Text className="text-red-500 text-sm">{error}</Text>}

                {/* Login Form */}
                <form className="w-[80%] flex flex-col gap-4" onSubmit={handleSubmit}>

                    <Input
                        type="email"
                        placeholder="Enter your email"
                        icon={<Mail size={18} color="white" />}
                        className="placeholder-gray-400"
                        value={useremail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder="Enter an username"
                        icon={<User size={18} color="white" />}
                        className="placeholder-gray-400"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <PasswordInput
                        placeholder="Enter your password"
                        icon={<LockKeyhole size={18} color="white" />}
                        error={errorlength && "Password must be at least 6 characters"}
                        className="placeholder-gray-400"
                        value={userpassword}
                        onChange={(e) => {
                            if (e.target.value.length < 6) {
                                setLengthError(true);
                            }
                            else {
                                setLengthError(false);
                            }
                            setUserPassword(e.target.value);
                        }}
                    />
                    <Input
                        type="text"
                        placeholder="Your team name"
                        icon={<User size={18} color="white" />}
                        className="placeholder-gray-400"
                        value={userteam}
                        options={["Real Madrid", "Manchester City", "PSG", "Barcelona", "Bayern Munich", "Liverpool", "Chelsea", "Manchester United", "Arsenal", "Tottenham Hotspur", "Juventus", "AC Milan", "Inter Milan", "Atletico Madrid", "Borussia Dortmund", "RB Leipzig", "Ajax", "PSV Eindhoven", "FC Porto", "Benfica", "Sporting CP", "Olympique Marseille", "Olympique Lyon", "AS Monaco", "AS Roma", "SS Lazio", "Napoli", "Fiorentina", "Villarreal", "Sevilla", "Valencia", "Real Betis", "Real Sociedad", "Leicester City", "Everton", "West Ham United", "Wolverhampton Wanderers", "Leeds United", "Aston Villa", "Crystal Palace", "Newcastle United", "Southampton", "Brighton & Hove Albion", "Burnley", "Fulham", "West Bromwich Albion", "Sheffield United"]}
                        onChange={(e) => setUserTeam(e.target.value)}
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
                    >
                        Log in
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Usersignup;