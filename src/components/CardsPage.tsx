import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from '@/components/Layout';
import { CreditCard } from 'lucide-react';

interface CardData {
    id: number;
    title: string;
    description: string;
    lastFour: string;
    expiryDate: string;
    type: string;
}

const cards: CardData[] = [
    { id: 1, title: 'Visa Platinum', description: 'Primary Card', lastFour: '1234', expiryDate: '12/25', type: 'Visa' },
    { id: 2, title: 'Mastercard Gold', description: 'Secondary Card', lastFour: '5678', expiryDate: '06/24', type: 'Mastercard' },
    { id: 3, title: 'Amex Blue', description: 'Business Card', lastFour: '9012', expiryDate: '03/26', type: 'American Express' },
    // Add more cards as needed
];

const CardsPage: React.FC = () => {
    return (
        <Layout>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold text-white mb-6">Your Cards</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-blue-800 border-blue-700 hover:bg-blue-700 transition-colors duration-300">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium text-blue-100">{card.title}</CardTitle>
                                    <CreditCard className="h-4 w-4 text-blue-300" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-white">**** **** **** {card.lastFour}</div>
                                    <p className="text-xs text-blue-300 mt-1">{card.description}</p>
                                    <div className="flex justify-between mt-4 text-sm text-blue-200">
                                        <span>Expires: {card.expiryDate}</span>
                                        <span>{card.type}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default CardsPage;