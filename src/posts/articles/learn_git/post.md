---
title: How I learn Git
descr: My first steps on learning Git, handy tools and a cool cheat sheet
date: June 2th, 2025
---

# How I Learn Git

- [Git Games](#git-games)
- [Practice, Practice, Practice...](#practice-practice-practice)
- [Git Cheat Sheet](#git-cheat-sheet)

I've been learning Git for a couple of years and have gathered some insights I'd like to share.

## Git Games

I’m a visual learner (yes, someone once claimed that learning types don’t exist — but I still use the term to get my point across). This means I crave visualizations to learn concepts effectively and efficiently. Especially highly logical ones like Git, which can feel like a strategic game where you plan moves to achieve your desired outcome.

### [Learning Git Branching](https://learngitbranching.js.org/)

_Learning Git Branching_ was my first touchpoint with Git. It helped me get comfortable interacting with the intimidating command-line interface. The tool features a colorful user interface with smooth animations and a straightforward, simplified approach to teaching basic Git concepts. It breaks things down into bite-sized lessons grouped into chapters, each with multiple levels ranging from beginner to advanced.

You can experiment freely in this safe-space CLI and reset the level if you’ve cornered yourself ... again 😄

**Bonus**: It runs entirely in the browser!

### [Oh My Git!](https://ohmygit.org/)

I haven’t tried this one out yet, but it popped up right below _Learning Git Branching_ in the search results — so I guess it’s promising. It does require local installation, though.

## Practice, Practice, Practice...

As with literally anything in life, the best way to build a skill is to get your hands dirty. I created a basic repo and ran every command on my cheat sheet just to see what would happen. I simulated workflows like initializing a repo with `git init`, creating branches with `git checkout -b`, adding files with `git add`, committing with `git commit -m`, and pushing/pulling changes until my keyboard begged for mercy. Rinse and repeat. That’s how you get better.

And if I ran into trouble? I searched the web for answers — or simply asked my pal ChatGPT.

## Git Cheat Sheet

Over time, I’ve accumulated a mix of fundamental Git commands and a few advanced or edge-case commands. Here's the full list:

**_💡 Note: I update this cheat sheet every now and then._**

- [Get Started](#get-started)
- [Logging Information](#logging-information)
- [Branching](#branching)
- [Navigation](#navigation)
- [Tracked Files Status](#tracked-files-status)
- [File Tracking](#file-tracking)
- [Undo Staging](#undo-staging)
- [Undo Commits](#undo-commits)
- [Stash Files](#stash-files)
- [Push to Remote](#push-to-remote)
- [Manage Remotes](#manage-remotes)
- [Update Local Branch](#update-local-branch)
- [Manage configurations](#manage-configurations)

<!-- prettier-ignore-start -->

### Get Started

| Command | Description |
|--------|-------------|
| `git help -a` | Shows all available commands. If stuck in list view: press `SHIFT + G` to jump to the end, then `q` to quit. |
| `git init` | Creates a new Git repository or reinitializes an existing one. Lets you use Git commands in the directory. |
| `git clone` | Clones a repository to your local machine. Adds the URL used as a remote named `origin`. |
|`git clean`|Permanently removes untracked files in workin directory. Use `-n` (dry run) to see which files will get deleted without them actually being deleted. Use `-i` to see and interface and select the files to be deleted. Use `-d` to include untracked directories. |

### Logging Information

| Command | Description |
|--------|-------------|
| `git log` | Shows a detailed commit history. |
| `git log --graph` | Displays commit history as a graph. |
| `git log --graph --decorate --oneline` | Condensed view with graph, decorations, and one-line summaries. |
| `git log --grep="..."` | Search the commit history for keywords. |
| `git blame <file>` | Allows to find out who has committed the latest change for each line of code. |


### Branching

| Command | Description |
|--------|-------------|
| `git branch` | Lists all local branches and highlights the current branch. |
| `git branch -vv` | Shows detailed info about local branches. |
| `git branch <new-branch>` | Creates a new branch from the current `HEAD`. |
| `git branch -d <existing-branch>` | Deletes a branch. Errors if it has unmerged changes. Use `-D` to force delete. |
| `git branch -a` | Shows all local and remote branches. Use `-r` for remote only. |
| `git branch -m <old-name> <new-name>` | Renames a branch. (*Does the remote branch need to be renamed manually? Good question!*) |
| `git branch -m <new-name>` | Renames the current branch. [More info](https://stackoverflow.com/questions/6591213/how-can-i-rename-a-local-git-branch). |
|`git branch --set-upstream-to=origin/main`|Sets upstream for an existing branch without pushing.|
| `git branch --merged` | Shows branches that have already been merged into the currently active branch. |
| `git branch --no-merged` | Listing branches that have not yet been merged into the currently active branch. |

### Navigation

| Command | Description |
|--------|-------------|
| `git switch` / `git checkout <branch>` | Switches branches. |
| `git checkout <commit-hash>` | Moves `HEAD` to a specific commit. |
| `git checkout -b <new-branch>` | Creates a new branch at current `HEAD`. |
| `git checkout -b <new-branch> <start-point>` | Creates a new branch from a specific branch or commit. |
| `git checkout -` | Switches to the previously checked-out branch. |

### Tracked Files Status

| Command | Description |
|--------|-------------|
| `git status` | Shows the status of tracked/untracked and staged/unstaged files. |
| `git status --short` | Short summary. Symbols:<ul><li>`??` - Untracked</li><li>`A` - Staged</li><li>`M` - Modified</li><li>`D` - Deleted</li></ul> |

### File Tracking

| Command | Description |
|--------|-------------|
| `git add <file>` | Stages a file. |
| `git diff` | Shows changes not yet staged. |
| `git commit -m "<message>"` | Commits staged changes with a message. |
| `git commit -am "<message>"` | Stages and commits modified (already tracked) files. |

### Undo Staging

| Command | Description |
|--------|-------------|
| `git reset` | Unstages all files (keeps changes). |
| `git reset HEAD <file>` | Unstages a specific file. |
| `git restore --staged <file>` | Unstages the file, keeps local changes. |

### Undo Commits

| Command | Description |
|--------|-------------|
| `git checkout <commit-hash> <file>` | Restores a file from a previous commit without switching branches. |
| `git reset --soft <hash>` | Moves `HEAD` back to a commit, keeps changes staged. |
| `git reset --hard <hash>` | Danger: resets `HEAD` and discards all changes. |
| `git revert <commit>` | Creates a new commit that reverses changes from the given commit. |

### Stash Files

| Command | Description |
|--------|-------------|
| `git stash` | Stashes staged and modified changes (not new/ignored files). |
| `git stash -u` | Includes untracked files. |
| `git stash -a` | Includes untracked and ignored files. |
| `git stash list` | Shows stashed entries. |
| `git stash pop` | Applies and removes the latest stash. |
| `git stash pop stash@{<num>}` | Applies a specific stash. |
| `git stash branch <branch-name> stash@{<num>}` | Creates a new branch and applies the stash to it. |
| `git stash drop stash@{<num>}` | Deletes a specific stash. |
| `git stash clear` | Deletes all stashes. |

### Push to Remote

| Command | Description |
|--------|-------------|
| `git push` | Pushes the current branch to its upstream remote. |
| `git push <remote> <branch>` | Pushes a local branch to the specified remote. |
| `git push <remote> <source>:<destination>` | Pushes local `<source>` branch to remote `<destination>`. |
| `git push <remote> :<branch>` | Deletes the specified remote branch. |
| `git push -u origin <branch>` | Pushes and sets upstream tracking. |

### Manage Remotes

| Command | Description |
|--------|-------------|
| `git remote add <name> <url>` | Adds a remote. |
| `git remote show <name>` | Shows info about the remote. |
| `git remote rename <old> <new>` | Renames a remote. |
| `git remote remove <name>` | Removes a remote. |
| `git push <remote> --delete <branch>` | Deletes a remote branch. |

### Update Local Branch

| Command | Description |
|--------|-------------|
| `git fetch` | Fetches changes from remote. |
| `git fetch <remote> <branch>` | Fetches and adds a new branch. |
| `git merge <branch>` | Merges the specified branch into current. <br> Example: `git merge origin/development` |
| `git merge --abort` | Cancels a merge. It restores the workspace version of all files to the state before the merge was initiated. |
| `git merge --no-ff` | To have a Fast-Forward Merge recorded as a merge of branches. A Fast-Forward Merge does not get a commit of its own in the Git log history (so not visible as a merge of two branches). It is not a separate commit, but just that the commits from the "further advanced" branch are now treated as commits of the target branch. |
| `git mergetool` | Resolving merge conflicts with. Haven't used this command yet, but it could come in handy in the future. |
| `git rebase <branch>` | Reapplies commits on top of another branch. |
| `git rebase --abort` | Cancels a rebase. |
| `git pull` | Runs `fetch` then `merge`. |
| `git pull --rebase` | Runs `fetch` then `rebase`. |
| `git pull <remote> <branch>` | Pulls a specific branch. |

### Manage configurations
|Command|Description|
|---|---|
|`git remote -v`|Shows information on all currently set remotes and their URLs for `fetch` and `push` operations.|
|`git config --list`|Lists all Git configs and their location in the file system (global and local).|
|`git config --global user.name <your-name>`|Sets your name globally for all repositories.|
|`git config --global user.email <your-email>`|Sets your email globally (used in commits).|
|`git config --global init.defaultBranch main`|Sets the default branch name to `main` insteaed of `master` (as this is outdated).|

<!--I share more on conifguration file options in [this post](http://localhost:3000/git_config_global).-->

<!-- prettier-ignore-end -->

## Sources

- [Git Tricks](https://www.youtube.com/watch?v=ecK3EnyGD8o&pp=ygUKZ2l0IHRyaWNrcw%3D%3D) by Fireship
- [Git Docs - Work with remotes](https://git-scm.com/book/de/v2/Git-Grundlagen-Mit-Remotes-arbeiten)
- [Revert and undo changes](https://docs.gitlab.com/topics/git/undo/)
- My good buddy ChatGPT
