# Question 2: Scenario:
# You're working on a feature branch named feature/new-header.
# The main branch has been updated with changes that conflict with your work.
# Provide the Git commands to resolve this conflict and successfully merge your changes.

# Ensure you're on your feature branch
git branch
git status
# both tells you the current branch you're on

# Fetch the latest changes from the remote repository
git fetch

# Merge the main branch into your feature branch
git merge develop
git merge master
# depends on if theres a develop branch or only a master branch you're branching off of

# If there are conflicts, resolve them in your code editor

# After resolving conflicts, stage the changes
git add .

# Commit the merge
git commit -am "Merging develop into feature branch"

# Push the merged changes to your remote feature branch
git push

# When ready to merge into main, create a pull request or use:
git checkout develop
git pull
git merge feature/new-header
git push