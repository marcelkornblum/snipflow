# Differences from GitHub Flow

SnipFlow is at heart the GitHub Flow git based workflow; there are no GitHub Flow elements that SnipFlow overrides.

However, SnipFlow is both more wide ranging (covering more than just git) and more opinionated (covering more about git than GitHub Flow does). 

Compared to GitHub Flow, SnipFlow has the following extra rules:

- [Pull Requests](./how-it-works.md#pull-requests) must be merged using the `squash and merge` strategy, in order to retain a [clean commit history](./benefits.md#clean-versioning) on the main branch
- Specific [environments](./how-it-works.md#environments) are built triggered on specific events in the workflow

SnipFlow also includes extra optional features and the resources to get them up and running:

- Heavy CI/CD automation with example scripts
- ChatOps and UI based manual automation triggers to reduce context switching and administration for engineers as well as transparency
