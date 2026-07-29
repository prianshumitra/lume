import Header from "../../components/common/Header";
import Sidebar from "../../components/common/Sidebar";
import Footer from "../../components/common/Footer";
import PostCard from "../../components/post/PostCard";
import PostEditor from "../../components/post/PostEditor";
import { Edit3, MapPin, Calendar, Link as LinkIcon } from "lucide-react";

const Profile = () => {
    // Mock user data
    const user = {
        name: "Prianshu Mitra",
        username: "prianshu",
        bio: "Computer Science Engineer passionate about Full-Stack Development and Backend Engineering. Building Lume to grow ideas.",
        location: "India",
        joinedDate: "July 2026",
        website: "https://github.com/prianshu",
        avatar: "https://ui-avatars.com/api/?background=7C3AED&color=fff&name=Prianshu&size=256",
        stats: {
            posts: 12,
            followers: 450,
            following: 180
        }
    };

    const mockPosts = [
        {
            id: 1,
            content: "This is one of my thoughts shared on Lume. The text-first approach really helps focus on the ideas rather than just the visual noise. Excited to see how this evolves #Lume #IdeasGrow",
            timestamp: "2 days ago",
            votes: 24,
            commentCount: 3
        },
        {
            id: 2,
            content: "Building Lume has been an incredible journey. Focus on minimalism and developer experience is what makes it stand out. Can't wait for the next features! 🚀",
            timestamp: "5 days ago",
            votes: 56,
            commentCount: 8
        },
        {
            id: 3,
            content: "Text is the ultimate medium for ideas. It allows for nuance and depth that media-heavy platforms often lack. #Philosophy #Ideas",
            timestamp: "1 week ago",
            votes: 38,
            commentCount: 2
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Header />

            <div className="flex flex-1">
                <Sidebar />

                <main className="flex-1 text-white border-l border-white/10">
                    {/* Banner */}
                    <div className="h-48 bg-gradient-to-r from-violet-900 to-indigo-900 w-full" />

                    <div className="max-w-4xl mx-auto px-6">
                        {/* Profile Info */}
                        <div className="relative -mt-20 mb-8">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#020617] bg-slate-800 object-cover shadow-2xl"
                                    />
                                    <div className="mb-2 text-center md:text-left">
                                        <h1 className="text-3xl font-bold">{user.name}</h1>
                                        <p className="text-slate-400">@{user.username}</p>
                                    </div>
                                </div>
                                <button className="mb-2 flex items-center gap-2 px-6 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-colors font-medium">
                                    <Edit3 className="w-4 h-4" />
                                    Edit Profile
                                </button>
                            </div>

                            <div className="mt-6 space-y-4">
                                <p className="text-lg text-slate-200 leading-relaxed max-w-2xl">
                                    {user.bio}
                                </p>

                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400 font-medium">
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4" />
                                        {user.location}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        Joined {user.joinedDate}
                                    </div>
                                    <a href={user.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-violet-400 hover:underline">
                                        <LinkIcon className="w-4 h-4" />
                                        {user.website.replace("https://", "")}
                                    </a>
                                </div>

                                <div className="flex items-center gap-8 py-4 border-y border-white/10 mt-6">
                                    <div className="flex gap-1.5 items-center">
                                        <span className="font-bold text-white text-lg">{user.stats.posts}</span>
                                        <span className="text-slate-400">Posts</span>
                                    </div>
                                    <div className="flex gap-1.5 items-center">
                                        <span className="font-bold text-white text-lg">{user.stats.followers}</span>
                                        <span className="text-slate-400">Followers</span>
                                    </div>
                                    <div className="flex gap-1.5 items-center">
                                        <span className="font-bold text-white text-lg">{user.stats.following}</span>
                                        <span className="text-slate-400">Following</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Tabs */}
                        <div className="border-b border-white/10 mb-8">
                            <div className="flex gap-8">
                                <button className="pb-4 border-b-2 border-violet-500 font-bold text-white">Posts</button>
                                <button className="pb-4 text-slate-400 hover:text-white transition-colors font-medium">Replies</button>
                                <button className="pb-4 text-slate-400 hover:text-white transition-colors font-medium">Highlights</button>
                                <button className="pb-4 text-slate-400 hover:text-white transition-colors font-medium">Media</button>
                            </div>
                        </div>

                        {/* Feed */}
                        <div className="space-y-6 pb-20">
                            <PostEditor />
                            <div className="grid gap-6">
                                {mockPosts.map((post) => (
                                    <PostCard 
                                        key={post.id}
                                        author={{
                                            name: user.name,
                                            username: user.username,
                                            avatar: user.avatar
                                        }}
                                        content={post.content}
                                        timestamp={post.timestamp}
                                        votes={post.votes}
                                        commentCount={post.commentCount}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;