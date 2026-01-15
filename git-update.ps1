Set-Location $PSScriptRoot

# Add all changes
git add .

# Commit
git commit -m "feat: MicroCMS Integration

- Added microcms-js-sdk for headless CMS integration
- Created libs/microcms.ts with typed fetch functions
- Implemented ISR with 60s revalidation
- Added fallback data for development without CMS
- Updated GridView to accept projects from server component
- Added .env.local.example for environment setup

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

# Push
git push origin master
