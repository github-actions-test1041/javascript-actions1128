const core = require('@actions/core');
const github = require('@actions/github');

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const token = core.getInput('token');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const assignees = core.getInput('assignees');

    const octokit = github.getOctokit(token);

    const response = await oktokit.rest.issues.create({
      // owner: github.context.repo.owner,
      // repo: github.context.repo.repo
      // is the same as the next line
      ...github.context.repo,
      title,
      body,
      assignees: assignees ? assignees.split('\n') : undefined
    });

    core.setOutput('issue', reponse.data);

  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = {
  run
}
