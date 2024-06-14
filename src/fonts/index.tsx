import {
	Baloo_Da_2,
	Lato,
	Playfair_Display,
	Roboto,
	Tiro_Bangla,
} from "next/font/google";

export const baloo = Baloo_Da_2({ subsets: ["latin"] });
export const TiroBangla400 = Tiro_Bangla({ subsets: ["latin"], weight: "400" });

export const PlayfairDisplay = Playfair_Display({
	subsets: ["latin"],
});

export const lato = Lato({
	subsets: ["latin"],
	weight: "700",
});

export const roboto = Roboto({
	subsets: ["latin"],
	weight: "700",
});
