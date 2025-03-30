import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import React from "react";
import Main from "./Pages/Main";

import Status404 from "./Pages/Status404"
import MyPlaces from "./Pages/MyPlaces";
import { ScrollProvider } from "./Components/ScrollContext"
import AttracionView from "./Pages/AttracionView";

function App() {
    return (
        <Router>
            <ScrollProvider>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/my-places" element={<MyPlaces />} />
                    <Route path="/attraction/:id" element={<AttracionView />} />
                    <Route path="*" element={<Status404 />}/>
                </Routes>
            </ScrollProvider>
        </Router>
    );
}

export default App;
