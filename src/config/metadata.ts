import dentalView from "@/assets/images/cembar-view.jpg";
import { Metadata } from "next";

export const baseMetaData: Metadata = {
	title: "Rima's Dental",
	applicationName: "Rima's Dental",
	description: "Best dental clinic in Mirpur 14, Dhaka, Bangladesh",
	category: "dental",
	creator: "Md Kawsar Islam Yeasin",
	manifest: "/src/app/manifest.json",
	authors: [
		{
			name: "Sharmin Akter Rima",
			url: "",
		},
	],
	openGraph: {
		type: "website",
		url: dentalView.src,
		title: "Rima's Dental",
		description: "Best dental clinic in Mirpur 14, Dhaka, Bangladesh",
		images: [
			{
				url: "https://www.rimasdental.com/og-image.jpg",
				alt: "Rima's Dental Clinic",
			},
		],
	},

	keywords: [
		"yeasin2002",
		"Md Kawsar Islam Yeasin",
		"Dr. Sharmin Akter Rima",
		"Rimas Dental",
		"Dental",
		"Mirpur 14",
		"Dhaka Dental",
		"Dhaka",
		"Dental clinic in Dhaka",
		"Best dentist in Dhaka",
		"Affordable dental care Dhaka",
		"Cosmetic dentistry Dhaka",
		"Teeth whitening Dhaka",
		"Orthodontist Dhaka",
		"Dental implants Dhaka",
		"Family dentist Dhaka",
		"Emergency dental care Dhaka",
		"Pediatric dentist Dhaka",
		"Root canal treatment Dhaka",
		"Dental surgery Dhaka",
		"Braces Dhaka",
		"Gum disease treatment Dhaka",
		"Dental cleaning Dhaka",
		"Dental crowns Dhaka",
		"Tooth extraction Dhaka",
		"Prosthodontics Dhaka",
		"Periodontics Dhaka",
		"Endodontics Dhaka",
		"Dhaka dental practice",
	],
};
