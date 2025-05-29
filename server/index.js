import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL || 'https://yashmit-k-frontend-app-with-react.onrender.com';
const SERVER_URL = process.env.SERVER_URL || 'https://yashmit-k-frontend-app-with-react-1.onrender.com';
const PING_INTERVAL = parseInt(process.env.PING_INTERVAL) || 300000; // Default to 5 minutes

async function pingWebsite(url, name) {
    try {
        console.log(`Pinging ${name} (${url})...`);
        const response = await fetch(url);
        if (response.ok) {
            console.log(`${name} Success! Status: ${response.status}`);
        } else {
            console.error(`${name} Failed! Status: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error pinging ${name}:`, error.message);
    }
}

async function pingAll() {
    await pingWebsite(FRONTEND_URL, 'Frontend');
    await pingWebsite(SERVER_URL, 'Server');
}

// Initial ping
pingAll();

// Set up periodic pinging
setInterval(pingAll, PING_INTERVAL);

console.log(`Server started. Will ping both services every ${PING_INTERVAL/1000} seconds.`); 