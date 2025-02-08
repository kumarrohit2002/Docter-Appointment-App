import axios from "axios";
import { createContext, useContext, useState } from "react";
import { StoreContext } from "./StoreContext";

// Step 1
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const {showLoading,hideLoading}=useContext(StoreContext);
    const [userData,setUserData] = useState({name:'',email:'',isDoctor:false,isAdmin:false});

    const getUserData = async () => {
        showLoading();
        const baseUrl = import.meta.env.VITE_BASE_URL;
        try {
            const res = await axios.get(`${baseUrl}/api/v1/user/get_user_data`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            const user=res.data.user;
            setUserData(user);
        } catch (err) {
            console.log(err);
        }
        hideLoading();
    };
    

    const value = {
        getUserData,
        userData
    }

    // Step 2
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}