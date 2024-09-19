import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, CreditCard, ArrowUpRight, ArrowDownRight, PlusCircle, Send, Wallet } from 'lucide-react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { User } from 'firebase/auth';

interface Card {
  id: string;
  name: string;
  lastFour: string;
  expiryDate: string;
  type: string;
}

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
}

// Mocked spending categories data
const mockedSpendingCategories = [
  { category: 'Food & Dining', amount: 450 },
  { category: 'Transportation', amount: 200 },
  { category: 'Shopping', amount: 350 },
  { category: 'Utilities', amount: 180 },
  { category: 'Entertainment', amount: 120 },
];

// Mocked transactions data
const mockedTransactions: Transaction[] = [
  {
    id: '1',
    description: 'Restaurant XYZ',
    amount: 75.50,
    date: '2023-05-15',
  },
  {
    id: '2',
    description: 'PAYROLL DEPOSIT',
    amount: 2500.00,
    date: '2023-05-14',
  },
  {
    id: '3',
    description: 'Fashion Store ABC',
    amount: 120.00,
    date: '2023-05-13',
  },
  {
    id: '4',
    description: 'TRANSIT AUTHORITY',
    amount: 50.00,
    date: '2023-05-12',
  },
  {
    id: '5',
    description: 'Netflix',
    amount: 9.99,
    date: '2023-05-11',
  },
];

export default function Dashboard() {
  const [animate, setAnimate] = useState<boolean>(false)
  const [transactions] = useState<Transaction[]>(mockedTransactions)
  const [spendingCategories] = useState<{ category: string, amount: number }[]>(mockedSpendingCategories)
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    setAnimate(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const totalBalance = transactions.reduce((sum, t) => sum + t.amount, 0)
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0)
  const totalExpenses = transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0)

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Loading user data...</div>;
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {[
            { title: 'Total Balance', icon: <DollarSign className="h-4 w-4 text-blue-300" />, value: totalBalance },
            { title: 'Income', icon: <ArrowUpRight className="h-4 w-4 text-green-400" />, value: totalIncome },
            { title: 'Expenses', icon: <ArrowDownRight className="h-4 w-4 text-red-400" />, value: totalExpenses }
          ].map((item, index) => (
            <Card key={index} className={`bg-blue-800 border-blue-700 transform transition-all duration-300 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-100">{item.title}</CardTitle>
                {item.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">${item.value.toFixed(2)}</div>
                <p className="text-xs text-blue-300">
                  {item.title === 'Expenses' ? '-2%' : '+2.5%'} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
          <Card className={`bg-blue-800 border-blue-700 transform transition-all duration-300 ${animate ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <CardHeader>
              <CardTitle className="text-blue-100">Spending Habits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] sm:h-[250px]">
                {spendingCategories.map((category, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <div className="w-24 truncate text-blue-200">{category.category}</div>
                    <div className="flex-1 ml-2">
                      <div className="h-2 bg-blue-600 rounded overflow-hidden">
                        <div
                          className="h-full bg-blue-400 rounded transition-all duration-1000 ease-out"
                          style={{ width: animate ? `${(category.amount / totalExpenses) * 100}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-16 text-right text-white">${category.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className={`bg-blue-800 border-blue-700 transform transition-all duration-300 ${animate ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
            <CardHeader>
              <CardTitle className="text-blue-100">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.slice(0, 5).map((transaction, index) => (
                  <div key={transaction.id} className={`flex items-center transform transition-all duration-300 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${transaction.amount > 0 ? 'bg-green-400' : 'bg-red-400'}`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-white">{transaction.description}</p>
                      <p className="text-sm text-blue-300">{transaction.date}</p>
                    </div>
                    <div className={`font-medium ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: <Send className="h-4 w-4" />, label: 'Transfer' },
            { icon: <PlusCircle className="h-4 w-4" />, label: 'Add Money' },
            { icon: <Wallet className="h-4 w-4" />, label: 'Pay Bills' },
            { icon: <CreditCard className="h-4 w-4" />, label: 'Manage Cards' }
          ].map((button, index) => (
            <Button
              key={index}
              className={`flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 text-white transform transition-all duration-300 hover:scale-105 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {button.icon}
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </Layout>
  )
}
