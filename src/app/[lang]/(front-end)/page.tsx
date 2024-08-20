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
	const dictionary = await getDictionary(params.lang, "hero");
	const dictionaryForAppointment = await getDictionary(params.lang, "shared");

	return (
		<>
			<Hero dictionary={dictionary} />
			<AppointmentForm
				className="home_appointment-form"
				dictionary={dictionaryForAppointment?.appointment}
			/>
			<OurStory dictionary={dictionary} />
			<Services dictionary={dictionary} />
			<OurTeam dictionary={dictionary?.home?.OurTeam} />
			<FAQ dictionary={dictionary?.home?.Faq_TeethEffects} />
			<TeethBeforeAndAfterEffects
				dictionary={dictionary?.home?.Faq_TeethEffects}
			/>
			<Footer dictionary={dictionary?.home?.footer} />
		</>
	);
}
