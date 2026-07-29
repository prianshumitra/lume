import Header from "../../components/common/Header";
import Sidebar from "../../components/common/Sidebar";
import Footer from "../../components/common/Footer";
import { Send, Search } from "lucide-react";

const Messages = () => {
    const contacts = [
        { id: 1, name: "Sarah Chen", lastMessage: "The new post looks great!", time: "2m ago", avatar: "https://ui-avatars.com/api/?background=10B981&color=fff&name=Sarah+Chen", active: true },
        { id: 2, name: "Marcus Thorne", lastMessage: "Let's discuss that AI ethics idea.", time: "1h ago", avatar: "https://ui-avatars.com/api/?background=F59E0B&color=fff&name=Marcus+Thorne", active: false },
        { id: 3, name: "Elena Rodriguez", lastMessage: "Welcome to the community!", time: "Yesterday", avatar: "https://ui-avatars.com/api/?background=EC4899&color=fff&name=Elena+Rodriguez", active: false },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 text-white border-l border-white/10 flex">
                    {/* Contacts List */}
                    <div className="w-full md:w-80 border-r border-white/10 flex flex-col">
                        <div className="p-4 border-b border-white/10">
                            <h2 className="text-xl font-bold mb-4">Messages</h2>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search messages..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
                                />
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {contacts.map((contact) => (
                                <div
                                    key={contact.id}
                                    className={`p-4 flex items-center gap-3 hover:bg-white/5 cursor-pointer transition-colors ${contact.active ? 'bg-white/5 border-r-2 border-violet-500' : ''}`}
                                >
                                    <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full border border-white/10" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="font-bold text-sm truncate">{contact.name}</h3>
                                            <span className="text-[10px] text-slate-500">{contact.time}</span>
                                        </div>
                                        <p className="text-xs text-slate-400 truncate">{contact.lastMessage}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat Window - Hidden on small screens if needed */}
                    <div className="hidden md:flex flex-1 flex-col">
                        <div className="p-4 border-b border-white/10 flex items-center gap-3">
                            <img src={contacts[0].avatar} alt={contacts[0].name} className="w-10 h-10 rounded-full border border-white/10" />
                            <div>
                                <h3 className="font-bold text-sm">{contacts[0].name}</h3>
                                <p className="text-[10px] text-emerald-400">Online</p>
                            </div>
                        </div>
                        <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-gradient-to-b from-transparent to-white/[0.02]">
                            <div className="flex justify-start">
                                <div className="max-w-[70%] bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/10 text-sm text-slate-300">
                                    Hey! I saw your recent post about distributed systems. Really insightful.
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="max-w-[70%] bg-violet-600 p-3 rounded-2xl rounded-tr-none text-sm text-white shadow-lg shadow-violet-900/20">
                                    Thanks, Sarah! Glad you found it useful. I'm planning to write a follow-up soon.
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-white/10">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-4 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-violet-600 rounded-xl hover:bg-violet-500 transition-colors">
                                    <Send className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Messages;
