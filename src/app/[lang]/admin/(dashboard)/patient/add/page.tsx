import { getDictionary } from "@/Internationalization";
import { PatientRegisterByDoctor } from "./PatientRegisterByDoctor";

interface Props {
	params: { lang: string };
}

const AddPatients = async ({ params }: Props) => {
	const dictionary = await getDictionary(params.lang, "useAuth");
	return (
		<section>
			<PatientRegisterByDoctor dictionary={dictionary} />
		</section>
	);
};

export default AddPatients;
