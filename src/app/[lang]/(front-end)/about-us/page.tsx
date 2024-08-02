import { AboutState } from "./AboutState";
import { AboutHero } from "./AboutHero";
import AboutFooter from "./AboutFooter";
import { SpeechOfCEO } from "./SpeechOfCEO";
import { ExplainAboutService } from "./ExplainAboutService";
import { OurCommitment } from "./OurCommitment";

const AboutUs = () => {
	return (
		<>
			<AboutHero />
			<AboutState />
			<SpeechOfCEO />
			<ExplainAboutService />
			<OurCommitment />
			<AboutFooter />
		</>
	);
};

export default AboutUs;
