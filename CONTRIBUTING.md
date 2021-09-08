# Contribution Notes

## Cloning the repository locally

See the [documentation notes on working with this project](README.md#Working-With-this-Project)

## Adding Features

Before adding new features, create a [new issue here](https://github.com/adams-id/tic-tac-toe/issues/new) and give it an `enhancement` tag. The issue should contain information on the reason for the new feature and a criteria checklist for whoever would be reviewing the new feature. Create a new branch off the `dev` branch and name it `feature/<feature-title>`. Add the updates on this branch and create a [new pull request](https://github.com/adams-id/tic-tac-toe/compare) asking for the updates to be merged into the `dev` branch.

Updates would be occassional merged from the `dev` branch and into the `master` branch.

## Reporting Issues and fixing bugs

When reporting and issues, create a [new issue here](https://github.com/adams-id/tic-tac-toe/issues/new) and add as much information on the issue as possible to allow anyone looking at it to know what needs to be done. The issue ticket should contain acceptance criteria for what would be regarded as fixed. The issue should also be given a `bug` tag to indicate that to the developers that it is a bug.

### Fixing bugs

When fixing bugs, ensure that an issue ticket has been created to address the bug. Create a new branch off the `dev` branch with the name `fix/<bug-title>`. Add the fixes for this issue in this branch and create a [new pull request](https://github.com/adams-id/tic-tac-toe/compare) asking for the issues to be merged into the `dev` branch. Ensure that the fix implemented meets the acceptance criteria of the ticket created.

## Reviewing code

When reviewing code, make sure to run it locally to confirm that the updates don't break the application. Also check that the code style is consistent with the application.
