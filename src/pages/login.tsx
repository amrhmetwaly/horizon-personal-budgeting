import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
    { target: 'email', content: 'Enter your email address here' },
    { target: 'password', content: 'Type your password here' },
    { target: 'login-button', content: 'Click here to log in' },
    { target: 'google-button', content: "For this demo, please use Google Sign-In as it's fully integrated!" },
];

const Tooltip = ({ content, onNext }: { content: string; onNext: () => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute z-10 p-2 bg-white text-blue-900 rounded shadow-lg"
    >
        {content}
        <Button onClick={onNext} className="mt-2 w-full">Next</Button>
    </motion.div>
);

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const router = useRouter();
    const refs = {
        email: useRef(null),
        password: useRef(null),
        'login-button': useRef(null),
        'google-button': useRef(null),
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/');
        } catch (error) {
            setError('Failed to log in. Please check your credentials.');
            console.error(error);
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push('/');
        } catch (error) {
            setError('Failed to log in with Google. Please try again.');
            console.error(error);
        }
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(-1); // Hide all tooltips
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
                        Log in to your account
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="relative">
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
                                    ref={refs.email}
                                />
                            </div>
                            <AnimatePresence>
                                {currentStep === 0 && (
                                    <Tooltip content={steps[0].content} onNext={nextStep} />
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="relative">
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
                                    autoComplete="current-password"
                                    required
                                    className="pl-10 bg-blue-700 bg-opacity-50 border-blue-600 text-white placeholder-blue-300"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    ref={refs.password}
                                />
                            </div>
                            <AnimatePresence>
                                {currentStep === 1 && (
                                    <Tooltip content={steps[1].content} onNext={nextStep} />
                                )}
                            </AnimatePresence>
                        </div>

                        {error && <p className="text-red-400 text-sm">{error}</p>}

                        <div className="relative">
                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                                ref={refs['login-button']}
                            >
                                Log in
                            </Button>
                            <AnimatePresence>
                                {currentStep === 2 && (
                                    <Tooltip content={steps[2].content} onNext={nextStep} />
                                )}
                            </AnimatePresence>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-blue-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-blue-800 text-blue-200">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 relative">
                            <div>
                                <Button
                                    onClick={handleGoogleLogin}
                                    className="w-full bg-white text-gray-700 hover:bg-gray-50"
                                    ref={refs['google-button']}
                                >
                                    <FaGoogle className="w-5 h-5 mr-2" />
                                    Sign in with Google
                                </Button>
                            </div>
                            <AnimatePresence>
                                {currentStep === 3 && (
                                    <Tooltip content={steps[3].content} onNext={nextStep} />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-blue-200">
                            Don&#39;t have an account?{' '}
                            <Link href="/signup" className="font-medium text-blue-300 hover:text-blue-100">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}