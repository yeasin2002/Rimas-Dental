// Icons
import rubberband from "@/assets/icons/teeths/braces-rubber-bands.svg";
import braces from "@/assets/icons/teeths/braces.svg";
import cavityIcon from "@/assets/icons/teeths/cavity.svg";
import crown from "@/assets/icons/teeths/crown-alt.svg";
import forceps from "@/assets/icons/teeths/forceps.svg";
import goldenCrown from "@/assets/icons/teeths/golden-crown.svg";
import implant from "@/assets/icons/teeths/implant.png";
import shield from "@/assets/icons/teeths/shield.svg";
import smile from "@/assets/icons/teeths/smile.svg";
import toothScan from "@/assets/icons/teeths/tooth-scan.svg";

export interface ServiceData {
	id: number;
	icon: string;
	title: string;
	desc: string;
}

export const serviceData = [
	{
		id: 1,
		icon: cavityIcon,
		title: "General Dentistry",
		desc: "Tempus quam pellentesque nec nam aliquam. Volutpat diam ut venenatis tellus in metus. Amet consectetur habitant.",
	},
	{
		id: 2,
		icon: rubberband,
		title: "General Dentistry",
		desc: "Tempus quam pellentesque nec nam aliquam. Volutpat diam ut venenatis tellus in metus. Amet consectetur habitant.",
	},
	{
		id: 3,
		icon: braces,
		title: "General Dentistry",
		desc: "Tempus quam pellentesque nec nam aliquam. Volutpat diam ut venenatis tellus in metus. Amet consectetur habitant.",
	},
	{
		id: 4,
		icon: crown,
		title: "General Dentistry",
		desc: "Tempus quam pellentesque nec nam aliquam. Volutpat diam ut venenatis tellus in metus. Amet consectetur habitant.",
	},
	{
		id: 5,
		icon: forceps,
		title: "General Dentistry",
		desc: "Tempus quam pellentesque nec nam aliquam. Volutpat diam ut venenatis tellus in metus. Amet consectetur habitant.",
	},
	{
		id: 6,
		icon: goldenCrown,
		title: "General Dentistry",
		desc: "Tempus quam pellentesque nec nam aliquam. Volutpat diam ut venenatis tellus in metus. Amet consectetur habitant.",
	},
	{
		id: 7,
		icon: implant,
		title: "General Dentistry",
		desc: "Tempus quam pellentesque nec nam aliquam. Volutpat diam ut venenatis tellus in metus. Amet consectetur habitant.",
	},
	{
		id: 8,
		icon: shield,
		title: "General Dentistry",
		desc: "Tempus quam pellentesque nec nam aliquam. Volutpat diam ut venenatis tellus in metus. Amet consectetur habitant.",
	},
	{
		id: 9,
		icon: smile,
		title: "General Dentistry",
		desc: "Tempus quam pellentesque nec nam aliquam. Volutpat diam ut venenatis tellus in metus. Amet consectetur habitant.",
	},
	{
		id: 10,
		icon: toothScan,
		title: "General Dentistry",
		desc: "Tempus quam pellentesque nec nam aliquam. Volutpat diam ut venenatis tellus in metus. Amet consectetur habitant.",
	},
];
