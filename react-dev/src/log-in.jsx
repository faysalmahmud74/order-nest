import { useState } from 'react';
import { PiEye, PiEyeSlash } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_IMAGE_URL } from './components/constants';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const router = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState("")
    const [pass, setPass] = useState("")
    const [alert, setAlert] = useState(null)

    //Redirect to routes
    const _signUp = () => {
        router("/signUp")
    }

    const _forgetPass = () => {
        router.push("")
    }

    const _submitLogIn = () => {
        if (userName.length > 0 || pass.length > 0) {
            toast.success("Log in successful")
            router('/dashboard');
        }
        else {
            setAlert((userName.length > 0 || pass.length > 0) && !isValid() && <span className='mb-4 text-xs font-semibold text-red-500'>Username or Password required</span>)
        }
    }

    const isValid = () => {
        return userName.length > 0 && pass.length > 0;
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-sm border">

                <div className="flex justify-center mb-4">
                    <img
                        src={DEFAULT_IMAGE_URL}  // Replace with your logo URL or import
                        alt="image"
                        className="h-auto w-24"
                    />
                </div>

                <h2 className="text-center text-2xl font-semibold text-[#4373AC] mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder=""
                            onChange={(e) => setUserName(e.target.value)}
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                            onChange={(e) => setPass(e.target.value)}
                            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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

                    {alert}

                    <div className="flex items-center justify-center">
                        <button
                            onClick={_submitLogIn}
                            type="submit"
                            disabled={!isValid()}
                            className="bg-[#4373AC] hover:bg-[#4373AC] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            SIGN IN
                        </button>
                    </div>

                    <div className="mt-4 text-center">
                        <p onClick={_forgetPass} className="text-[#4373AC] text-sm">
                            Forgot Username / Password?
                        </p>
                    </div>

                    <div className="mt-2 text-center">
                        <span className="text-sm text-gray-600">Don't have an account? </span>
                        <span onClick={_signUp} className="text-[#4373AC] text-sm cursor-pointer">Sign up</span>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default LoginForm;