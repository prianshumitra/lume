import Header from "../../components/common/Header";
import Sidebar from "../../components/common/Sidebar";
import Footer from "../../components/common/Footer";
import PostCard from "../../components/post/PostCard";
import { Bookmark } from "lucide-react";

const Saved = () => {
    const savedPosts = [
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
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 text-white border-l border-white/10 p-6">
                    <div className="max-w-4xl mx-auto">
                        <header className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-2xl bg-violet-600/20 text-violet-400">
                                <Bookmark className="w-6 h-6" />
                            </div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Saved Posts
                            </h1>
                        </header>

                        {savedPosts.length > 0 ? (
                            <div className="grid gap-6 pb-20">
                                {savedPosts.map((post) => (
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
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                                <Bookmark className="w-16 h-16 mb-4 opacity-20" />
                                <p className="text-xl font-medium">No saved posts yet</p>
                                <p className="text-sm">Posts you save will appear here.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Saved;
