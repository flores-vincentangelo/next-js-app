"use client"

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setEmail } from "../features/login/loginSlice";


export default function Page() {
    const username = useSelector(state => state.login.username);
    const email = useSelector(state => state.login.email);

    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(setUsername("placeholderUsername"));
        dispatch(setEmail("placeHolder@email.com"));
    }

    const handleLogout = () => {
        dispatch(setUsername(""));
        dispatch(setEmail(""));
    }

    return (
        <div>
            <h1>Hello from login</h1>
            <div className="nav">
            <div>
                <Link href={'/register'}>Go to register</Link>
            </div>
            <div>
                <Link href={'/'}>Go to home</Link>
            </div>

            </div>
            <div className="contents">
                <button
                    aria-label="Login"
                    onClick={handleLogin}
                >Login</button>
                <button
                    aria-label="Logout"
                    onClick={handleLogout}
                >Logout</button>
                <div>
                    Username: {username}
                </div>
                <div>
                    Email: {email}
                </div>
            </div>
        </div>
)
  }
  
  
  