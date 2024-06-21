import { internationalization } from "@/middlewares";

// const middlewares = async () => {console.log("🔥 middlewares called");};

export const config = {
	matcher: ["/((?!api/|_next/|_static|_vercel|[\\w-]+\\.\\w+).*)"],
};

export const middleware = internationalization;
