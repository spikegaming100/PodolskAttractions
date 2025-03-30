import React from "react";
import {Link} from "react-router-dom";

const AttractionCard = ({ name, descr, photo, id }) => {
    return (
        <Link to={`/attraction/${id}`}>
        <div className="CardContainer">
            <div
                className="CardPhoto"
                style={{
                    backgroundImage: `url('./store/attractions/preview/${photo}')`,
                }}
            />
            <div className="CardDescr">
                <span className="CardName">{name || "Placeholder"}</span>
                <span className="CardDescrSub">{descr || ""}</span>
            </div>
        </div>
        </Link>
    );
};

export default React.memo(AttractionCard);
