import { auth } from "express-oauth2-jwt-bearer";
import dotenv from "dotenv";
import { Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";

dotenv.config(); // Load environment variables from .env file

declare global {
    namespace Express {
        interface Request {
            auth0Id: String;
            userId: String;
        }
    }
}

export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: process.env.AUTH0_TOKEN_SIGNING_ALG,
});

export const jwtParse = async (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    const { authorization } = req.headers;

    // Bearer wfkshjdfgwiereiyur
    if(!authorization || !authorization.startsWith("Bearer ")){
        return res.sendStatus(401);
    }

    const token = authorization.split(" ")[1];

    try {
        const decoded = jwt.decode(token) as jwt.JwtPayload;
        const auth0Id = decoded.sub;

        const user = await User.findOne({ auth0Id })

        if(!user){
            return  res.sendStatus(401);
        }

        req.auth0Id = <String>auth0Id;
        req.userId = user._id.toString();
        next();
    } catch (error) {
        return res.sendStatus(401);
    }
};