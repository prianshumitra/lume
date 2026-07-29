import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                            Lume
                        </h2>

                        <p className="text-violet-400 font-medium mt-2">
                            Share. Connect. Grow.
                        </p>

                        <p className="text-slate-400 text-base mt-4 leading-relaxed">
                            A space where ideas grow and connections flourish.
                            Join our community of developers.
                        </p>

                        <p className="text-slate-500 text-sm mt-6">
                            hello@lume.app
                        </p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        {/* Platform */}
                        <div>
                            <h3 className="text-white font-semibold mb-6">
                                Platform
                            </h3>

                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li>
                                    <a
                                        href="/"
                                        className="hover:text-violet-400 transition-colors"
                                    >
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/about"
                                        className="hover:text-violet-400 transition-colors"
                                    >
                                        About Us
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/features"
                                        className="hover:text-violet-400 transition-colors"
                                    >
                                        Features
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-white font-semibold mb-6">
                                Resources
                            </h3>

                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li>
                                    <a
                                        href="/blog"
                                        className="hover:text-violet-400 transition-colors"
                                    >
                                        Blog
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/faq"
                                        className="hover:text-violet-400 transition-colors"
                                    >
                                        FAQ
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/help"
                                        className="hover:text-violet-400 transition-colors"
                                    >
                                        Help Center
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-white font-semibold mb-6">
                                Support
                            </h3>

                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li>
                                    <a
                                        href="/contact"
                                        className="hover:text-violet-400 transition-colors"
                                    >
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/privacy"
                                        className="hover:text-violet-400 transition-colors"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/terms"
                                        className="hover:text-violet-400 transition-colors"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Lume. Crafted for developers
                        worldwide.
                    </p>

                    <div className="flex items-center gap-5 text-xl text-slate-400">
                        <a
                            href="#"
                            className="hover:text-violet-400 transition-colors"
                            aria-label="Twitter"
                        >
                            <FaXTwitter />
                        </a>

                        <a
                            href="#"
                            className="hover:text-violet-400 transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            className="hover:text-violet-400 transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="#"
                            className="hover:text-violet-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;