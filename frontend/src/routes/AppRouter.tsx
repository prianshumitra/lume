import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register/Register.tsx";
import {ROUTES} from "../constants/routes.ts";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;