import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SteamStats from "./pages/SteamStats";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/projects/steamstats"
                    element={<SteamStats />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;