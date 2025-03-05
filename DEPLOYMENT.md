# Deploying to GitHub Pages

Follow these steps to deploy your portfolio website to GitHub Pages:

1. Create a new GitHub repository for your portfolio website

2. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

3. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "gh-pages" branch
   - Click "Save"

4. Your site will be available at: `https://your-username.github.io/your-repo-name`

## Important Notes

- The first deployment may take a few minutes
- You can check the deployment status in the "Actions" tab of your repository
- Make sure your repository is public for GitHub Pages to work with the free tier
- After any changes, simply push to main branch and the site will automatically redeploy

## Troubleshooting

If you encounter any issues:
1. Check the Actions tab for build errors
2. Ensure all dependencies are correctly listed in package.json
3. Verify that your repository is public
4. Check that GitHub Pages is enabled in repository settings
