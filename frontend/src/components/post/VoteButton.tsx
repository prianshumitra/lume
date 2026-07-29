import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { useState } from "react";

interface VoteButtonProps {
    initialVotes?: number;
    onVoteChange?: (newVote: number) => void;
}

const VoteButton = ({ initialVotes = 0, onVoteChange }: VoteButtonProps) => {
    const [votes, setVotes] = useState(initialVotes);
    const [userVote, setUserVote] = useState<number>(0); // 1 for upvote, -1 for downvote, 0 for none

    const handleUpvote = () => {
        if (userVote === 1) {
            setVotes(votes - 1);
            setUserVote(0);
            onVoteChange?.(votes - 1);
        } else {
            const diff = userVote === -1 ? 2 : 1;
            setVotes(votes + diff);
            setUserVote(1);
            onVoteChange?.(votes + diff);
        }
    };

    const handleDownvote = () => {
        if (userVote === -1) {
            setVotes(votes + 1);
            setUserVote(0);
            onVoteChange?.(votes + 1);
        } else {
            const diff = userVote === 1 ? -2 : -1;
            setVotes(votes + diff);
            setUserVote(-1);
            onVoteChange?.(votes + diff);
        }
    };

    return (
        <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1 border border-white/10">
            <button
                onClick={handleUpvote}
                className={`p-1.5 rounded-lg transition-colors ${
                    userVote === 1 
                        ? "text-violet-500 bg-violet-500/10" 
                        : "text-slate-400 hover:text-violet-400 hover:bg-white/5"
                }`}
                aria-label="Upvote"
            >
                <ArrowBigUp className={`w-5 h-5 ${userVote === 1 ? "fill-current" : ""}`} />
            </button>
            
            <span className={`text-sm font-bold min-w-[1.5rem] text-center ${
                userVote === 1 ? "text-violet-500" : userVote === -1 ? "text-red-500" : "text-slate-300"
            }`}>
                {votes}
            </span>

            <button
                onClick={handleDownvote}
                className={`p-1.5 rounded-lg transition-colors ${
                    userVote === -1 
                        ? "text-red-500 bg-red-500/10" 
                        : "text-slate-400 hover:text-red-400 hover:bg-white/5"
                }`}
                aria-label="Downvote"
            >
                <ArrowBigDown className={`w-5 h-5 ${userVote === -1 ? "fill-current" : ""}`} />
            </button>
        </div>
    );
};

export default VoteButton;