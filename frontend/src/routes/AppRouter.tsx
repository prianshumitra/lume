import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Register from "../pages/Register/Register.tsx";
import Login from "../pages/Login/Login.tsx";
import {ROUTES} from "../constants/routes.ts";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;