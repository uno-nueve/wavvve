import { useEffect, useState } from "react";

const client_id: string = import.meta.env.VITE_CLIENT_ID;
const client_secret: string = import.meta.env.VITE_CLIENT_SECRET;
// const redirect_uri: string = "http://localhost:5173/callback";

// const scope = "user-read-private user-read-email";
// const authUrl = new URL("https://accounts.spotify.com/authorize");
// const codeVerifier = generateRandomString(64);
// const hashed = await sha256(codeVerifier);
// const code_challenge = base64Encode(hashed);

// window.localStorage.setItem("code_verifier", codeVerifier);

// const params = {
//     response_type: "code",
//     client_id: client_id,
//     scope,
//     code_challenge_method: "S256",
//     code_challenge: code_challenge,
//     redirect_uri: redirect_uri,
// };

// authUrl.search = new URLSearchParams(params).toString();
// window.location.href = authUrl.toString();

// const urlParams = new URLSearchParams(window.location.search);
// const code = urlParams.get("code");

// async function getToken(code: string) {
//     const codeVerifier = localStorage.getItem("code_verifier");

//     const payload = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({
//             client_id: client_id,
//             grant_type: "authorization_code",
//             code,
//             redirect_uri: redirect_uri,
//             code_verifier: codeVerifier!,
//         }),
//     };

//     const body = await fetch(authUrl, payload);
//     const response = await body.json();

//     localStorage.setItem("access_token", response.access_token);
// }

// function generateRandomString(length: number) {
//     const possible =
//         "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     const values = crypto.getRandomValues(new Uint8Array(length));
//     return values.reduce((acc, x) => acc + possible[x % possible.length], "");
// }

// async function sha256(plain: string) {
//     const encoder = new TextEncoder();
//     const data = encoder.encode(plain);
//     return window.crypto.subtle.digest("SHA-256", data);
// }

// function base64Encode(input: ArrayBuffer) {
//     return btoa(String.fromCharCode(...new Uint8Array(input)))
//         .replace(/=/g, "")
//         .replace(/\+/g, "-")
//         .replace(/\//g, "_");
// }

export const Auth = () => {
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        const url = "https://accounts.spotify.com/api/token";
        const authParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
        };
        fetch(url, authParams)
            .then((res) => res.json())
            .then((data) => setAccessToken(data.access_token));
    }, []);
    localStorage.setItem("access_token", accessToken);

    return <></>;
};
