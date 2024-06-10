import { serviceData } from "@/data";

export const getSingleServerData = (id: string) =>
	serviceData.find((data) => data.id === Number(id));
