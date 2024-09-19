import { Configuration, PlaidApi, PlaidEnvironments, Products, CountryCode } from 'plaid';
import type { NextApiRequest, NextApiResponse } from 'next';

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

    if (!userId) {
        return res.status(400).json({ error: 'Missing userId' });
    }

    try {
        const createTokenResponse = await client.linkTokenCreate({
            user: { client_user_id: userId },
            client_name: 'Horizon Banking',
            products: [Products.Transactions],
            country_codes: [CountryCode.Us],
            language: 'en',
        });
        res.json(createTokenResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create link token' });
    }
}