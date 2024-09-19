import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";

interface ProfileData {
    fullName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
    occupation: string;
    sourceOfFunds: string;
}

export default function Profile() {
    const [user] = useAuthState(auth);
    const [profileData, setProfileData] = useState<ProfileData>({
        fullName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        occupation: '',
        sourceOfFunds: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (user) {
            setProfileData(prevData => ({
                ...prevData,
                fullName: user.displayName || '',
                email: user.email || '',
            }));
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            // Here you would typically send the profileData to your backend
            console.log('Profile data to be saved:', profileData);
            setSuccess('Profile updated successfully.');
        } catch (error) {
            console.error('Error updating profile', error);
            setError('Error updating profile. Please try again.');
        }
    };

    if (!user) {
        return <div className="flex items-center justify-center h-screen">Loading user data...</div>;
    }

    return (
        <Layout>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 p-8 rounded-lg shadow-2xl">
                <h2 className="text-4xl font-bold mb-6 text-white text-center">Your Profile</h2>
                <p className="text-sm text-blue-200 mb-8 text-center">
                    The following information is required to comply with Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations.
                    Your data will be kept confidential and used only for verification purposes.
                </p>
                {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
                {success && <p className="text-green-400 mb-4 text-center">{success}</p>}
                <form onSubmit={handleSave} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(profileData).map(([key, value]) => (
                            <div key={key} className="relative">
                                <input
                                    id={key}
                                    name={key}
                                    type={key === 'email' ? 'email' : key === 'dateOfBirth' ? 'date' : 'text'}
                                    value={value}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-blue-800 bg-opacity-50 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
                                    placeholder={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                    required
                                    disabled={key === 'email'}
                                />
                                <label htmlFor={key} className="absolute left-4 -top-2.5 bg-blue-700 px-2 py-0.5 text-xs font-medium text-blue-200 rounded">
                                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                </label>
                            </div>
                        ))}
                    </div>
                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
                        Save Profile
                    </Button>
                </form>
            </div>
        </Layout>
    );
}