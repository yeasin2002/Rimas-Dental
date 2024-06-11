import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import { dbClientPromise } from "./lib";

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	adapter: MongoDBAdapter(dbClientPromise),
	providers: [],
});
