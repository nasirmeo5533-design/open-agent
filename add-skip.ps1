$f = Resolve-Path "index.html"
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$skip = '<a class="skip-link" href="#main-content">Skip to content</a>'
$new = $c.Replace('<body class="home">', "<body class=""home"">" + [Environment]::NewLine + $skip)
[System.IO.File]::WriteAllText($f, $new, (New-Object System.Text.UTF8Encoding($false)))
"done"