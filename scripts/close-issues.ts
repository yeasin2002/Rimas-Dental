import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
	try {
		const token = core.getInput("github_token");
		const octokit = github.getOctokit(token);

		const context = github.context;
		const repo = context.repo.repo;
		const owner = context.repo.owner;
		const commits = context.payload.commits;

		if (!commits) {
			core.setFailed("No commits found in the payload.");
			return;
		}

		const issuePattern = /#(\d+)/;
		const issueNumbers = new Set<number>();

		for (const commit of commits) {
			const matches = commit.message.match(issuePattern);
			if (matches) {
				for (const match of matches) {
					const issueNumber = parseInt(match.slice(1), 10);
					issueNumbers.add(issueNumber);
				}
			}
		}

		if (issueNumbers.size === 0) {
			console.log("No issues to close.");
			return;
		}

		for (const issueNumber of issueNumbers) {
			try {
				await octokit.rest.issues.update({
					owner,
					repo,
					issue_number: issueNumber,
					state: "closed",
				});
				console.log(`Closed issue #${issueNumber}`);
			} catch (error: any) {
				console.error(
					`Failed to close issue #${issueNumber}: ${error.message}`,
				);
			}
		}
	} catch (error) {
		core.setFailed(`Action failed with error ${error}`);
	}
}

run();
