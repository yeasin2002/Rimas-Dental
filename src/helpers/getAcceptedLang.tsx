import { headers } from "next/headers";

export const getAcceptLanguage = () => {
	const headersList = headers();
	return headersList.get("accept-language")?.split(",").at(1) || "en";
};
