import { MoreHorizontal } from "lucide-react";
import VoteButton from "./VoteButton";

interface CommentCardProps {
    author: {
        name: string;
        username: string;
        avatar: string;
    };
    content: string;
    timestamp: string;
    votes: number;
}

const CommentCard = ({ author, content, timestamp, votes }: CommentCardProps) => {
    return (
        <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                    <img 
                        src={author.avatar} 
                        alt={author.name} 
                        className="h-8 w-8 rounded-full border border-violet-500/20 object-cover"
                    />
                    <div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-bold text-white hover:text-violet-400 transition-colors">
                                {author.name}
                            </span>
                            <span className="text-slate-500">@{author.username}</span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{timestamp}</div>
                    </div>
                </div>
                
                <button className="p-1 text-slate-500 hover:text-white rounded-full transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4 pl-11">
                {content}
            </p>

            <div className="pl-11">
                <VoteButton initialVotes={votes} />
            </div>
        </div>
    );
};

export default CommentCard;