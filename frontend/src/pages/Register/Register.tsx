import loginImage from "../../assets/login.jpg";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";


const Register = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex flex-1 flex-col lg:flex-row">
                {/* Left Image - Hidden on mobile, takes 50% on desktop */}
                <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
                    <img
                        src={loginImage}
                        alt="Register Illustration"
                        className="absolute inset-0 w-full h-full object-cover scale-111"
                    />
                    <div className="absolute inset-0 bg-violet-900/20 mix-blend-multiply" />
                </div>

                {/* Right Side - Full width on mobile, 50% on desktop */}
                <div className="flex-1 lg:w-1/2 flex items-center justify-center bg-[linear-gradient(135deg,#020617_0%,#111827_35%,#312E81_70%,#581C87_100%)] p-6 md:p-12">

                    {/* Register Card */}
                    <div className="w-full max-w-[460px] rounded-[30px] border border-white/20 bg-white/95 backdrop-blur-sm p-8 md:p-10 shadow-2xl">

                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Create Account
                            </h1>
                            <p className="mt-2 text-slate-500 font-medium">
                                Join the community today.
                            </p>
                        </div>

                        <form className="space-y-5">

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email address"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                                >
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm your password"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition"
                                />
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="w-full mt-2 rounded-xl bg-violet-600 py-3.5 text-base md:text-lg font-bold text-white shadow-lg shadow-violet-500/30 transition duration-300 hover:bg-violet-700 active:scale-[0.98]"
                            >
                                Create Account
                            </button>

                        </form>

                        {/* Login Link */}
                        <p className="mt-8 text-center text-sm font-medium text-slate-500">
                            Already have an account?{" "}
                            <span className="cursor-pointer font-bold text-violet-600 transition hover:text-violet-800 underline-offset-4 hover:underline">
                                Login
                            </span>
                        </p>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;