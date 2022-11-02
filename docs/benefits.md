# Benefits

SnipFlow gives your team a simple way to connect everything together, standard places to review your work in various stages, and easy ways to deploy to them.

Using SnipFlow standardises the terminology you use, so that communication becomes easier and everyday tasks become simpler and less risky.

## Easy onboarding

Most technical teams have some turnover, and some teams have a lot. Client-facing studios in particular often build teams regularly from freelance resources - onboarding coders is a time intensive task for most of the industry.

The day to day workflow using SnipFlow is simple and probably very similar to what your new coder already uses. It usually takes no more than a 2 minute read through the [onboarding](./getting-started.md#onboarding) documentation to understand the process.

Because SnipFlow emphasises flow time over administration, it also allows developers to focus on one thing at a time in their day (i.e. coding vs documentation), making it easier to be productive while at the same time improving on e.g. PR documentation.

## Clean versioning

Having a clean version history in your repository has many benefits, especially when it comes to long-running projects; it allows easier rationalisation about design choices and can be a big help in debugging, to name the most obvious.

Traditionally, those benefits come at the expense of many coders' preferred workflow; it requires them to break out of their coding mindset when it comes to authoring a commit. The commit must contain code for a single task or feature, must contain all that code, be tested and documented and meet the definition of done for the team.

While all of that is good practice, the majority of developers aren't comfortable switching context at the point of authoring a commit, and the result is the version histoy is quickly polluted. This is exacerbated by e.g. infrastructure-as-code paradigms where commits are often made simply as triggers for CI/CD workflows, especially during initial setup.

SnipFlow moves the "clean code" requirements above from the commit to the Pull Request. While this "breaks" the traditional best practice of git, it has many advantages:

- It's easier in practice for developers to manage these requirements together outside the restrictions of a single commit, meaning they are generally able to achieve a higher degree of code cleanliness, and with far less arcane "git magic"
- The code cleanliness step is done in a collaborative space, with input from team leads and peers, helping maintain high standards
- Any automated tests etc are run on shared infrastructure, with predictable and replicable results

By mandating that PRs use the `squash-and-merge` strategy, the ultimate aim of a clean `main` branch history is maintained and usually improved upon, with far fewer negative implications on developer productivity.

## Transparency

## Communication
