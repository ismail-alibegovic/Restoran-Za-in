#!/bin/bash
cd "$(dirname "$0")"
NODE_ENV=production PORT="${PORT:-3000}" bun .next/standalone/server.js
