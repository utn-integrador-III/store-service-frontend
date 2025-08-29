#!/bin/sh
set -eu
DOCROOT="/usr/share/nginx/html"

cat > "${DOCROOT}/env.js" <<EOF
window.__ENV__ = {
  API_BASE_URL: "${API_BASE_URL:-http://localhost:8000}",
  APP_NAME: "${APP_NAME:-Store Service}",
  NODE_ENV: "${NODE_ENV:-production}"
};
EOF

exec nginx -g "daemon off;"
