import {
	// Anek_Bangla,
	Baloo_Da_2,
	Hind_Siliguri,
	Tiro_Bangla,
} from "next/font/google";

export const baloo = Baloo_Da_2({ subsets: ["latin"] });
export const TiroBangla400 = Tiro_Bangla({ subsets: ["latin"], weight: "400" });
// export const anekBangla = Anek_Bangla({ subsets: ["latin"], weight: "400" });
export const HindSiliguri = Hind_Siliguri({
	subsets: ["latin"],
	weight: "400",
});

export const HindSiliguri600 = Hind_Siliguri({
	subsets: ["latin"],
	weight: "600",
});
