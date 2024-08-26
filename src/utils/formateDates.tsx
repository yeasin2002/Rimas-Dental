export const getFormattedDate = (initial: Date): string => {
	const day = initial.getDate();
	const month = initial.toLocaleString("default", { month: "long" });
	const year = initial.getFullYear();
	return `${day} ${month} ${year}`;
};
