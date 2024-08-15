import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./lib/mongoDBClientPromise"


import bcrypt from "bcrypt";
import Credentials from "next-auth/providers/credentials";


import { signInSchema } from "@/schema";
import mongoose from "mongoose";

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	adapter: MongoDBAdapter(client),

	session: {
		strategy: "jwt",
	},
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				if (credentials === null) return null;
				const { email, password } = await signInSchema.parseAsync(credentials);

				await prisma.$connect();
				const user = await prisma.doctors.findFirst({
					where: { email: email },
				});

				if (!user) throw new Error("User not found");

				const isMatch = await bcrypt.compare(password, user?.password);
				if (!isMatch) throw new Error("Email or Password is not correct");

				return user;
			},
		}),
	],
	callbacks: {
		jwt({ token, user }) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		session({ session, token }) {
			session.user.id = token.id as string;
			return session;
		},
	},
});
