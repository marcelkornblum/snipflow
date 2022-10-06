# How it works

This section is a full rundown of how each element of SnipFlow works and connects together, meant as a reference section. If you'd like to get up and running quickly, you might want to go straight to [Getting started](./getting-started.md).

## Overview

Developers use GitHub Flow, with a squash and merge strategy and a couple of [extra tweaks](#version-control), leading to a [clean commit history](./benefits.md#clean-versioning) and a 1:1 relationship between commits and issues/tickets.

[Environments](#environments) are auto-created to review [Pull Requests](#pull-requests), and for reference of the "latest state" of the project by wider team members, as well as dedicated staging and testing environments.

Deployments are [fully automated](#cicd), and can be run by non-technnical team members at any time - via chatops or a version control web interface. Deployments to each environment are visible to the full team, and code consistency is retained across environments.

## Prerequisites

SnipFlow will work with your existing toolset - but you will need to already understand the basic tools ([version control](#version-control-tool), [CI/CD tooling](#cicd-tools) and [multi-environment hosting](#hosting)) in order to get the best out of it.

### Version control tool

SnipFlow is very similar to [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow), with a few tweaks and emphasis on more than just Git. Version control that includes branching and some sort of [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) system is required for SnipFlow to work fully.

### CI/CD tools

You can use your existing deployment management / automation tooling with SnipFlow, but you will need some sort of system in place (e.g. [GitHub Actions](https://github.com/features/actions) or [CircleCI](https://circleci.com/)), since SnipFlow relies heavily on automation to replace technical administrative tasks.

To work fully with all aspects of SnipFlow, your CI/CD system will need to accept external triggers to manually start deployments. Whichever system you use, we highly recommend something where the configuration is versioned, ideally alongside the project code.

### Hosting

You will of course need project hosting, and the ability to deploy to it via your CI/CD system. More specifically, you will need to be able to run at least 3 distinct environments, and for full SnipFlow benefits you'll need the ability to dynamically provision (and destroy) temporary environments. This is simpler with some hosting setups (and some project types) than others.

## Version control

Developers use [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow), with a squash and merge strategy as described below.

### Pull Requests

## Environments

## CI/CD

## ChatOps

Use feature branches off your main repository default branch, merging back via "Squash and Merge", ideally through a Pull Request. If you parallel stream a lengthy QA process before deployment move your candidate to a release branch for this. Deploy by making a semver-named tag in the repo, and follow up by merging your release branch back into the main branch. Supplement these with ChatOps commands where needed.
You'll get environments to review
Each PR
The head of the main branch ("latest progress")
The release candidate
A staging /UAT build
Production
All deployments are automated and can be triggered by any team member (so less developer task switching), and only one branch has important code and any settings, so onboarding is simple. Git history is clean and has a 1:1 relationship with your ticketing tool.
