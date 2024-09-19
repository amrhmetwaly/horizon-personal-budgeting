"use client";
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaUser, FaLock, FaCog, FaBell, FaLanguage, FaPalette } from 'react-icons/fa';

const settingsSections = [
    { icon: FaUser, title: 'Account Settings', items: ['Profile Information', 'Email Preferences', 'Phone Number'] },
    { icon: FaLock, title: 'Privacy & Security', items: ['Password', 'Two-Factor Authentication', 'Login History'] },
    { icon: FaBell, title: 'Notifications', items: ['Push Notifications', 'Email Notifications', 'SMS Notifications'] },
    { icon: FaLanguage, title: 'Language & Region', items: ['Language', 'Time Zone', 'Date Format'] },
    { icon: FaPalette, title: 'Appearance', items: ['Theme', 'Color Scheme', 'Font Size'] },
    { icon: FaCog, title: 'General Settings', items: ['Currency Display', 'Statement Preferences', 'Linked Accounts'] },
];

export default function Settings() {
    const [activeSection, setActiveSection] = useState(settingsSections[0].title);

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 p-6 space-y-6">
                <h1 className="text-4xl font-bold text-white mb-8">Settings</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                        <Card className="bg-blue-800 bg-opacity-50 border-blue-600 shadow-xl">
                            <CardContent className="p-4">
                                {settingsSections.map((section) => (
                                    <Button
                                        key={section.title}
                                        className={`w-full justify-start mb-2 text-white ${activeSection === section.title
                                            ? 'bg-blue-600'
                                            : 'bg-transparent hover:bg-blue-700'
                                            }`}
                                        onClick={() => setActiveSection(section.title)}
                                    >
                                        <section.icon className="mr-2" />
                                        {section.title}
                                    </Button>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    <div className="md:col-span-2">
                        <Card className="bg-blue-800 bg-opacity-50 border-blue-600 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white">{activeSection}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {settingsSections.find(section => section.title === activeSection)?.items.map((item, index) => (
                                    <div key={index} className="mb-4 last:mb-0">
                                        <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                                        <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                                            <p className="text-white">Configure your {item.toLowerCase()} settings here.</p>
                                            <Button className="mt-2 bg-blue-600 hover:bg-blue-500 text-white">
                                                Update {item}
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}