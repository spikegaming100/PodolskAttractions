import Header from "../Components/Header/Header";
import React from "react";

const MyPlaces = () => {
    return (
        <div className="Container">
            <div className="Wrapper">
                <Header/>
            </div>
        </div>
    )
}

export default React.memo(MyPlaces)