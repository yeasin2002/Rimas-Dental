import {
	AppointmentForm,
	FAQ,
	Footer,
	Hero,
	OurStory,
	OurTeam,
	Services,
	TeethBeforeAndAfterEffects,
} from "@/components";

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}

export default function Home() {
	return (
		<>
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
