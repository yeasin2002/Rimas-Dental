export const fakeDelay = (second = 500) =>
	new Promise((resolve) => setTimeout(resolve, second));
