import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { signInSchema } from "@/schema";
import connectDB from "./lib/connectDB";
import client from "@/lib/MongoDBClient";
import { db } from "./model";

export const { handlers, signIn, signOut, auth } = NextAuth({
	// adapter: MongoDBAdapter(client),
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				if (credentials === null) return null;
				const { email, password } = await signInSchema.parseAsync(credentials);

				await connectDB();
				const user = await db.Doctors.findOne({ email: email });
				if (!user) throw new Error("User not found");
				if (user?.isPending) throw new Error("Wait for admin approval");

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
