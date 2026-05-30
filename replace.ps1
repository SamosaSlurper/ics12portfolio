$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace '<a href="#" onclick="alert\(''Coming Soon!''\); return false;">Tutorial</a>', '<a href="tutorial.html">Tutorial</a>'
    Set-Content -Path $file.FullName -Value $content -NoNewline
}
