import fetch from 'node-fetch';

export default async function handler(req, res) {
    const API_KEY = process.env.MARVEL_API_KEY; // положи свой ключ в Vercel Environment Variables
    const { id } = req.query;
    const url = id
        ? `https://gateway.marvel.com/v1/public/comics/${id}?apikey=${API_KEY}`
        : `https://gateway.marvel.com/v1/public/comics?apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}