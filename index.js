const { GoogleAuth } = require('google-auth-library');
const path = require('path');

// Path to your service account JSON file
const keyFilePath = path.resolve('/Push-Notification-Key/firebase-adminsdk-pab13-75d4fae866.json');

async function getAccessToken() {
    const auth = new GoogleAuth({
        keyFile: keyFilePath,
        scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
    });

    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();

    console.log('OAuth2 Access Token:', accessToken.token);
    return accessToken.token;
}

getAccessToken();
