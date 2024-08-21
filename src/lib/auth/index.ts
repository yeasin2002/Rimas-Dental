import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt, encrypt } from "./processEncryption";

const cookiesSessionName = "patient-session";
const secretKey = process.env.JWT_SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

async function login({ name, email }: { name: string; email: string }) {
	const expires = new Date(Date.now() + 10 * 1000);
	const newSession = await encrypt({ user: { name, email }, expires }, key);

	// Save the session in a cookie
	cookies().set(cookiesSessionName, newSession, {
		expires,
		httpOnly: true,
		path: "/",
	});
}

async function logout() {
	cookies().set("session", "", { expires: new Date(0), path: "/" });
}

async function getSession() {
	const session = cookies().get(cookiesSessionName)?.value;
	if (!session) return null;
	return await decrypt(session, key);
}

async function updateSession(request: NextRequest) {
	const session = request.cookies.get(cookiesSessionName)?.value;
	if (!session) return;

	// Refresh the session so it doesn't expire
	const parsed = await decrypt(session, key);
	parsed.expires = new Date(Date.now() + 10 * 1000);
	const res = NextResponse.next();
	res.cookies.set({
		name: cookiesSessionName,
		value: await encrypt(parsed, key),
		httpOnly: true,
		expires: parsed.expires,
	});
	return res;
}

export const authSession = { login, logout, getSession, updateSession };
