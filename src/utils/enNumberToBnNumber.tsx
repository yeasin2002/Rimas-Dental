export function convertEnglishToBengaliNumber(input: string): string {
	const digitsMap: { [key: string]: string } = {
		"0": "০",
		"1": "১",
		"2": "২",
		"3": "৩",
		"4": "৪",
		"5": "৫",
		"6": "৬",
		"7": "৭",
		"8": "৮",
		"9": "৯",
	};

	const regex = /[0-9]/g;
	return input.replace(regex, (match) => digitsMap[match]);
}
