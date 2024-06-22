import * as github from "@actions/github";
import { execSync } from "child_process";

async function run() {
	// Get the list of commits in the push event
	const commits = github.context.payload.commits;

	// Extract issue numbers from commit messages
	const issueNumbers: number[] = [];
	const issuePattern = /#(\d+)/;

	commits.forEach((commit: any) => {
		const matches = commit.message.match(issuePattern);
		if (matches) {
			issueNumbers.push(...matches.slice(1).map(Number));
		}
	});

	if (issueNumbers.length === 0) {
		console.log("No issues to close.");
		process.exit(0);
	}

	// Close the issues
	const octokit = github.getOctokit(process.env.GITHUB_TOKEN as string);

	for (const issueNumber of issueNumbers) {
		await octokit.rest.issues.update({
			owner: github.context.repo.owner,
			repo: github.context.repo.repo,
			issue_number: issueNumber,
			state: "closed",
		});
		console.log(`Closed issue #${issueNumber}`);
	}
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
});
