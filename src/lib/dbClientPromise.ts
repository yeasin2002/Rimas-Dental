// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient, ServerApiVersion } from "mongodb";

// Ensure globalThis is defined
if (typeof globalThis === "undefined") {
	(function () {
		if (typeof global !== "undefined") {
			(global as any).globalThis = global;
		} else if (typeof self !== "undefined") {
			(self as any).globalThis = self;
		} else if (typeof window !== "undefined") {
			(window as any).globalThis = window;
		} else {
			throw new Error("Unable to locate global object.");
		}
	})();
}

if (!process.env.DATABASE_URL) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.DATABASE_URL;
const options = {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
};

let client: any;
let mongoClientPromise: Promise<MongoClient>;
type globalThis = any;

if (process.env.NODE_ENV === "development") {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	const globalWithMongo = global as globalThis & {
		_mongoClientPromise?: Promise<MongoClient>;
	};

	if (!globalWithMongo._mongoClientPromise) {
		client = new MongoClient(uri, options);
		globalWithMongo._mongoClientPromise = client.connect();
	}
	if (globalWithMongo._mongoClientPromise) {
		mongoClientPromise = globalWithMongo._mongoClientPromise;
	} else {
		client = new MongoClient(uri, options);
		mongoClientPromise = client.connect();
	}
} else {
	// In production mode, it's best to not use a global variable.
	client = new MongoClient(uri, options);
	mongoClientPromise = client.connect();
}

export { mongoClientPromise as dbClientPromise };
