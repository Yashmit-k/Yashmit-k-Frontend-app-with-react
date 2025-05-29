import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const WEBSITE_URL = process.env.WEBSITE_URL || 'https://yashmit-k-frontend-app-with-react.onrender.com';
const PING_INTERVAL = parseInt(process.env.PING_INTERVAL) || 300000; // Default to 5 minutes

async function pingWebsite() {
    try {
        console.log(`Pinging ${WEBSITE_URL}...`);
        const response = await fetch(WEBSITE_URL);
        if (response.ok) {
            console.log(`Success! Status: ${response.status}`);
        } else {
            console.error(`Failed! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error pinging website:', error.message);
    }
}

// Initial ping
pingWebsite();

// Set up periodic pinging
setInterval(pingWebsite, PING_INTERVAL);

console.log(`Server started. Will ping ${WEBSITE_URL} every ${PING_INTERVAL/1000} seconds.`); 