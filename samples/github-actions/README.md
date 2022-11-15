# GitHub Actions samples

These scripts are written to run in GitHub Actions, available when repo hosting is with GitHub.

The examples here take full advantage of the GitHub Deployments API that provides rich details and trigger buttons about the deployments taking place inside the GitHub repo UI (e.g. on the `.../deployments` page, and in each PR activity feed).

The scripts in this directory are written without deployment instructions, but only with the hooks in place for you to fill in the details.

These scripts should all be placed in the `/.github/workflows` directory in the root of your repo. You can manually trigger a deployment by going to the "Actions" tab in the GitHub UI, then choosing "Manually trigger deployment" on the left column, and "Run workflow" at thetop right of the list of runs. You need to select a branch and environment and the rest is automated.

You may want to connect a Chat client to the manual trigger, which will usually require a third party helper, such as https://github.com/marcelkornblum/deploybot.

These scripts depends on GitHub Secrets set up for GitHub Tokens, and AWS Credentials, and ENV vars being available for builds. You can see a version of these scripts in use on this site by browsing the relevant directory.
