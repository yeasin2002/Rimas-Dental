import bdLanguage from "@/Internationalization/languages/bn.json";
import enLanguage from "@/Internationalization/languages/en.json";

import mongoose from "mongoose";
import globalThisType from "globalthis";

declare global {
	const mongoose: typeof mongoose;
	const globalThis: globalThisType;

	type InternationalizationType =
		| typeof bdLanguage
		| typeof enLanguage
		| undefined;
}
