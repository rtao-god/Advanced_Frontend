#!/bin/sh

npm run gs

if [ $? -eq 0 ]; then
    echo "Tree structure generated successfully."
else
    echo "Failed to generate tree structure."
    exit 1
fi

git add src-structure.tree
git commit -m "Update structure tree"
git push