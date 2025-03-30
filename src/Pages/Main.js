import React, {useEffect} from "react";
import Header from "../Components/Header/Header";
import Greetings from "../Components/Greetings/Greetings"
import About from "../Components/About/About";
import Attractions from "../Components/Attractions/Attractions";
import Feedback from "../Components/Feedback/Feedback";
import { useScroll} from "../Components/ScrollContext";

const Main = () => {
    const { aboutRef, attractionsRef, feedbackRef } = useScroll();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#about" && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (hash === "#attractions" && attractionsRef.current) {
            attractionsRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (hash === "#feedback" && feedbackRef.current) {
            feedbackRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div className="Container">
            <div style={{position: "absolute", zIndex: 2}}>
                <Header scrollToSection={{ aboutRef, attractionsRef, feedbackRef }}/>
            </div>
            <Greetings />
            <div ref={aboutRef} style={{width: "100%"}}>
                <About/>
            </div>
            <div ref={attractionsRef}>
                <Attractions />
            </div>
            <div ref={feedbackRef} style={{width: "100%"}}>
                <Feedback />
            </div>
            <Header scrollToSection={{ aboutRef, attractionsRef, feedbackRef }}/>
        </div>
    )
}

export default React.memo(Main);