import {
	AppointmentForm,
	FAQ,
	Footer,
	Hero,
	Nav,
	OurStory,
	OurTeam,
	Services,
	TeethBeforeAndAfterEffects,
} from "@/components";

export default function Home() {
	return (
		<>
			<Nav />
			<Hero />
			<AppointmentForm className="mx-auto w-11/12 -translate-y-2/4 rounded-sm border border-gray-700/40 mini:w-4/5 sm:w-2/3" />
			<OurStory />
			<Services />
			<OurTeam />
			<FAQ />
			<TeethBeforeAndAfterEffects />
			<Footer />
		</>
	);
}
