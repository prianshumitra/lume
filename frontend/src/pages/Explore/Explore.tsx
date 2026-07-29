import Header from "../../components/common/Header";
import Sidebar from "../../components/common/Sidebar";
import Footer from "../../components/common/Footer";
import { Search } from "lucide-react";

const Explore = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 text-white border-l border-white/10 p-6">
                    <div className="max-w-4xl mx-auto">
                        <header className="mb-8">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-6">
                                Explore
                            </h1>
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search ideas, people, or communities..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                />
                            </div>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-[24px] bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20">
                                <h2 className="text-xl font-bold mb-2 text-violet-300">Trending Topics</h2>
                                <ul className="space-y-3 mt-4">
                                    <li className="flex justify-between items-center text-slate-300 hover:text-white cursor-pointer">
                                        <span>#DistributedSystems</span>
                                        <span className="text-xs bg-white/10 px-2 py-1 rounded-full">1.2k posts</span>
                                    </li>
                                    <li className="flex justify-between items-center text-slate-300 hover:text-white cursor-pointer">
                                        <span>#EthicalAI</span>
                                        <span className="text-xs bg-white/10 px-2 py-1 rounded-full">850 posts</span>
                                    </li>
                                    <li className="flex justify-between items-center text-slate-300 hover:text-white cursor-pointer">
                                        <span>#Minimalism</span>
                                        <span className="text-xs bg-white/10 px-2 py-1 rounded-full">620 posts</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10">
                                <h2 className="text-xl font-bold mb-2 text-slate-200">Suggested Communities</h2>
                                <div className="space-y-4 mt-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold">D</div>
                                        <div>
                                            <p className="font-bold text-sm">Designers Hub</p>
                                            <p className="text-xs text-slate-500">12.5k members</p>
                                        </div>
                                        <button className="ml-auto text-xs font-bold text-violet-400 hover:text-violet-300">Join</button>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold">R</div>
                                        <div>
                                            <p className="font-bold text-sm">Rustaceans</p>
                                            <p className="text-xs text-slate-500">8.2k members</p>
                                        </div>
                                        <button className="ml-auto text-xs font-bold text-violet-400 hover:text-violet-300">Join</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Explore;
