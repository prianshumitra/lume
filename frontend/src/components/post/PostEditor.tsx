import { useState } from "react";
import { Image, MapPin, Smile, Send } from "lucide-react";

const PostEditor = () => {
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim()) return;
        
        // Handle post submission logic here
        console.log("Submitting post:", content);
        setContent("");
    };

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8 shadow-xl backdrop-blur-sm">
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <img 
                        src="https://ui-avatars.com/api/?background=7C3AED&color=fff&name=Prianshu" 
                        alt="User" 
                        className="h-12 w-12 rounded-full border-2 border-violet-500/20 object-cover"
                    />
                    <div className="flex-1">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="What's on your mind? Share an idea..."
                            className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-500 text-lg resize-none min-h-[120px] pt-2"
                        />
                        
                        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-2">
                            <div className="flex items-center gap-2">
                                <button type="button" className="p-2 text-violet-400 hover:bg-violet-400/10 rounded-xl transition-colors" title="Add Image">
                                    <Image className="w-5 h-5" />
                                </button>
                                <button type="button" className="p-2 text-violet-400 hover:bg-violet-400/10 rounded-xl transition-colors" title="Add Location">
                                    <MapPin className="w-5 h-5" />
                                </button>
                                <button type="button" className="p-2 text-violet-400 hover:bg-violet-400/10 rounded-xl transition-colors" title="Add Emoji">
                                    <Smile className="w-5 h-5" />
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={!content.trim()}
                                className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-violet-900/20"
                            >
                                <Send className="w-4 h-4" />
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PostEditor;