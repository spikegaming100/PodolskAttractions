import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import places from "../Components/Places.json"
import {SvgHeart} from "../Components/SvgIcon";
import "./AttractionView.css"

const AttractionView = () => {
    const { id } = useParams();

    return (
        <div className="Container">
            <div className="Wrapper">
                <Header/>
                <div className="AttractionView">
                    <img src={`/store/attractions/${places[id].Photo || "undefined"}`} alt={places[id].Name || "undefined"}/>
                    <div>
                        <h1 className="h1" style={{fontWeight: 600, fontSize: "29px"}}>{places[id].AltName || places[id].Name}</h1>
                        {places[id] && places[id].Info
                            ? places[id].Info.split("\n\n").map((paragraph, index) => (
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
