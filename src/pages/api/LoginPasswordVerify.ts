// pages/api/LoginPasswordVerify.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.query;

    const response = await fetch(`http://localhost:3000/LoginPasswordVerify?username=${username}&password=${password}`);
    const data = await response.json();

    res.status(200).json(data);
}
