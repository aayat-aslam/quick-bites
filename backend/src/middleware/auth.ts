import { auth } from "express-oauth2-jwt-bearer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: process.env.AUTH0_TOKEN_SIGNING_ALG,
});
