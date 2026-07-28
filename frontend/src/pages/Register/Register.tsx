import { useForm } from "react-hook-form";

const Register = () => {
    return (
        <div>
            <div className="register-container flex justify-center items-center h-screen">
                <h1>Create an Account</h1>
                <form className="register-form">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="input"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="input"/>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" className="input"/>
                    <button type="submit" className="btn">Create an Account</button>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </form>
            </div>
        </div>
    )
}

export default Register;