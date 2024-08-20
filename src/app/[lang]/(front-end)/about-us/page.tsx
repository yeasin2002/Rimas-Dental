import { AboutState } from "./AboutState";
import { AboutHero } from "./AboutHero";
import AboutFooter from "./AboutFooter";
import { SpeechOfCEO } from "./SpeechOfCEO";
import { ExplainAboutService } from "./ExplainAboutService";
import { OurCommitment } from "./OurCommitment";
import { getDictionary } from "@/Internationalization";

interface Props {
	params: { lang: string };
}

const AboutUs = async ({ params }: Props) => {
	const dictionary = await getDictionary(params.lang, "about_us");

	return (
		<>
			<AboutHero dictionary={dictionary.AboutHero} />
			<AboutState dictionary={dictionary.aboutState} />
			<SpeechOfCEO dictionary={dictionary.SpeechOfCEO} />
			<ExplainAboutService dictionary={dictionary.ExplainAboutService} />
			<OurCommitment dictionary={dictionary.OurCommitment} />
			<AboutFooter lang={params.lang} />
		</>
	);
};

export default AboutUs;

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}
