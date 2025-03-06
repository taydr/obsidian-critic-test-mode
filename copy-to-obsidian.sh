#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
    source .env
else
    echo "Error: .env file not found"
    exit 1
fi

# Check if OBSIDIAN_VAULT_PATH is set
if [ -z "$OBSIDIAN_VAULT_PATH" ]; then
    echo "Error: OBSIDIAN_VAULT_PATH is not set in .env file"
    exit 1
fi

# Create the target directory if it doesn't exist
mkdir -p "$OBSIDIAN_VAULT_PATH"

# Copy the files
cp main.js "$OBSIDIAN_VAULT_PATH/"
cp styles.css "$OBSIDIAN_VAULT_PATH/"
cp manifest.json "$OBSIDIAN_VAULT_PATH/"

echo "Files copied successfully to $OBSIDIAN_VAULT_PATH" 