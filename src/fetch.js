import fetch from 'node-fetch';

export default async function (url) {
    const response = await fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    return data;
}