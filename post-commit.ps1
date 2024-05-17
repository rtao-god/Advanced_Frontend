npm run gs

if ($LASTEXITCODE -eq 0) {
    Write-Host "Tree structure generated successfully."
} else {
    Write-Host "Failed to generate tree structure."
    exit 1
}

git add src-structure.tree
git commit --allow-empty -m "Update structure tree"
git push