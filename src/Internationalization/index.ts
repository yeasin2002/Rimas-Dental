import "server-only";

/* eslint-disable no-undef */

const dictionaries: {
	[key: string]: () => Promise<InternationalizationType>;
} = {
	en: () => import("./languages/en.json").then((module) => module.default),
	bn: () => import("./languages/bn.json").then((module) => module.default),
};

export const getDictionary = async (
	locale: string,
): Promise<InternationalizationType> => {
	try {
		const dictionary = await dictionaries[locale]();
		return dictionary as InternationalizationType;
	} catch (error) {
		console.error("Error loading dictionary");
	}
};
