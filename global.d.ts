// import react, { SVGProps } from "react";
// type React = typeof react;

// // InternationalizationType
// import enLang from "@/Internationalization/languages/bn.json";
// import bnLang from "@/Internationalization/languages/en.json";

// declare global {
// 	type InternationalizationType = typeof bnLang | typeof enLang;
// }

// export {};

import bdLanguage from "@/Internationalization/languages/bn.json";
import enLanguage from "@/Internationalization/languages/en.json";

declare global {
	type InternationalizationType =
		| typeof bdLanguage
		| typeof enLanguage
		| undefined;
}
