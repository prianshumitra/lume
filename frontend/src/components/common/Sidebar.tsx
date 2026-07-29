import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import {
    Home,
    Compass,
    MessageCircle,
    Bell,
    Bookmark,
    User,
    LogOut,
} from "lucide-react";

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        {
            icon: Home,
            label: "Home",
            path: ROUTES.HOME,
        },
        {
            icon: Compass,
            label: "Explore",
            path: "/explore",
        },
        {
            icon: MessageCircle,
            label: "Messages",
            path: "/messages",
        },
        {
            icon: Bell,
            label: "Notifications",
            path: "/notifications",
        },
        {
            icon: Bookmark,
            label: "Saved",
            path: "/saved",
        },
        {
            icon: User,
            label: "Profile",
            path: "/profile",
        },
    ];

    return (
        <aside className="sticky top-16 hidden h-[calc(100vh-64px)] w-72 flex-col border-r border-white/10 bg-[#020617] lg:flex">
            {/* Navigation */}
            <nav className="custom-scrollbar flex-1 space-y-2 overflow-y-auto p-5">
                {menuItems.map((item) => {
                    const active = location.pathname === item.path;

                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`group flex items-center gap-4 rounded-2xl px-5 py-3 transition-all duration-300 ${
                                active
                                    ? "bg-violet-700 text-white shadow-lg shadow-violet-900/30"
                                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                            }`}
                        >
                            <item.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />

                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Profile */}
            <div className="border-t border-white/10 p-5">
                <div className="mb-5 flex items-center gap-4 rounded-2xl bg-white/5 p-4">
                    <img
                        src="https://ui-avatars.com/api/?background=7C3AED&color=fff&name=Prianshu"
                        alt="Profile"
                        className="h-12 w-12 rounded-full border-2 border-violet-500 object-cover"
                    />

                    <div>
                        <h2 className="font-semibold text-white">
                            Prianshu
                        </h2>

                        <p className="text-sm text-slate-400">
                            @prianshu
                        </p>
                    </div>
                </div>

                <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-500/10 px-5 py-3 text-red-400 transition hover:bg-red-500 hover:text-white">
                    <LogOut className="h-5 w-5" />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;