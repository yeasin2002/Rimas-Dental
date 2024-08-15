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
			<AppointmentForm className="home_appointment-form" />
			<OurStory />
			<Services />
			<OurTeam />
			<FAQ />
			<TeethBeforeAndAfterEffects />
			<Footer />
		</>
	);
}
