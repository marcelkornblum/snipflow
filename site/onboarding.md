# Onboarding

Joining an existing SnipFlow project is really easy. You can read about [all aspects of the process](./how-it-works.md) in detail first of all, or jump straight in with a quick summary below.

## Developers

For developers, you'll need to follow the version control workflow:

- Create a feature branch for each feature, task or issue
- Commit as many times as you like to your feature branch
- Open a PR as early as you like, and certainly before merging your changes

A couple of extra points to keep in mind:

- You should spend time making your [Pull Request](./how-it-works.md#pull-requests) really high quality, ensuring it has all the requirements
- Never rebase anything that's been pushed to the remote repo

## Team Leads, Scrum Masters, Project Managers, Producers

If you're not actually writing code but you're involved in quality, timings, and output at a granular level, SnipFlow makes things easy for you:

- Check in on the [Preview](./how-it-works.md#preview) environment to see the latest state of the project, built and hosted
- Keep on top of the [Pull Request](./how-it-works.md#pr) environments - each PR will usually have a dedicated place that the built code can be browsed; this is your chance to feed in and affect the work before it's merged, and where to keep quality high. - If you're looking at code quality you should of course also be reviewing the PRs carefully
- You can easily deploy to [Staging](./how-it-works.md#staging) or [Production](./how-it-works.md#production) yourself, or ask an engineer without disrupting them too much

Extra things to note:

- It should be easy to follow progress on issues using your collaboration software
- You should never see "it works on my machine" again; every environment is built by the same automated script, never by an individual developer
- You should always have links easily available to see the project in various states; it's very rare that you'll need something specifically built or deployed for you
- You should be able to run deployments to Staging and even Production yourself, with no engineers involved
- You should be able to easily follow the thread from a ticket to the code implementing that feature, to the discussion and amendments made during the PR phase before that code was merged in. You can do this from the task mangement software, or using git blame from the affected lines of code. Debugging should be slightly less painful.
