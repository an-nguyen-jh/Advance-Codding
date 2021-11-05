# Git

## Question 1: When we are creating new feature, what branch should we based on and why?

There are some factors we need to consider when choosing a based-on branch. The new feature is an independent feature or depends on some features. If it depends on other features which features does it depened on?

1. New feature is an independent feature or it is only related to features already delivered to the production branch. We should base on the production branch. Because:

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

- we want to separate the fix bug process and continue to develop a new feature or new feature may rewrite code cause bug and change the bug.

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

1. Find commit ahead of merge commit with `git reflog`. In this case we will find commit at HEAD@{2}.

```git
 git reflog
```

2. Use `git reset --hard` to the branch HEAD points slected commit (commit ahead of merge commit).

```git
 git reset --hard HEAD@{2}
```

3. Use `git reflog` to find commit after merge commit which we lost after reset (In this case a1fsas8). After that, use `git cherry-pick` to choose that commit and apply it onto current branch. Use

```git
 git cherry-pick -n a1fsas8
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

## Question 5: Our current branch is A-B-C-D. foo.js file belongs to another branch and has been merged in the current branch (commit E). At the current branch, we edited foo.js file and create commit F. But later on, we want to undo merge (commit E) and we did it. We also don't want foo.js file to exist after we undo the commit E. What is the solution for this case?

We can remove foo.js file from the commit and untracking that file. We can do it by two ways:

Case 1. We at the HEAD of current branch is at commit F. We can reset commit F and untracking foo.js file.

1. Use `git reset` to presented with the files from the most recent commit (HEAD) and you will be able to commit them.

```git
git reset --soft HEAD~1
```

2. Use the `git rm` command in order to delete the file from the index (also called the staging area) or use `git reset HEAD foo.js` to untracking file.

```git
  git rm --cached foo.js
  or
  git reset HEAD foo.js
```

3. Commit changes again with the “–amend” option.

```git
  git commit -am
```

Case 2: We want to make it in undo process to compare commit F (after merge) with commit D (before merge)

1. After reset hard branch back to commit D, We use `git cherry-pick -n` to start pick commit F.

```git
  git cherry-pick -n <commitF>
```

2. At this step, we have a conflict because foo.js file didn' t exist at commit D and was modified in commit F. We know that foo.js file is belongs to another branch. So we can remove foo.js file from staging area and keep working.

```git
  git rm --cached foo.js
```
