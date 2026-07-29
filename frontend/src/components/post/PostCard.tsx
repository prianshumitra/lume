import { MessageSquare, Share2, MoreHorizontal } from "lucide-react";
import VoteButton from "./VoteButton";

interface PostCardProps {
    author: {
        name: string;
        username: string;
        avatar: string;
    };
    content: string;
    timestamp: string;
    votes: number;
    commentCount: number;
}

const PostCard = ({ author, content, timestamp, votes, commentCount }: PostCardProps) => {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                    <img 
                        src={author.avatar} 
                        alt={author.name} 
                        className="h-12 w-12 rounded-full border-2 border-violet-500/20 object-cover"
                    />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-white group-hover:text-violet-400 transition-colors">
                                {author.name}
                            </span>
                            <span className="text-sm text-slate-500">@{author.username}</span>
                        </div>
                        <div className="text-xs text-slate-500 font-medium">{timestamp}</div>
                    </div>
                </div>
                
                <button className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-wrap">
                {content}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-6">
                    <VoteButton initialVotes={votes} />
                    
                    <button className="flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors group/btn">
                        <div className="p-2 rounded-xl group-hover/btn:bg-violet-400/10 transition-colors">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold">{commentCount}</span>
                    </button>

                    <button className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group/btn">
                        <div className="p-2 rounded-xl group-hover/btn:bg-blue-400/10 transition-colors">
                            <Share2 className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold">Share</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;