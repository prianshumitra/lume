import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { ROUTES } from "../../constants/routes";

const NotFound = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Header />
            <main className="flex-1 flex items-center justify-center p-6 text-center">
                <div className="max-w-md">
                    <div className="w-20 h-20 rounded-[30px] bg-violet-600/20 text-violet-400 flex items-center justify-center mx-auto mb-8">
                        <AlertCircle className="w-10 h-10" />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-4">404</h1>
                    <h2 className="text-2xl font-bold text-slate-200 mb-6">Page Not Found</h2>
                    <p className="text-slate-400 mb-10 leading-relaxed">
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>
                    <Link
                        to={ROUTES.HOME}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-violet-600 text-white font-bold shadow-lg shadow-violet-900/20 hover:bg-violet-700 transition-all active:scale-[0.98]"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
