import React from "react";

const Status404 = () => {
    return (
        <div style={{width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <h1>404</h1>
            <p>Страница не найдена  </p>
        </div>
    );
};

export default React.memo(Status404);