import { Footer, Hero, Nav, OurStory } from "@/components";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { Fragment } from "react";

export default function Home() {
	return (
		<Fragment>
			<Nav />
			<Hero />
			<AppointmentForm className="mx-auto   w-11/12 -translate-y-2/4 rounded-sm border border-gray-700/40 mini:w-4/5   sm:w-2/3  " />
			<OurStory />
			<Footer />
		</Fragment>
	);
}
