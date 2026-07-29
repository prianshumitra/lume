import {Link, useLocation} from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Header = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === ROUTES.LOGIN;
    const isRegisterPage = location.pathname === ROUTES.REGISTER;

    return (
        <header className="bg-[#020617] border-b border-white/10 sticky top-0 z-50">
            <div className="max-w-full mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to={ROUTES.HOME} className="flex items-center gap-3 cursor-pointer">
                    <img 
                        src="/headerlogo.png" 
                        alt="Lume Logo" 
                        className="h-8 w-auto"
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        to={ROUTES.HOME}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <Link to={ROUTES.LOGIN} className="text-gray-300 hover:text-white transition-colors">
                        <button className={`px-4 py-2 rounded-lg transition ${
                            isLoginPage 
                                ? "bg-white text-black font-semibold hover:bg-gray-200" 
                                : "text-gray-300 hover:text-white"
                        }`}>
                            Login
                        </button>
                    </Link>

                    <Link to={ROUTES.REGISTER} className="text-gray-300 hover:text-white transition-colors">
                        <button className={`px-4 py-2 rounded-lg transition ${
                            isRegisterPage 
                                ? "bg-white text-black font-semibold hover:bg-gray-200" 
                                : "text-gray-300 hover:text-white"
                        }`}>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;