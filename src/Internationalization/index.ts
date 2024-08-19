import "server-only";

import { languageLocale } from "@/data";

export const getDictionary = async (langCode: string, node: string) => {
	try {
		const { default: data } = await import(`./languages/${langCode}.json`);
		return node ? data?.[node] || data : data;
	} catch (error) {
		const { default: fallbackData } = await import(
			`./languages/${languageLocale.defaultLocale}.json`
		);
		return node ? fallbackData?.[node] || fallbackData : fallbackData;
	}
};

//! Legacy method 2
// export const getDictionary = async (langCode: string, node: string) => {
// 	let data = null;
// 	try {
// 		data = await import(`./languages/${langCode}.json`).then(
// 			(module) => module.default,
// 		);
// 		// return data.default as InternationalizationType;
// 	} catch (error) {
// 		data = await import(
// 			`../db/languages/${languageLocale.defaultLocale}.json`
// 		).then((module) => module.default);
// 		// return data.default as InternationalizationType;
// 	}
// 	if (node) {
// 		return data?.[node] || data;
// 	}
// 	return data as InternationalizationType;
// };

//! Legacy method
// const dictionaries: {
// 	[key: string]: () => Promise<InternationalizationType>;
// } = {
// 	en: () => import("./languages/en.json").then((module) => module.default),
// 	bn: () => import("./languages/bn.json").then((module) => module.default),
// };

// export const getDictionary = async (
// 	locale: string,
// ): Promise<InternationalizationType> => {
// 	try {
// 		const dictionary = await dictionaries[locale]();
// 		return dictionary as InternationalizationType;
// 	} catch (error) {
// 		console.error("Error loading dictionary");
// 	}
// };

//  new method
