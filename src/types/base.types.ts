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

export type Service = {
	_id: string;
	name: string;
	description: string;
	content: string;
	coverImage: string;
	icons?: string;
	YT_VideoUrl?: string;
	price_range: string;
	tags: string[];
	isPaused: boolean;
	doctorsId: Doctor;
	createdAt: Date;
};
