import bdFlag from "@/assets/images/flags/bangladesh.svg";
import UkFlag from "@/assets/images/flags/united-kingdom.svg";

export const languageLocale = {
	locals: ["bn", "en", "ar", "ja", "hi", "ru", "es"],
	defaultLocale: "bn",
};

export const bangla = {
	name: "বাংলা",
	code: "bn",
	flag: bdFlag,
};

export const english = {
	name: "English",
	code: "en",
	flag: UkFlag,
};

export const flags = [bangla, english];
