Set-Location $PSScriptRoot

# Create GitHub repo and push
& 'C:\Program Files\GitHub CLI\gh.exe' repo create webb-portfolio --public --source=. --remote=origin --push --description "WEBB Inc. Portfolio - Film / Photo / Design"
