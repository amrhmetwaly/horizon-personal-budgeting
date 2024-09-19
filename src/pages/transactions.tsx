import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaSearch, FaFilter } from 'react-icons/fa';

interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    category: string;
}

const mockedTransactions: Transaction[] = [
    { id: '1', date: '2023-05-15', description: 'Grocery Store', amount: -75.50, category: 'Food' },
    { id: '2', date: '2023-05-14', description: 'Salary Deposit', amount: 3000.00, category: 'Income' },
    { id: '3', date: '2023-05-13', description: 'Electric Bill', amount: -120.00, category: 'Utilities' },
    { id: '4', date: '2023-05-12', description: 'Restaurant', amount: -45.00, category: 'Food' },
    { id: '5', date: '2023-05-11', description: 'Gas Station', amount: -40.00, category: 'Transportation' },
    { id: '6', date: '2023-05-10', description: 'Online Shopping', amount: -89.99, category: 'Shopping' },
    { id: '7', date: '2023-05-09', description: 'Movie Tickets', amount: -25.00, category: 'Entertainment' },
    { id: '8', date: '2023-05-08', description: 'Gym Membership', amount: -50.00, category: 'Health & Fitness' },
    { id: '9', date: '2023-05-07', description: 'Freelance Payment', amount: 500.00, category: 'Income' },
    { id: '10', date: '2023-05-06', description: 'Coffee Shop', amount: -4.50, category: 'Food' },
];

export default function Transactions() {
    const [transactions, setTransactions] = useState<Transaction[]>(mockedTransactions);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        const filteredTransactions = mockedTransactions.filter(transaction =>
            transaction.description.toLowerCase().includes(e.target.value.toLowerCase()) ||
            transaction.category.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setTransactions(filteredTransactions);
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 p-6 space-y-6">
                <h1 className="text-4xl font-bold text-white mb-8">Transactions</h1>

                <div className="flex justify-between items-center mb-6">
                    <div className="relative flex-1 mr-4">
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            className="w-full pl-10 pr-4 py-2 bg-blue-800 bg-opacity-50 text-white placeholder-blue-300 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                    </div>
                    <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                        <FaFilter /> Filter
                    </Button>
                </div>

                <Card className="bg-blue-800 bg-opacity-50 border-blue-600 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-white">Recent Transactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-blue-600">
                                        <th className="px-4 py-2 text-left text-blue-300">Date</th>
                                        <th className="px-4 py-2 text-left text-blue-300">Description</th>
                                        <th className="px-4 py-2 text-left text-blue-300">Category</th>
                                        <th className="px-4 py-2 text-right text-blue-300">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction) => (
                                        <tr
                                            key={transaction.id}
                                            className="border-b border-blue-700 hover:bg-blue-700 hover:bg-opacity-50 transition-all duration-300 ease-in-out group"
                                        >
                                            <td className="px-4 py-3 text-blue-200 group-hover:text-white">{transaction.date}</td>
                                            <td className="px-4 py-3 text-blue-200 group-hover:text-white">{transaction.description}</td>
                                            <td className="px-4 py-3 text-blue-200 group-hover:text-white">{transaction.category}</td>
                                            <td className={`px-4 py-3 text-right ${transaction.amount > 0
                                                    ? 'text-green-400 group-hover:text-green-300'
                                                    : 'text-red-400 group-hover:text-red-300'
                                                }`}>
                                                ${Math.abs(transaction.amount).toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}