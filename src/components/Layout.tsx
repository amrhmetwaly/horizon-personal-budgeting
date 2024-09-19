"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaHome, FaChartBar, FaCreditCard, FaCog, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import Footer from './Footer';  // Add this import
import { useState } from 'react'; // Add this import

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
    const [user] = useAuthState(auth);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        await auth.signOut();
        router.push('/login');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
            {/* Top Navbar for mobile */}
            <header className="lg:hidden bg-blue-800 bg-opacity-50 shadow-md p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-white">Horizon Personal Budgeter</h1>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isMobileMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </header>

            <div className="flex flex-1">
                {/* Left Sidebar - hidden on mobile, visible on larger screens */}
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block w-64 bg-blue-900 bg-opacity-50 text-white p-6`}>
                    <h1 className="text-2xl font-bold mb-8">Horizon Personal Budgeter</h1>
                    <nav>
                        <ul className="space-y-4">
                            {[
                                { href: "/", icon: FaHome, label: "Dashboard" },
                                { href: "/transactions", icon: FaChartBar, label: "Transactions" },
                                { href: "/cards", icon: FaCreditCard, label: "Cards" },
                                { href: "/settings", icon: FaCog, label: "Settings" },
                                { href: "/profile", icon: FaUser, label: "Profile" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="flex items-center space-x-2 hover:text-blue-300">
                                        <item.icon /> <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Top Navbar */}
                    <header className="bg-blue-800 bg-opacity-50 shadow-md p-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                {user?.photoURL ? (
                                    <Image
                                        src={user.photoURL}
                                        alt="User Avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null; // prevents looping
                                            e.currentTarget.src = '/default-avatar.png'; // path to your default avatar
                                        }}
                                    />
                                ) : (
                                    <FaUser className="w-10 h-10 text-blue-200" />
                                )}
                                <h2 className="text-xl font-semibold text-white">Welcome, {user?.displayName || 'User'}</h2>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="flex items-center space-x-2 text-blue-200 hover:text-white"
                            >
                                <FaSignOutAlt /> <span>Logout</span>
                            </button>
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
                        {children}
                    </main>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;