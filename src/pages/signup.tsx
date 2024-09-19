"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name });
            router.push('/');
        } catch (error) {
            setError('Failed to create an account. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-8 glow"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    Horizon Personal Budgeter
                </motion.span>
            </motion.h1>

            <Card className="w-full max-w-md bg-blue-800 bg-opacity-50 border-blue-600 shadow-xl">
                <CardHeader>
                    <CardTitle className="text-3xl font-extrabold text-center text-white">
                        Create an Account
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignup} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUser className="h-5 w-5 text-blue-300" />
                                </div>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="pl-10 bg-blue-700 bg-opacity-50 border-blue-600 text-white placeholder-blue-300"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="h-5 w-5 text-blue-300" />
                                </div>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="pl-10 bg-blue-700 bg-opacity-50 border-blue-600 text-white placeholder-blue-300"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="h-5 w-5 text-blue-300" />
                                </div>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="pl-10 bg-blue-700 bg-opacity-50 border-blue-600 text-white placeholder-blue-300"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-400 text-sm">{error}</p>}

                        <div>
                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                            >
                                Sign up
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-blue-200">
                            Already have an account?{' '}
                            <Link href="/login" className="font-medium text-blue-300 hover:text-blue-100">
                                Log in
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}