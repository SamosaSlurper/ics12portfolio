$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace '<span style="color: var\(--accent-primary\);">&lt;/&gt;</span> My Portfolio', '<span style="color: var(--accent-primary);">&lt;/&gt;</span> Pranav Vellanki'
    $content = $content -replace '<a href="#" onclick="alert\(''Coming Soon!''\); return false;">Citations</a>', '<a href="citations.html">Citations</a>'
    Set-Content -Path $file.FullName -Value $content -NoNewline
}
