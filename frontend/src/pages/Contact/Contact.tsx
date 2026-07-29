import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Header />
            <main className="flex-1 text-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <header className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-4">
                            Get in touch
                        </h1>
                        <p className="text-slate-400">
                            Have questions or feedback? We'd love to hear from you.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-violet-600/20 text-violet-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Email</p>
                                    <p className="text-slate-200">hello@lume.app</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Support</p>
                                    <p className="text-slate-200">support.lume.app</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-emerald-600/20 text-emerald-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Office</p>
                                    <p className="text-slate-200">Global / Remote</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 p-8 md:p-10 rounded-[40px] bg-white/5 border border-white/10">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-300">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-300">Email</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="How can we help?"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300">Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us more..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-none"
                                    ></textarea>
                                </div>
                                <button className="w-full py-4 rounded-xl bg-violet-600 font-bold flex items-center justify-center gap-2 hover:bg-violet-700 transition-colors">
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
