import { useContext, useEffect, useState } from "react";
import { LayoutPanelLeft, X,Users, House, Milestone, ClipboardPlus, UserRoundPen, LogOut, Bell,BriefcaseMedical } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function DashboardLayout({ children }) {
    const navigate = useNavigate();
    const { getUserData, userData } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const userMenu = [
        { name: "Home", path: "/", icon: House },
        { name: "Appointments", path: "/appointments", icon: Milestone },
        { name: "Apply Doctor", path: "/apply-doctor", icon: ClipboardPlus },
        { name: "Profile", path: "/profile", icon: UserRoundPen },
    ];
    const doctorMenu = [
        { name: "Home", path: "/", icon: House },
        { name: "Appointments", path: "/appointments", icon: Milestone },
        { name: "Apply Doctor", path: "/apply-doctor", icon: ClipboardPlus },
        { name: "Profile", path: "/profile", icon: UserRoundPen },
    ];
    const adminMenu = [
        { name: "Home", path: "/", icon: House },
        { name: "Users", path: "/users", icon: Users },
        { name: "Doctors", path: "/doctors", icon: BriefcaseMedical },
        { name: "Profile", path: "/profile", icon: UserRoundPen },
    ];

    useEffect(() => {
        getUserData();
    }, []);


    let renderedMenu=userData.isAdmin?adminMenu:userMenu;

    return (
        <div className="flex h-screen w-full">
            {/* Sidebar */}
            <div className={`bg-gray-900 text-white h-full p-4 space-y-4 overflow-y-auto transition-all duration-300 ${isOpen ? "w-56" : "w-20"}`}>
                <button className="text-white p-2 rounded focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <LayoutPanelLeft size={24} />}
                </button>
                <div className="space-y-4 mt-4">
                    {renderedMenu.map((menu, idx) => {
                        const Icon = menu.icon;
                        return (
                            <Link to={menu.path} key={idx} className="p-2 flex items-center hover:bg-gray-700 rounded">
                                <Icon size={24} />
                                {isOpen && <span className="ml-2">{menu.name}</span>}
                            </Link>
                        );
                    })}
                </div>
                <div onClick={() => {
                    localStorage.clear();
                    navigate('/login');
                }}
                    className={`p-2 flex cursor-pointer fixed bg-red-600 bottom-5 items-center hover:bg-red-700 rounded ${isOpen ? "w-50" : "w-10"}`}>
                    <LogOut size={24} />
                    {isOpen && <p className="ml-2">Logout</p>}
                </div>
            </div>

            {/* Right Section (Top Bar + Main Content) */}
            <div className={`flex flex-col transition-all duration-300 ${isOpen ? "w-[calc(100%-16rem)]" : "w-[calc(100%-4rem)]"}`}>
                {/* Top Bar */}
                <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">{userData.name}</h1>
                    <Bell />
                </div>
                {/* Main Content */}
                <div className="p-6 flex-1 overflow-auto bg-gray-100">{children}</div>
            </div>
        </div>
    );
}
