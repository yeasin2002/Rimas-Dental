import { internationalization, sessionUpdate } from "@/middlewares";

import { createEdgeRouter } from "next-connect";
import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

const router = createEdgeRouter<NextRequest, NextFetchEvent>();

router.use(internationalization);
router.use(sessionUpdate);

router.all(() => {
	return NextResponse.next();
});

// the middleware
export function middleware(request: NextRequest, event: NextFetchEvent) {
	return router.run(request, event);
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
