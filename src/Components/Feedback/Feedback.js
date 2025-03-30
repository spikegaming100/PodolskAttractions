import React from "react";
import "./Feedback.css"
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
    return (
        <div className="Feedback">
            <div className="FeedbackForm">
                <h1 className="h1" style={{fontSize: "40px", color: "var(--color-white)", textTransform: "none"}}>Знаете
                    места, о которых не знаем мы?</h1>
                <h2 className="h1" style={{fontSize: "51px", color: "var(--color-white)", fontWeight: "600"}}>Напишите
                    нам!</h2>
                <FeedbackForm/>
            </div>
            <div className="ElizabethContainer">
                <img src={"./store/Elizabeth2.png"} alt={"Elizabeth2"}/>
                <span className="Elizabeth">Подольск основан <span>5 октября 1781 года</span><br/> Указом императрицы Екатерины II *</span>
            </div>
        </div>
    )
}

export default React.memo(Feedback);