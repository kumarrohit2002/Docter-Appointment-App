import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Register = () => {
    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const RegisterHandler = async (e) => {
        e.preventDefault();
        try {
            const res= await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/register`, signUpData);
            if(res.data.success) {
                console.log("User successfully registered!");
            }else{
                console.log(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignUpData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="bg-sky-500 h-[100vh] flex items-center justify-center">
            <div className="w-[450px] h-auto bg-white rounded-md p-4 border-gray-400 border-2">
                <h1 className="text-3xl font-bold m-2">Sign Up as User</h1>
                <form className="flex flex-col gap-4 m-4" onSubmit={RegisterHandler}>
                    <div>
                        <label className="text-xl" htmlFor="name">Name</label>
                        <br />
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Name"
                            className="bg-gray-300 text-xl rounded-sm w-full p-2"
                            value={signUpData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="text-xl" htmlFor="email">Email</label>
                        <br />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email"
                            className="bg-gray-300 text-xl rounded-sm w-full p-2"
                            value={signUpData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="text-xl" htmlFor="password">Password</label>
                        <br />
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            className="bg-gray-300 text-xl rounded-sm w-full p-2"
                            value={signUpData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-amber-500 cursor-pointer p-2 mt-4 rounded-md w-full text-center text-white font-bold">
                        Sign Up
                    </button>
                </form>
                <p className="m-2 text-center">
                    Already have an account? <Link to='/login' className="text-blue-500 cursor-pointer">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
