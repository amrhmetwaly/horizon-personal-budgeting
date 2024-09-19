import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from '@/lib/tokenStore';

const configuration = new Configuration({
    basePath: PlaidEnvironments[process.env.PLAID_ENV || 'sandbox'],
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
            'PLAID-SECRET': process.env.PLAID_SECRET,
        },
    },
});

const client = new PlaidApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { userId } = req.body;
    const accessToken = getToken(userId);

    if (!accessToken) {
        return res.status(400).json({ error: 'No access token available' });
    }

    try {
        const now = new Date();
        const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
        const response = await client.transactionsGet({
            access_token: accessToken,
            start_date: oneYearAgo.toISOString().split('T')[0],
            end_date: now.toISOString().split('T')[0],
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
}