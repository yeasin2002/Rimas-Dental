import { authSession } from "@/lib/auth";
import { NextHandler } from "next-connect";
import type { NextFetchEvent, NextRequest } from "next/server";

export async function sessionUpdate(
	request: NextRequest,
	event: NextFetchEvent,
	next: NextHandler,
) {
	await authSession.updateSession(request);
	return next();
}
