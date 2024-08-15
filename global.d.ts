import bdLanguage from "@/Internationalization/languages/bn.json";
import enLanguage from "@/Internationalization/languages/en.json";
import mongoose from "mongoose";

declare global {
	var mongoose: typeof mongoose;
	var globalThis: any;

	type InternationalizationType =
		| typeof bdLanguage
		| typeof enLanguage
		| undefined;
}
