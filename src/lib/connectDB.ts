import mongoose from "mongoose";
interface CustomGlobal {
	mongoose: any;
}

declare const global: CustomGlobal;

const DATABASE_URL = process.env.MONGODB_URI;

if (!DATABASE_URL) {
	console.error("Please define the DATABASE_URL environment variable inside .env.local");
}

let cached = (global as any).mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
		};

		cached.promise = mongoose.connect(DATABASE_URL!, opts).then((mongoose) => {
			return mongoose;
		});
	}
	cached.conn = await cached.promise;
	return cached.conn;
}

export default connectDB;
