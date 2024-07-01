export const fakeDelay = (second: number = 500) =>
	new Promise((resolve) => setTimeout(resolve, second));
