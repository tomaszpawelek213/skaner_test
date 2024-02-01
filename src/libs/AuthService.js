import { getSHA256Hash } from "boring-webcrypto-sha256";

function generateRandomString(length) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }
  return result;
}

function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
}

async function base64URLEncode(str) {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function generateCodeVerifier() {
  return generateRandomString(128);
}

async function generateCodeChallenge(codeVerifier) {
  const hashed = await sha256(codeVerifier);
  return base64URLEncode(hashed);
}

export function login() {
  const clientId = '9b3512cb-c961-4e2d-ad51-c5add8e61174';
  const redirectUri = 'https://staging.cemi.pl/callback';
  const authorizationEndpoint = 'https://staging.cemi.pl/oauth/authorize';
  let state = generateRandomString(40);

  const codeVerifier = generateCodeVerifier();
  const codeChallengePromise = generateCodeChallenge(codeVerifier);

  codeChallengePromise.then((codeChallenge) => {
    const authUrl =
      `${authorizationEndpoint}?response_type=code` +
      `&client_id=${clientId}` +
      `&redirect_uri=${redirectUri}` +
      `&code_challenge=${codeChallenge}` +
      `&code_challenge_method=S256` +
      `&response_type=code`+
      `&scope=` +
      `&state=${state}`;

    window.location.href = authUrl;
  });
}