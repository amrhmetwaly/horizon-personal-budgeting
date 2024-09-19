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
    if (req.method === 'POST') {
        try {
            const { userId } = req.body;
            const tokenResponse = await client.linkTokenCreate({
                user: { client_user_id: userId },
                client_name: 'Horizon Banking',
                products: [Products.Transactions],
                country_codes: [CountryCode.Us],
                language: 'en',
                redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
            });

            res.status(200).json({ link_token: tokenResponse.data.link_token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating link token' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}