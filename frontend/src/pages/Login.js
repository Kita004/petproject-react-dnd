import React, {useState} from "react";
import api from "../utils/api";
import {useNavigate} from "react-router-dom";

const Login = ({setUser, setUserCharacters}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const nav = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {username, password};
        // const res = await api.post("/api/users/auth", user)
        const res = await api.get("/api/users/" + 1);

        if (res.status === 200) {
            await setUser(res.data);
            await setUserCharacters(res.data.characters);

            localStorage.setItem('user', res.data);

            nav("/");
        } else {
            setErrorMsg("Oopsie");
        }
    }

    return <div id="login-page" className="main-content">
        <h1>
            Please Login!
        </h1>
        <form>
            <label htmlFor="username">Username</label>
            <br/>
            <input
                type="text"
                value={username}
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br/>
            <button type="button" onClick={event => handleSubmit(event)}>Login!</button>
        </form>
        <p>{errorMsg}</p>
    </div>
}

export default Login;
