#!/bin/bash

# Image Optimization Script
# This script optimizes images by resizing and compressing them

set -e

echo "Starting image optimization..."

# Function to optimize a single image
optimize_image() {
    local file="$1"
    local max_width="$2"
    local quality="${3:-85}"

    if [ ! -f "$file" ]; then
        echo "File not found: $file"
        return 1
    fi

    local original_size=$(du -h "$file" | cut -f1)

    # Get current dimensions
    local current_width=$(sips -g pixelWidth "$file" | tail -1 | awk '{print $2}')

    # Only resize if image is larger than max_width
    if [ "$current_width" -gt "$max_width" ]; then
        echo "Resizing $file from ${current_width}px to ${max_width}px..."
        sips -Z "$max_width" "$file" > /dev/null 2>&1
    fi

    # Compress image
    sips -s format jpeg -s formatOptions "$quality" "$file" > /dev/null 2>&1

    local new_size=$(du -h "$file" | cut -f1)
    echo "✓ Optimized: $file ($original_size → $new_size)"
}

# Optimize hero images (max 1920px wide)
echo ""
echo "=== Optimizing Hero Images ==="
find public/images/hero -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read img; do
    optimize_image "$img" 1920 85
done

# Optimize leadership photos (max 800px wide)
echo ""
echo "=== Optimizing Leadership Photos ==="
find public/images/leadership -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read img; do
    optimize_image "$img" 800 90
done

# Optimize event gallery images (max 1600px wide)
echo ""
echo "=== Optimizing Event Gallery Images ==="
find public/images/events -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read img; do
    optimize_image "$img" 1600 80
done

echo ""
echo "✓ Image optimization complete!"
echo ""
echo "Checking final sizes..."
du -sh public/images/
