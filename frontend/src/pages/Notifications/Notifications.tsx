import Header from "../../components/common/Header";
import Sidebar from "../../components/common/Sidebar";
import Footer from "../../components/common/Footer";
import { Heart, MessageSquare, UserPlus } from "lucide-react";

const Notifications = () => {
    const notifications = [
        { id: 1, type: "like", user: "Sarah Chen", content: "liked your post about Distributed Systems", time: "2m ago", icon: Heart, iconColor: "text-rose-500" },
        { id: 2, type: "comment", user: "Marcus Thorne", content: "replied to your post: 'Great insights!'", time: "1h ago", icon: MessageSquare, iconColor: "text-blue-500" },
        { id: 3, type: "follow", user: "Elena Rodriguez", content: "started following you", time: "3h ago", icon: UserPlus, iconColor: "text-violet-500" },
        { id: 4, type: "like", user: "David Miller", content: "liked your comment on #EthicalAI", time: "5h ago", icon: Heart, iconColor: "text-rose-500" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 text-white border-l border-white/10 p-6">
                    <div className="max-w-2xl mx-auto">
                        <header className="flex justify-between items-center mb-8">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Notifications
                            </h1>
                            <button className="text-xs font-bold text-violet-400 hover:text-violet-300 transition-colors">
                                Mark all as read
                            </button>
                        </header>

                        <div className="space-y-4">
                            {notifications.map((notification) => (
                                <div
                                    key={notification.id}
                                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer flex items-start gap-4"
                                >
                                    <div className={`mt-1 p-2 rounded-xl bg-white/5 ${notification.iconColor}`}>
                                        <notification.icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-slate-200">
                                            <span className="font-bold text-white">{notification.user}</span> {notification.content}
                                        </p>
                                        <span className="text-[10px] text-slate-500 uppercase tracking-wider mt-1 block">
                                            {notification.time}
                                        </span>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-violet-500 mt-2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Notifications;
