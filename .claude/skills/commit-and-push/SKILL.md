---
name: commit-and-push
description: Commits and pushes changes. Use when the user asks to commit, push, save changes, or after completing work that should be committed.
---

# Commit and Push Workflow

## Instructions

1. **Review current changes**
   - Run `git status` to see what files have changed
   - Run `git diff` to review the actual changes
   - Identify which changes are relevant to the current context

2. **Stage relevant files**
   - Add files that are relevant to the work being committed
   - Exclude unrelated files or system files like `.DS_Store`

3. **Propose commit message**
   - Draft a clear, concise commit message based on the changes
   - Present the proposed commit message to the user
   - Use the AskUserQuestion tool to confirm or let them modify it

4. **Commit with confirmed message**
   - Only proceed after user confirms the message
   - Run `git commit` with the confirmed message

5. **Push to remote**
   - Run `git push` to push to the current branch
   - Report success or any errors

## Commit message guidelines

- Keep the first line under 72 characters
- Use present tense ("Add feature" not "Added feature")
- Be specific about what changed and why
