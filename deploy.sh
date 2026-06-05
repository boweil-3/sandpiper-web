#!/bin/bash
set -e

echo "Building..."
npm run build

echo "Deploying to Cloudflare..."
npx wrangler deploy

echo "Done — live at sandpiper-app.com"
