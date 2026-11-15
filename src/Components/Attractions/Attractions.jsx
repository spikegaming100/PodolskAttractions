import React from "react";
import "./Attractions.css";
import AttractionCard from "../AttractionCard";
import places from "../Places.json";

const Attractions = () => {
    return (
        <div className="Attractions">
            <div className="Wrapper">
                <h1 className="h1" style={{fontSize: "70px", padding: "66px 0"}}>Достопримечательности</h1>
                <div className="Grid">
                    {places.map((place, index) => (
                        <AttractionCard
                            key={index}
                            name={place.Name}
                            descr={place.Descr}
                            photo={place.Photo}
                            id={place.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Attractions)