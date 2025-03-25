import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import React from "react";
import Main from "./Pages/Main";
import PreviewAttraction from "./Pages/PreviewAttraction"
import Status404 from "./Pages/Status404"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/view/" element={<PreviewAttraction/>} />
          <Route path="*" element={<Status404/>} />
        </Routes>
      </Router>
  );
}

export default App;
