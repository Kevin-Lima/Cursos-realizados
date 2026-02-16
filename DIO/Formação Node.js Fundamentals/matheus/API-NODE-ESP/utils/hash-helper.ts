import argon2 from "argon2";
import crypto from "crypto";
export const hashArgon2 = async (password : string) => {
    try {
        return await argon2.hash(password)
    }catch {
        return null;
    }
}

export const verifyArgon2 = async (password : string, passwordHash : string) => {
    try {
        return await argon2.verify(passwordHash, password);
    } catch {
        return false
    }
}

export const sha256Hash = async (text : string) => {
    return crypto.createHash("sha256").update(text).digest("hex")
}