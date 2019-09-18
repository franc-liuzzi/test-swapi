import fetch from 'node-fetch';

export default async function (url) {
    const response = await fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    });

    switch (response.status) {
        case 200:
            return await response.json();
        case 404:
        default:
            throw new Error(response.statusText);
    }
}