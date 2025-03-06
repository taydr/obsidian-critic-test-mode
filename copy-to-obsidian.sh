#!/bin/bash

# Define the target directory
TARGET_DIR="/Users/tay/Library/Mobile Documents/iCloud~md~obsidian/Documents/tay/.obsidian/plugins/obsidian-critic-test-mode"

# Create the target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Copy the files
cp main.js "$TARGET_DIR/"
cp styles.css "$TARGET_DIR/"
cp manifest.json "$TARGET_DIR/"

echo "Files copied successfully to $TARGET_DIR" 