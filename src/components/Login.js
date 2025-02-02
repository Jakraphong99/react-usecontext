import React, { useContext } from "react";
import { AppContext } from "../App";
import "../App.css";

function Login() {
    const { setUsername } = useContext(AppContext);
    return (
        <div>
            User:
            <input
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
        </div>
    );
}
export default Login;