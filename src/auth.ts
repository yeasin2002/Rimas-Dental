import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { prisma } from "@/lib";
import { signInSchema } from "@/schema";

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	adapter: PrismaAdapter(prisma),
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
