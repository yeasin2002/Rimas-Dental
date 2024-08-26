export type Doctor = {
	_id: string;
	email: string;
	phone: string;
	name: string;
	profileImage: string;
	gender: "male" | "female";
	specialization: string | null;
	yearsOfExperience: number;
	bio: string | null;
	role: "doctor" | "admin";
	address: string | null;
	password: string;
	isPending: boolean;
	services: string[];
	facebook: {
		name: string;
		link: string;
	};

	createdAt: Date;
	updatedAt: Date;
};

export type Appointments = {
	_id: string;
	name: string;
	phone: string;
	date: Date;
	time: { from: string; to: string };
	isCompleted: boolean;
	isCanceled: boolean;
};
