import React from "react";
import './Greeting.css'

const Greetings = () => {
    return (
        <div className="Greeting">
            <h1 className="GreetingsBack">1781</h1>
            <div className="GreetingContainer">
                <h1 className="h1" style={{fontSize: "180.98px"}}>Подольск</h1>
                <h2 className="GreetingSub">Твой культурный город</h2>
            </div>
        </div>
    )
}

export default React.memo(Greetings)