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
        let res;

        try {
            let user = {"name":username,"password": password};
            res = await api.post("/api/users/login", user)

            if (res.data === null) {
               console.log("Van baj");
            } else {
                setUser(res.data);
                setUserCharacters(res.data.characters);

                // localStorage.setItem('user', JSON.stringify(res.data));
                // localStorage.setItem('characters', JSON.stringify(res.data.characters));

                // TODO ide dob még hogy ha rossz a pw/name
                nav("/")
            }
        } catch (err) {
            setErrorMsg(err);
            console.log("ERROR: " + err);
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
