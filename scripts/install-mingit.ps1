$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$downloads = "E:\codex\.tools\downloads"
New-Item -ItemType Directory -Force -Path $downloads | Out-Null

$zip = Join-Path $downloads "MinGit-2.53.0.2-busybox-64-bit.zip"
$targetSize = 36677594
$assetUrl = "https://api.github.com/repos/git-for-windows/git/releases/assets/371026321"

for ($i = 1; $i -le 12; $i++) {
  Write-Host "Download attempt $i"
  & curl.exe --ipv4 -C - -L -H "Accept: application/octet-stream" $assetUrl -o $zip
  $size = (Get-Item $zip).Length
  Write-Host "Current size: $size"
  if ($size -ge $targetSize) {
    break
  }
}

$finalSize = (Get-Item $zip).Length
if ($finalSize -lt $targetSize) {
  throw "MinGit download incomplete: $finalSize / $targetSize"
}

$gitDir = "E:\codex\.tools\git"
if (Test-Path $gitDir) {
  Remove-Item -Recurse -Force $gitDir
}

Expand-Archive -Path $zip -DestinationPath $gitDir -Force
& "$gitDir\cmd\git.exe" --version
