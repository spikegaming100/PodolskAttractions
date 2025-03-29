import "./About.css"
import React from "react";

const About = () => {
    return (
        <div className="About">
            <div>
                <img src={"./store/Faces.png"} alt="Faces"/>
            </div>
            <div className="AboutContainer">
                <h1 className="h1" style={{fontSize: "80px", color: "var(--color-white)"}}>Кто мы?</h1>
                <span className="AboutText">Мы - студенты Российского государственного университета туризма и сервиса. Мы обучаемся на факультете Цифровых сервисов для бизнеса, и наша миссия - развивать цифровую среду на территории Российской Федерации, включая индустрию туризма и образования.</span>
                <span className="AboutText">Каждый из нас родился и вырос в Подольске, это - наша Родина, наш дом. Подольск невероятно красив и интересен, но не так популярен, как другие города России.</span>
                <span className="AboutText">Наша цель - сделать Подольск одним из самых привлекательных и узнаваемых городов Подмосковья, именно поэтому мы разработали сайт с нескучными и занимательными местами города. </span>
                <span className="AboutText2">Наслаждайтесь!</span>
            </div>
        </div>
)
}

export default React.memo(About);