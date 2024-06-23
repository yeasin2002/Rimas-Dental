import { Button } from "@/components";
import { ClientsTable } from "./ClientsTable";

const Clients = () => {
	return (
		<section className="p-4">
			<div className="mb-8 mt-2 flex items-center justify-between">
				<div>
					<h1 className="font-grotesk text-4xl font-bold text-main-400 sm:text-5xl md:text-6xl lg:text-7xl">
						Patients
					</h1>
					<p>Manage your patients here.</p>
				</div>
				<Button variant={"dracula"} className="btn btn-primary">
					Add Patient
				</Button>
			</div>
			<ClientsTable />
		</section>
	);
};

export default Clients;
