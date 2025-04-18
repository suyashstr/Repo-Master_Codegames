import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import store from "./redux/store.js"
import Profile from "./pages/Profile";
import Rules from "./pages/Rules";
import Cbasic from "./Cources/Cbasic"
import Cards from "./pages/Cards";
import Certificate from "./pages/Certificate";
import Play from "./Game/Play";
import Main from "./pages/Main";
import LoadingSpinner from "./Loadingspinner";
import Ranking from "./pages/Ranking";
import Learn from "./pages/Learn.jsx";
import Cpp from "./Cources/Cpp.jsx";
import Pyhton from "./Cources/Pyhton.jsx";

function App() {



    return (
        <Provider store={store}>
            {/* <Main /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/rule" element={<Rules />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/cbasics" element={<Cbasic />} />
                    <Route path="/cpp" element={<Cpp />} />
                    <Route path="/python" element={<Pyhton />} />
                    <Route path="/cards" element={<Cards />} />
                    <Route path="/certificate" element={<Certificate />} />
                    <Route path="/play" element={<Play />} />
                    <Route path="/rank" element={<Ranking />} />
                </Routes>
            </BrowserRouter>
            <LoadingSpinner />
        </Provider>
    )
}

export default App;