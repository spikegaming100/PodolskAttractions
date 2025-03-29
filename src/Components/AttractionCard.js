import React from "react";

const AttractionCard = ({ name, descr, photo }) => {
    return (
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
    );
};

export default React.memo(AttractionCard);
