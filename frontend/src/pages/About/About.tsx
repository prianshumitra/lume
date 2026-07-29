import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { Target, Users } from "lucide-react";

const About = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Header />
            <main className="flex-1 text-white py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-20">
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-6">
                            Where ideas grow.
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Lume is a modern text-first social media platform built for meaningful conversations and thoughtful discussions.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-violet-600/20 flex items-center justify-center text-violet-400">
                                <Target className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold">Our Mission</h2>
                            <p className="text-slate-400 leading-relaxed">
                                To create a space where ideas take center stage. We believe that text is the ultimate medium for depth, nuance, and lasting knowledge.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                                <Users className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold">Community First</h2>
                            <p className="text-slate-400 leading-relaxed">
                                Lume is built for researchers, developers, students, and thinkers who value quality over quantity and substance over fleeting trends.
                            </p>
                        </div>
                    </div>

                    <section className="p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 text-center">
                        <h2 className="text-3xl font-bold mb-6">Join the evolution.</h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Lume is currently in beta. We're building a better way to connect and share knowledge, one word at a time.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-3 rounded-xl bg-violet-600 font-bold hover:bg-violet-700 transition-colors">
                                Get Started
                            </button>
                            <button className="px-8 py-3 rounded-xl border border-white/20 bg-white/5 font-bold hover:bg-white/10 transition-colors">
                                View Roadmap
                            </button>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
