import { useState } from 'react';
import { PiEye, PiEyeSlash } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState("");
    const router = useNavigate()

    const _signUp = () => {
        router('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
        } else {
            setError("");
            // Handle signup logic here
            console.log("User signed up:", { name, email, phone, password });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">

                <div className="flex justify-center mb-4">
                    <img
                        src='/public/Pocket-X-Logo-PNG.png'  // Replace with your logo URL or import
                        alt="pocketX"
                        className="h-auto w-24"
                    />
                </div>

                <h2 className="text-center text-2xl font-semibold mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center">
                            {showPassword ? (
                                <PiEyeSlash
                                    className="h-5 w-5 text-gray-500 cursor-pointer mt-4"
                                    onClick={() => setShowPassword(false)}
                                />
                            ) : (
                                <PiEye
                                    className="h-5 w-5 text-gray-500 cursor-pointer mt-4"
                                    onClick={() => setShowPassword(true)}
                                />
                            )}
                        </div>
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center">
                            {showConfirmPassword ? (
                                <PiEyeSlash
                                    className="h-5 w-5 text-gray-500 cursor-pointer mt-4"
                                    onClick={() => setShowConfirmPassword(false)}
                                />
                            ) : (
                                <PiEye
                                    className="h-5 w-5 text-gray-500 cursor-pointer mt-4"
                                    onClick={() => setShowConfirmPassword(true)}
                                />
                            )}
                        </div>
                    </div>

                    {error && <span className='text-xs font-semibold text-red-500'>{error}</span>}

                    <div className="mb-6 mt-6">
                        <label className="inline-flex items-center">
                            <input
                                type='checkbox'
                                checked={isChecked}
                                name='checkbox'
                                onChange={(e) => setIsChecked(e.target.checked)}
                                required
                            />
                            <span className="ml-2 text-gray-700 text-sm">
                                I agree to the <a href="#" className="text-blue-500">Terms and Conditions</a>
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            onClick={_signUp}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;