#!/bin/bash
# OPTIC-FLARE Web Prototype One-Click Launcher
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="$DIR/08_Web_Prototype_OPTIC_FLARE"

if [ ! -d "$TARGET_DIR" ]; then
  TARGET_DIR="$DIR"
fi

PORT=8080
# Check if port 8080 is available, if not use 8085
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
  echo "Port $PORT is already serving."
else
  echo "Starting local server on port $PORT..."
  python3 -m http.server $PORT --directory "$TARGET_DIR" > /dev/null 2>&1 &
  sleep 1
fi

echo "Opening OPTIC-FLARE Prototype in your default browser..."
open "http://localhost:$PORT"
