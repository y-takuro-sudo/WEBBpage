$env:Path = 'C:\Program Files\nodejs;' + $env:Path
Set-Location $PSScriptRoot
& 'C:\Program Files\nodejs\npm.cmd' run dev
