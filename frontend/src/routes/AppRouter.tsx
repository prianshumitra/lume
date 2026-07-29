import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Register from "../pages/Register/Register.tsx";
import Login from "../pages/Login/Login.tsx";
import Profile from "../pages/Profile/Profile.tsx";
import Explore from "../pages/Explore/Explore.tsx";
import Messages from "../pages/Messages/Messages.tsx";
import Notifications from "../pages/Notifications/Notifications.tsx";
import Saved from "../pages/Saved/Saved.tsx";
import About from "../pages/About/About.tsx";
import Contact from "../pages/Contact/Contact.tsx";
import Posts from "../pages/Posts/Posts.tsx";
import NotFound from "../pages/NotFound/NotFound.tsx";
import {ROUTES} from "../constants/routes.ts";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.PROFILE} element={<Profile />} />
                <Route path={ROUTES.EXPLORE} element={<Explore />} />
                <Route path={ROUTES.MESSAGES} element={<Messages />} />
                <Route path={ROUTES.NOTIFICATIONS} element={<Notifications />} />
                <Route path={ROUTES.SAVED} element={<Saved />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.CONTACT} element={<Contact />} />
                <Route path={ROUTES.POSTS} element={<Posts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;