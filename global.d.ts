import bdLanguage from "@/Internationalization/languages/bn.json";
import enLanguage from "@/Internationalization/languages/en.json";

declare global {
	type InternationalizationType =
		| typeof bdLanguage
		| typeof enLanguage
		| undefined;
}
