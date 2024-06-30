import { KeyLike, SignJWT, jwtVerify } from "jose";

export async function encrypt(payload: any, key: KeyLike | Uint8Array) {
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("10 sec from now")
		.sign(key);
}

export async function decrypt(
	input: string,
	key: KeyLike | Uint8Array,
): Promise<any> {
	const { payload } = await jwtVerify(input, key, {
		algorithms: ["HS256"],
	});
	return payload;
}
