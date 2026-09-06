# Drafts / Unpublished Pages

Files placed in `_drafts/` are excluded by GitHub Pages and will **not** be published to the live site.

## How to Republish Rachel's Downstairs

When you want to make Rachel's Downstairs live again:

### Method 1: In VS Code / File Explorer
1. Drag or move `rachelsdownstairs.html` from `_drafts` back into the main project root folder.
2. Commit and push your changes to GitHub on the `main` branch.

### Method 2: In Terminal / PowerShell
Run the following commands:
```bash
git mv _drafts/rachelsdownstairs.html rachelsdownstairs.html
git commit -m "Republish Rachel's Downstairs"
git push origin main
```

