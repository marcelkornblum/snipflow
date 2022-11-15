# What it's not

## Git Flow

Git Flow is the best-known version control workflow around. SnipFlow works in a similar way but is based on GitHub Flow -- developers used to Git Flow will still find it very easy to switch.

The main difference between Git Flow (GF) and GitHub Flow (GHF) is that feature branches in GHF get merged directly to the `main` branch, and no `develop` branch exists. This means no painful merges between `main` and `develop`; all releases are instead held in tags. You are encouraged to read up on the differences between the methodologies.

In addition to being based on a slightly different git workflow, SnipFlow also covers more ground; using it fully encompasses CI and automation tooling, as well as environments and their names, to give a comprehenasive developer workflow.

## GitHub Flow

SnipFlow is at heart the GitHub Flow git based workflow; there are no GitHub Flow elements that SnipFlow overrides. However, SnipFlow is both more wide ranging (covering more than just git) and more opinionated (covering more about git than GitHub Flow does).

Compared to GitHub Flow, SnipFlow has the following extra rules:

- [Pull Requests](./how-it-works.md#pull-requests) must be merged using the `squash and merge` strategy, in order to retain a [clean commit history](./benefits.md#clean-versioning) on the main branch
- Specific [environments](./how-it-works.md#environments) are built triggered on specific events in the workflow

SnipFlow also includes extra optional features and the resources to get them up and running:

- Heavy CI/CD automation with example scripts
- ChatOps and UI based manual automation triggers to reduce context switching and administration for engineers as well as transparency

## Branch based deployments

Some tooling (Vercel, AWS Amplify) will auto-deploy code to different environments depending on the repository branch. This usually comes with the advantage of PR-based environments and a simpler deployment system and trigger than many other developer experiences, but it also comes with some real drawbacks.

Chief among them is the idea that the code commit hash that's built to staging, or test or wherever it's gone through testing, QA and verification, is then not the same commit hash as what's built to production. This lowers your reliability and at some point you'll find that a release that passed testing breaks when it's going live, causing downtime.

It's also often the case that in these workflows people have different environment configuration setups on the different branches, meaning that there's often a manual merge process that needs to take place, or a complex ignore ruleset that is tricky to get right when those variables change.

SnipFlow brings all the advantages that these systems bring, by managing the build process transparently and in your own CI/CD environment, thus freeing your team up to use a more sensible git strategy.
