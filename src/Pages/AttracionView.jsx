import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import places from "../Components/Places.json"
import {SvgHeart} from "../Components/SvgIcon";
import Status404 from "./Status404";
import "./AttractionView.css"

const AttractionView = () => {
    const { id } = useParams();
    const place = places[id];

    if (!place) {
        return <Status404 />;
    }

    return (
        <div className="Container">
            <div className="Wrapper">
                <Header/>
                <div className="AttractionView">
                    <img src={`/store/attractions/${place.Photo || "undefined"}`} alt={place.Name || "undefined"}/>
                    <div>
                        <h1 className="h1" style={{fontWeight: 600, fontSize: "29px"}}>{place.AltName || place.Name}</h1>
                        {place.Info
                            ? place.Info.split("\n\n").map((paragraph, index) => (
                                <p className="paragraph" key={index}>{paragraph}</p>
                            ))
                            : "undefined"}
                        <SvgHeart id={id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(AttractionView);
