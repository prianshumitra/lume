import Header from "../../components/common/Header";
import Sidebar from "../../components/common/Sidebar";
import Footer from "../../components/common/Footer";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Header/>
            
            <div className="flex flex-1">
                {/* Sidebar - fixed/sticky position */}
                <Sidebar />

                {/* Main Content Area */}
                <main className="flex-1 p-6 text-white">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-6">Home Feed</h1>
                        
                        {/* Placeholder for content */}
                        <div className="grid gap-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-10 w-10 rounded-full bg-violet-500" />
                                        <div>
                                            <div className="font-semibold">User {i}</div>
                                            <div className="text-sm text-slate-400">@user{i}</div>
                                        </div>
                                    </div>
                                    <p className="text-slate-300">
                                        This is a placeholder post content to show how the layout looks with the sidebar and header. 
                                        Lume is where ideas grow!
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default Home;