import bdLanguage from "@/Internationalization/languages/bn.json";
import enLanguage from "@/Internationalization/languages/en.json";

import mongoose from "mongoose";
import globalThisType from "globalthis";

declare global {
	var mongoose: typeof mongoose;
	var globalThis: globalThisType;

	type InternationalizationType =
		| typeof bdLanguage
		| typeof enLanguage
		| undefined;
}
