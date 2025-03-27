import React from "react";
import './Greeting.css'

const Greetings = () => {
    return (
        <div className="Greeting">
            <h1 className="GreetingHello">Подольск</h1>
            <h2 className="GreetingSub">Твой культурный город</h2>
        </div>
    )
}

export default React.memo(Greetings)