import React, {useState} from "react";
import api from "../utils/api";

const Login = ({setUser, setUserCharacters}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword]= useState("");


    const handleSubmit = async e => {
        e.preventDefault();

        const user = {username, password};
        const res = await api.post("/api/login", user);

        setUser(res.data);
        setUserCharacters(res.data.characters);

        localStorage.setItem('user', res.data)
    }

    return <div id="login-page" className="main-content">
        <h1>
            Please Login!
        </h1>
        <form>
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                value={username}
                placeholder="Enter Username"
                onChange={({target}) => setUsername(target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                value={password}
                onChange={({target}) => setPassword(target.value)}
            />
            <button type="submit" onSubmit={event => handleSubmit(event)}>Login!</button>
        </form>
    </div>
}

export default Login;
