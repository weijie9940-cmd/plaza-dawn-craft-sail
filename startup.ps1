$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
try {
  $response = Invoke-WebRequest -Uri 'http://127.0.0.1:8080/' -TimeoutSec 2
  if ($response.StatusCode -eq 200) { exit 0 }
} catch { }
$logDirectory = Join-Path $PSScriptRoot 'screenshots'
New-Item -ItemType Directory -Path $logDirectory -Force | Out-Null
Start-Process -FilePath (Get-Command npm.cmd).Source -ArgumentList @('run', 'dev') -WorkingDirectory $PSScriptRoot -WindowStyle Hidden -RedirectStandardOutput (Join-Path $logDirectory 'dev.log') -RedirectStandardError (Join-Path $logDirectory 'dev-error.log') | Out-Null
