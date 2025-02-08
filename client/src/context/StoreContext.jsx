import { createContext, useState } from "react";

// Step 1
export const StoreContext = createContext();

export default function StoreZContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    const showLoading = () => {
        setIsLoading(true);
    };

    const hideLoading = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500); // 5 m seconds delay
    };

    const value = {
        showLoading,
        hideLoading,
        isLoading
    };

    // Step 2
    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
}
