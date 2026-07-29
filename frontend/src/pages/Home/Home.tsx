import Header from "../../components/common/Header";
import Sidebar from "../../components/common/Sidebar";
import Footer from "../../components/common/Footer";
import PostCard from "../../components/post/PostCard";
import PostEditor from "../../components/post/PostEditor";

const Home = () => {
    const mockPosts = [
        {
            id: 1,
            author: {
                name: "Sarah Chen",
                username: "sarahc",
                avatar: "https://ui-avatars.com/api/?background=10B981&color=fff&name=Sarah+Chen"
            },
            content: "Just started using Lume for documenting my research on distributed systems. The text-first focus is exactly what I needed. #DistributedSystems #TechIdeas",
            timestamp: "2 hours ago",
            votes: 42,
            commentCount: 5
        },
        {
            id: 2,
            author: {
                name: "Marcus Thorne",
                username: "marcust",
                avatar: "https://ui-avatars.com/api/?background=F59E0B&color=fff&name=Marcus+Thorne"
            },
            content: "What if we thought about social media as a garden rather than a stream? A place to cultivate long-term ideas instead of just catching fleeting moments. That's the vibe I'm getting here.",
            timestamp: "5 hours ago",
            votes: 128,
            commentCount: 12
        },
        {
            id: 3,
            author: {
                name: "Elena Rodriguez",
                username: "elenar",
                avatar: "https://ui-avatars.com/api/?background=EC4899&color=fff&name=Elena+Rodriguez"
            },
            content: "Excited to share that I'm starting a new community on Lume focused on ethical AI development. Looking for contributors and thinkers who want to build a better future together! 🚀",
            timestamp: "Yesterday",
            votes: 89,
            commentCount: 8
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Header/>
            
            <div className="flex flex-1">
                {/* Sidebar - fixed/sticky position */}
                <Sidebar />

                {/* Main Content Area */}
                <main className="flex-1 p-6 text-white border-l border-white/10">
                    <div className="max-w-4xl mx-auto">
                        <header className="flex justify-between items-center mb-8">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Home Feed
                            </h1>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold hover:bg-white/10 transition-colors">
                                    Latest
                                </button>
                                <button className="px-4 py-2 rounded-xl bg-violet-600 text-sm font-semibold hover:bg-violet-700 transition-colors">
                                    Trending
                                </button>
                            </div>
                        </header>
                        
                        <PostEditor />

                        <div className="grid gap-6 pb-12">
                            {mockPosts.map((post) => (
                                <PostCard 
                                    key={post.id}
                                    author={post.author}
                                    content={post.content}
                                    timestamp={post.timestamp}
                                    votes={post.votes}
                                    commentCount={post.commentCount}
                                />
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