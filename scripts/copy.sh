#!/bin/bash

# Define the source file and target directory
SOURCE_FILE="/path/to/source/file"
TARGET_DIR="/path/to/target/directory"

# Check if source file exists
if [ ! -f "$SOURCE_FILE" ]; then
    echo "Source file does not exist: $SOURCE_FILE"
    exit 1
fi

# Check if target directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "Target directory does not exist: $TARGET_DIR"
    exit 1
fi

# Loop through each folder in the target directory
for folder in "$TARGET_DIR"/*/; do
    if [ -d "$folder" ]; then
        cp "$SOURCE_FILE" "$folder"
        echo "Copied $SOURCE_FILE to $folder"
    fi
done

echo "Copy operation completed."