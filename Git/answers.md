# Git

## Question 1: When we are creating new feature, what branch should we based on and why?

There are some factorials we need to consider when choosing a based-on branch. The new feature is an independent feature or depends on some features. If it depends on other features which features does it depned on?

1. New feature is an independent feature or it only related to features already delivery to the production branch. We should base on production branch. Because:

   - When developing a new feature, it needs to be suitable for every related feature.

   - Features are in master branch so if a new feature is finished and merged to production branch, it only merges a new feature in production branch.

2. New feature is related to test feature in master branch. We should base on master branch. Because:

   - New feature needs test features for development.

## Question 2: If we have a feature branch that haven't been merged to production and that branch have bug, what course of action are you going to do with Git to before resolving the bug?

There are two ways to resolve a bug in a feature branch: fix the bug directly on a branch or create a new branch to handle the bug.

Solution 1:

- Bug makes a small effect in the process to develop a new feature.

- Can resolve in a short time.

==> Start to resolve it directly in a feature branch.

Prepare before start resolve:

- Stop the process devoloping new feature to avoid changing the bug.

- Commit all recent changes in branch to avoid losing code.

```git
  git add .
  git commit -m "Temporary code store"
```

Solution 2:

- Bug is take time to resolve. It is complex and hard to fix.

- Make parallel work. someone handle bug and other teammates keep developing feature.

==> Start to create a new branch to fix that bug.

Prepare before start resolve:

- Commit all recent changes in branch to avoid losing code and start to create a new branch.

```git
  git add .
  git commit -m "Temporary code store"
```

- Create a new branch to handle bug.

```git
  git checkout -b "fix/issus..."
```

## Question 3: If someone accidentally merge a feature (feature/delete-user) onto production and have a list of commitId ended with (0492978, fc9348c, k101100), then another commit (a1fsas8) is added on top of the production branch. How do we remove that merged feature?

Solution 1: Using `git revert` to revert back to the commit ahead of merge commit.

Steps:

1. Find commit hash of merge commit with `git reflog`.

```git
 git reflog
```

2. Using `git revert` to create a revert commit to reverting the effects of that unwanted merge.
   -m 1 option tells Git that we want to keep the parent side of the merge (which is the branch we had merged into).

```git
 git revert -m 1 <commit_hash> or HEAD@{1}
```

3. Resolve conflict (if it happened) between tip of branch and the revert commit.

```git
 git add .
 git revert --continue
```

Problem: when using this solution we have to handle conflict make by the last commit (tip of the branch) and revert commit. The last commit has the content of merge and also content of new update, so you have to separate them and chose what part to remove and what part to accept.

Nhược điểm:
Reverting a merge commit does not affect _history_ that the merge had. So basicly feature/delete-user branch merged in master branch already. If you try to merge feature/delete-user branch in master branch again it will not work.

Solution 2: using reset with cherry-pick to resolve

1.  Find commit ahead of merge commit with `git reflog`. In this case we will find commit at HEAD@{2}.

```git
 git reflog
```

2. Use `git reset --hard` to the branch HEAD points slected commit (commit ahead of merge commit).

```git
 git reset --hard HEAD@{2}
```

3. Use `git reflog` to find commit after merge commit which we lost after reset (In this case a1fsas8). After that, use `git cherry-pick` to choose that commit and apply it onto current branch.

```git
 git cherry-pick a1fsas8
```

4. use `git push -f` to update change to remote branch.

```git
 git push -f origin master
```

Problem: As same as solution 1.

## Question 4: Compare git interactive rebase & git reset

Common:

- using to rewwrite commit history.
- Change based on old commits.

Reset:

Pros:

- Move HEAD pointer & branch pointer to a specific commit.
- Remove unnecessary commits.

Cons:

- Lost local commits if these commits didn't push to remote.

Interactive rebase:

- make variety actions with commit history: squash, edit, split, reorder, ...
- Add change to multiple commits.
