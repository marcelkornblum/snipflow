# How it works

Use feature branches off your main repository default branch, merging back via "Squash and Merge", ideally through a Pull Request. If you parallel stream a lengthy QA process before deployment move your candidate to a release branch for this. Deploy by making a semver-named tag in the repo, and follow up by merging your release branch back into the main branch. Supplement these with ChatOps commands where needed.
You'll get environments to review
Each PR
The head of the main branch ("latest progress")
The release candidate
A staging /UAT build
Production
All deployments are automated and can be triggered by any team member (so less developer task switching), and only one branch has important code and any settings, so onboarding is simple. Git history is clean and has a 1:1 relationship with your ticketing tool.
