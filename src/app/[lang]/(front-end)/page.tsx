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
import { getDictionary } from "@/Internationalization";

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}

export interface ParamsLocals {
	params: {
		lang: string;
	};
}
export default async function Home({ params }: ParamsLocals) {
	const dic = await getDictionary(params.lang, "testing");

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
