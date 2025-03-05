# Deploying to GitHub Pages

## Step 1: Create Your Repository
1. Go to https://github.com/pawanchhipa
2. Click "New" to create a new repository
3. Name it "portfolio" or "portfolio-website"
4. Make it public
5. Don't initialize with any files

## Step 2: Download and Prepare Files
1. Download your Replit project:
   - Click the "Download ZIP" button at the top of your Replit project
   - Extract the ZIP file on your computer

2. Open a terminal in the extracted folder

3. Initialize and push to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio website commit"
git branch -M main
git remote add origin https://github.com/pawanchhipa/portfolio.git
git push -u origin main
```

## Step 3: Configure GitHub Pages
1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "gh-pages" branch
4. Wait a few minutes for the deployment to complete
5. Your site will be available at: `https://pawanchhipa.github.io/portfolio`

## Build Requirements
- Node.js 20.x or later is required
- Make sure all dependencies are installed with `npm install`
- The site will automatically build and deploy when you push to main

## Troubleshooting
If you encounter any issues:
1. Check that the repository is public
2. Ensure GitHub Pages is enabled
3. Check the Actions tab for build status
4. If the site doesn't appear, wait a few minutes and refresh
5. Check the Actions tab for build errors (from original)
6. Ensure all dependencies are correctly listed in package.json (from original)


## Updating Your Site
After making changes locally:
```bash
git add .
git commit -m "Update website content"
git push origin main
```
The GitHub Action will automatically rebuild and deploy your site.