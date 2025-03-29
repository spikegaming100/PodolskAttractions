import React from "react";
import Header from "../Components/Header/Header";
import Greetings from "../Components/Greetings/Greetings"
import About from "../Components/About/About";
import Attractions from "../Components/Attractions/Attractions";
import Feedback from "../Components/Feedback/Feedback";

const Main = () => {
    return (
        <div className="Main">
            <div style={{position: "absolute", zIndex: 2}}>
                <Header/>
            </div>
            <Greetings/>
            <About/>
            <Attractions/>
            <Feedback/>
            <Header/>
        </div>
    )
}

export default React.memo(Main);