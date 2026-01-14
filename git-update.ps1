Set-Location $PSScriptRoot

# Add all changes
git add .

# Commit
git commit -m "Refactor: Fixed UI Edition - No Global Scroll

- Replaced scroll-based navigation with Tab-based views
- Fixed 100vh viewport (Native App style)
- Internal scroll only within GridView using Lenis
- GSAP view transitions with cross-fade
- Hamburger menu with mix-blend-difference for visibility
- JAMES WEBB category triggers Dark theme automatically

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

# Push
git push origin master
