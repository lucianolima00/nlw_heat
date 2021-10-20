import axios from "axios";

/**
 * Receive the code(string)
 * Recover the access_token on github
 * Verify if user exist on DB
 * ---- YES = generate a token
 * ---- NO = Create on DB, generate a token
 * Return token with user info
 */

class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oath/acess_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers: {
                "Accept": "application/json"
            }
        });

        return response.data;
    }
}

export { AuthenticateUserService }