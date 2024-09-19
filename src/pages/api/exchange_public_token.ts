import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';
import type { NextApiRequest, NextApiResponse } from 'next';
import { storeToken } from '@/lib/tokenStore';

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

    const { public_token, userId } = req.body;

    if (!public_token || !userId) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    try {
        const response = await client.itemPublicTokenExchange({ public_token });
        const accessToken = response.data.access_token;
        storeToken(userId, accessToken);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to exchange public token' });
    }
}