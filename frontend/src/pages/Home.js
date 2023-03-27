import React from "react";
import MethodMenu from "./MethodMenu";

const Home = ({user, setCreationMethod, setRandomNums}) => {
    return <div id="home-page" className="main-content">
        <h1>Welcome to the Homepage!</h1>
        {user ?
            <MethodMenu
                setCreationMethod={setCreationMethod}
                setRandomNums={setRandomNums}
            />
         :
            <div>
            <h2>Register!</h2>
            <button disabled>Let' Go!</button>
        </div>
        }
    </div>
}

export default Home;
