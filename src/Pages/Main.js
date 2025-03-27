import React from "react";
import Header from "../Components/Header/Header";
import Greetings from "../Components/Greetings/Greetings"

const Main = () => {
    return (
        <div className="Main">
            <div className="Wrapper">
                <Header/>
                <h1 className="GreetingsBack">1781</h1>
                <Greetings/>
            </div>
        </div>
    )
}

export default React.memo(Main);