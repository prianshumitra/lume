const Header = () => {
    return (
        <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-full mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-white cursor-pointer ml-0">
                    LUME
                </h1>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a
                        href="/home"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Home
                    </a>

                    <a
                        href="/about"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        About
                    </a>

                    <a
                        href="/contact"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Contact
                    </a>
                </nav>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 rounded-lg text-gray-300 hover:text-white transition">
                        Login
                    </button>

                    <button className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;