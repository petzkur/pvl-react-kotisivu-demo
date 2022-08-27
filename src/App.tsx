import React, { useState } from "react";
import "./App.css";
import Router, { PageRoute } from "./pages/Router";

function App() {
    const [page, navigate] = useState("home");

    const navigateHome = () => navigate("home");
    const navigateKuvat = () => navigate("kuvat");
    const navigateReseptit = () => navigate("reseptit");

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={navigateHome}>Home</button>
                <button onClick={navigateKuvat}>Kuvat</button>
                <button onClick={navigateReseptit}>Reseptit</button>
            </header>
            <main>
                <Router page={page as PageRoute} />
            </main>
        </div>
    );
}

export default App;
