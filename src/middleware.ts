import { internationalization, patientAuthSession } from "@/middlewares";
// import { auth as authSession } from "@/auth";

import { createEdgeRouter } from "next-connect";
import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

const router = createEdgeRouter<NextRequest, NextFetchEvent>();
router.use(internationalization);
router.use(patientAuthSession);

router.all(() => NextResponse.next());

export function middleware(request: NextRequest, event: NextFetchEvent) {
	return router.run(request, event);
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
